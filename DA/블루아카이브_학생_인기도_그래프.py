import matplotlib.pyplot as plt
import matplotlib.font_manager as fm
import os
import matplotlib.image as mpimg
import numpy as np
import tkinter as tk
from tkinter import ttk
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
from BA_Character_Crawling import get_crawling_data

# 캐릭터 등장 횟수 데이터
character_data = get_crawling_data()

# 캐릭터 이미지가 저장된 폴더 경로
image_folder = 'DA\BA_Character_Img'

def set_korean_font():
    plt.rc('font', family='NanumGothic')

# 데이터 디버깅: 필터링 전후 데이터 확인
def debug_character_data(combined_data, filtered_data):
    print("Combined Data (Before Filtering):")
    for name, count in combined_data.items():
        print(f"{name}: {count}")
    print("\nFiltered Data (After Filtering):")
    for name, count in filtered_data.items():
        print(f"{name}: {count}")

# 막대 그래프 그리기
def plot_character_bar_chart(character_data, image_folder, parent):
    set_korean_font()  # 한글 폰트 설정

    # group_counts와 individual_counts 합치기
    combined_data = {**character_data['group_counts'], **character_data['individual_counts']}
    
    # 0이 아닌 등장 횟수만 필터링하고 정렬 (오름차순)
    filtered_data = {name: count for name, count in combined_data.items() if count > 0}
    sorted_data = sorted(filtered_data.items(), key=lambda x: x[1])  # 오름차순으로 정렬

    # 데이터 확인 (디버깅 용도)
    debug_character_data(combined_data, filtered_data)

    if not sorted_data:
        print("No data available for plotting.")
        return

    characters, counts = zip(*sorted_data)

    # figure 크기 설정 
    fig, ax = plt.subplots(figsize=(12, len(characters) * 0.7))  # 캐릭터 수에 맞춰 세로 크기 조정

    # y 좌표를 더 띄우기 위해 spacing 추가
    y_positions = np.arange(len(characters)) * 5  # 간격을 늘리기 위해 값을 곱함

    # 수평 막대 그래프 그리기 (막대 높이 유지)
    bar_height = 4  # 막대 높이를 유지
    ax.barh(y_positions, counts, color='skyblue', edgecolor='black', height=bar_height)

    # 캐릭터 이미지 표시
    image_size = 2
    for i, character in enumerate(characters):
        img_path = os.path.join(image_folder, f"{character}.png")
        if os.path.exists(img_path):
            img = mpimg.imread(img_path)
            
            # 이미지 크기 설정 (일정한 크기를 유지하도록 설정)
            img_extent = [
            max(counts) * 1.05,  # x 시작 위치
            max(counts) * 1.05 + image_size,  # x 끝 위치
            y_positions[i] - (bar_height / 2),  # y 시작 위치
            y_positions[i] + (bar_height / 2)  # y 끝 위치
        ]
            ax.imshow(img, aspect='auto', extent=img_extent, zorder=2)  # 이미지 높이 조정
        else:
            print(f"이미지 {img_path} 찾을 수 없음.")
    # y축 범위 조절 (여백 조절)
    ax.set_ylim(-2, y_positions[-1] + 2)  # y축 상하한 조절

    # y축 레이블 간격 조절
    ax.tick_params(axis='y', pad=20)  # 레이블과 축 간의 패딩(간격) 조절

    ax.set_xlabel('언급 횟수')
    ax.set_title('커뮤니티에 가장 많이 언급된 학생')

    # y축 레이블 설정 및 레이블 간격 조정
    ax.set_yticks(y_positions)  # y축 위치를 y_positions로 설정
    ax.set_yticklabels(characters, fontsize=13)  # y축 레이블 설정

    # x축 범위 조정
    ax.set_xlim(0, max(counts) * 1.5)

    x = np.arange(0)
    plt.bar(x, 0.1)

    canvas = FigureCanvasTkAgg(fig, master=parent)
    canvas.draw()
    canvas.get_tk_widget().pack(fill=tk.BOTH, expand=True)

# 마우스 휠 이벤트 처리
def on_mouse_wheel(event, canvas):
    if event.delta:  # Windows
        canvas.yview_scroll(-1 * int(event.delta / 120), "units")
    else:  # MacOS
        canvas.yview_scroll(-1 * int(event.num), "units")

# Tkinter 설정
root = tk.Tk()
root.title("캐릭터 언급 횟수 그래프 (스크롤 가능)")

# 메인 프레임
main_frame = ttk.Frame(root)
main_frame.pack(fill=tk.BOTH, expand=True)

# 캔버스 생성 (스크롤 영역)
canvas = tk.Canvas(main_frame)
canvas.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)

# 스크롤바 추가
scrollbar = ttk.Scrollbar(main_frame, orient=tk.VERTICAL, command=canvas.yview)
scrollbar.pack(side=tk.RIGHT, fill=tk.Y)

# 캔버스에 스크롤바 연결
canvas.configure(yscrollcommand=scrollbar.set)

# 프레임에 그래프 추가
graph_frame = ttk.Frame(canvas)
canvas.create_window((0, 0), window=graph_frame, anchor="nw")

# 그래프 생성 및 삽입
plot_character_bar_chart(character_data, image_folder, graph_frame)

# 마우스 휠 이벤트 바인딩 (윈도우와 MacOS의 경우 각각 다른 이벤트 사용)
canvas.bind_all("<MouseWheel>", lambda event: on_mouse_wheel(event, canvas))  # Windows
canvas.bind_all("<Button-4>", lambda event: on_mouse_wheel(event, canvas))  # Linux/Mac Scroll Up
canvas.bind_all("<Button-5>", lambda event: on_mouse_wheel(event, canvas))  # Linux/Mac Scroll Down

# 스크롤 영역 크기 설정 (캔버스 높이를 데이터 개수에 맞춰서 조정)
graph_frame.update_idletasks()
canvas.configure(scrollregion=canvas.bbox("all"))

# 고정된 캔버스 크기 설정 (너비는 고정하고 높이는 그래프의 전체 크기보다 작게 설정)
canvas.config(width=800, height=600)  # 가로와 세로 크기 고정

# Tkinter 창 실행
root.mainloop()
