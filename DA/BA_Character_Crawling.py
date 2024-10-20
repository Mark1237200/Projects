import matplotlib.pyplot as plt
import matplotlib.font_manager as fm
import os
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import time
import re

# 크롬 옵션 설정
chrome_options = Options()
chrome_options.add_argument('--headless')  # 브라우저를 띄우지 않고 실행
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')

# 드라이버 설정
driver = webdriver.Chrome(options=chrome_options)

# DCInside projectmx 갤러리 URL
url = 'https://gall.dcinside.com/mgallery/board/lists/?id=projectmx'

# 페이지 넘김 여부
has_next_page = True
page = 1

# 최대 페이지 수 제한
max_pages = 20

# 검색할 캐릭터 목록
character_names = [
    '호시노', '시로코', '노노미', '세리카', '아야네', '유메', '마코토', '이로하', '이부키', '사츠키', '치아키', '히나', 
    '아코', '이오리', '치나츠', '아루', '무츠키', '카요코', '하루카', '하루나', '아카리', '이즈미', '준코', '후우카', 
    '주리', '세나', '카스미', '메구', '에리카', '키라라', '뇌제', '리오', '노아', '유우카', '코유키', '유즈', '모모이', 
    '미도리', '아리스', '네루', '아스나', '카린', '아카네', '토키', '히마리', '치히로', '코타마', '하레', '마키', '우타하', 
    '히비키', '코토리', '스미레', '에이미', '레이', '나기사', '미카', '세이아', '히후미', '하나코', '아즈사', '코하루', 
    '스즈미', '레이사', '우이', '시미코', '아이리', '카즈사', '요시미', '나츠', '미네', '세리나', '하나에', '츠루기', 
    '하스미', '이치카', '마시로', '사쿠라코', '히나타', '마리', '니야', '카호', '치세', '시즈코', '피나', '우미카', '츠바키', 
    '미모리', '카에데', '미치루', '츠쿠요', '이즈나', '쿠즈노하', '나구사', '렌게', '키쿄', '유카리', '코쿠리코', 
    '슈로', '아라타', '와카모', '키사키', '미나', '사야', '슌', '코코나', '루미', '레이죠', '카구야', 
    '체리노', '토모에', '마리나', '노도카', '시구레', '메루', '모미지', '미노리', '야쿠모', '타카네', '칸나', '코노카', 
    '키리노', '후부키', '미야코', '사키', '모에', '미유', '유키노', '니코', '쿠루미', '오토기', '사오리', '미사키', '히요리', 
    '아츠코', '선생', '아로나', '린', '모모카', '아유무', '카야', '아오이', '스모모', '하이네', '마이', '시논', '츠무기', 
    '스오우', '히카리', '노조미', '라브', '아키라', '아케미', '미쿠', '미사카', '쇼쿠호', '사텐', '소라', '시바', '양복', 
    '골콩트', '데칼코마니', '마에스트로', '베아트리체', '지하생활자', '수히나', '드히나', '드아코', '수오리', '온나츠', '정아루', '뉴아루',
    '드아루', '뉴츠키', '정츠키', '수시노', '임시노', '무시노', '수로코', '테로코', '쿠로코', '라로코', '수노미', '정리카',
    '뉴리카', '수리카', '수야네', '드요코', '정요코', '뉴요코', '정루카', '뉴루카', '운루나', '체루나', '정루나', '뉴루나',
    '정카리', '뉴카리', '수즈미', '뉴준코', '정준코', '뉴준코', '정우카', '뉴우카', '운우카', '체우카', '메유즈', '메모이',
    '메도리', '메리스', '바네루', '바스나', '바카린', '바카네', '바토키', '캠타마', '캠하레', '캠마키', '응타하', '치비키',
    '치토리', '수이미', '수후미', '수나코', '수즈사', '수하루', '수우이', '밴즈사', '밴시미', '밴이리', '클리나', '클나에',
    '수루기', '운스미', '체스미', '수시로', '수나타', '운마리', '체마리', '수치세', '수즈코', '가바키', '수모리', '수즈나',
    '수카모', '사사야', '온도카', '온구레', '온리노', '치모에', '치리나', '수칸나', '수부키', '수리노', '수야코', '수사키',
    '수미유', '수모에', '수요리', '수츠코', '디오리', '응비키', '응토리', '치타하', '새아루', '새리카', '새츠키', '새요코',
    '새루카', '새루나', '새카리', '새준코', '새우카', '떡카리', '슈에링', '슈에린', '로리슌', '프선생', '아인', '소프', '오르',
    '프센세', '센세', '히죽히죽'
]

# 캐릭터 이름이 등장한 횟수 저장용 딕셔너리
character_counts = {name: 0 for name in character_names}

# 그룹별 캐릭터 목록
character_groups = {
    '정아루': ['뉴아루', '정아루', '새아루'],
    '정리카': ['뉴리카', '정리카', '새리카'],
    '정츠키': ['뉴츠키', '정츠키', '새츠키'],
    '임시노': ['임시노', '무시노'],
    '쿠로코': ['테로코', '쿠로코'],
    '정요코': ['뉴요코', '정요코', '새요코'],
    '정루카': ['뉴루카', '정루카', '새루카'],
    '정루나': ['뉴루나', '정루나', '새루나'],
    '정카리': ['뉴카리', '정카리', '새카리', '떡카리'],
    '정준코': ['뉴준코', '정준코', '새준코'],
    '정우카': ['뉴우카', '정우카', '새우카'],
    '운우카': ['운우카', '체우카'],
    '운루나': ['운루나', '체루나'],
    '운스미': ['운스미', '체스미'],
    '운마리': ['운마리', '체마리'],
    '응타하': ['치타하', '응타하'],
    '치비키': ['치비키', '응비키'],
    '치토리': ['치토리', '응토리'],
    '슈에링': ['슈에링', '슈에린', '로리슌'],
    '프선생': ['프선생', '프센세'],
    '선생': ['선생', '센세']
}

# 크롤링 함수
def crawl_titles(driver):
    titles = driver.find_elements(By.CSS_SELECTOR, 'td.gall_tit.ub-word > a')
    for title in titles:
        for name in character_names:
            if re.search(name, title.text, re.IGNORECASE):  # 대소문자 구분하지 않음
                character_counts[name] += 1

# URL로 접속
driver.get(url)

while has_next_page and page <= max_pages:  # 페이지 제한 추가
    # 페이지가 로드될 때까지 대기
    time.sleep(2.5)

    # 현재 페이지에서 게시글 제목 크롤링
    crawl_titles(driver)

    print(f"Page {page} 크롤링 완료. ")

    try:
        # "다음" 버튼 찾기
        next_button = driver.find_element(By.LINK_TEXT, '다음')
        # 다음 페이지로 이동
        next_button.click()
        page += 1
    except Exception as e:
        print(f"다음 페이지로 이동할 수 없습니다: {e}")
        has_next_page = False  # 오류 발생 시 종료

# 모든 페이지에서 제목 크롤링 완료
driver.quit()

print("그룹별 캐릭터 등장 횟수:")
for group, members in character_groups.items():
    total_count = sum(character_counts[member] for member in members)
    if total_count > 0:
        print(f"{group}: {total_count}")

print("\n개별 캐릭터 등장 횟수:")
for name, count in character_counts.items():
    if count > 0 and not any(name in members for members in character_groups.values()):
        if name == "양복":
            print(f"검은 양복: {count}")
        elif name == "쇼쿠호":
            print(f"쇼쿠호 미사키: {count}")
        else:
            print(f"{name}: {count}")

def get_crawling_data():
    # 그룹별 등장 횟수 계산
    group_counts = {}
    used_characters = set()  # 그룹에서 사용된 캐릭터 추적
    
    for group, members in character_groups.items():
        total_count = sum(character_counts[member] for member in members if member in character_counts)
        if total_count > 0:
            group_counts[group] = total_count
            used_characters.update(members)  # 그룹에 속한 캐릭터들은 개별 카운트에서 제외

    # 개별 등장 횟수에서 그룹에 속하지 않은 캐릭터만 포함
    individual_counts = {name: count for name, count in character_counts.items() if count > 0 and name not in used_characters}

    # 결과를 딕셔너리 형태로 반환
    return {
        'group_counts': group_counts,
        'individual_counts': individual_counts
    }