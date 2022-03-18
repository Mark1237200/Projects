const quizData = [
    {
        question: "이 학생은 누구인가?",
        img: "hasumi.png",
        a: "아리스",
        b: "하스미",
        c: "아이리",
        d: "이즈나",
        correct: "b",
    },
    {
        question: '이 학생은 누구인가?',
        img: "koharu.png",
        a: '이즈나',
        b: '세리카',
        c: '요시미',
        d: '코하루',
        correct: 'd',
    },
    {
        question: '이 학생은 누구인가?',
        img: "haruka.png",
        a: '하루카',
        b: '무츠키',
        c: '히비키',
        d: '세리카',
        correct: 'a',
    },
    {
        question:'장비에 옵션이 붙기 시작하는 티어는?',
        img:'white.png',
        a:'1',
        b:'2',
        c:'3',
        d:'4',
        correct:'d',
    },
    {
        question: '군중제어 효과에 걸리지 않은 경우 방어력이 증가하는 학생은?',
        img: "white.png",
        a: '스미레',
        b: '에이미',
        c: '유우카',
        d: '츠바퀴',
        correct: 'a',
    },
    {
        question:'한섭 오픈날짜는?.. 은 너무쉽고 D-4때 배너 캐릭터는?',
        img:'white.png',
        a:'노노미',
        b:'요시미x나츠',
        c:'카요코x무츠키',
        d:'미도리x모모이',
        correct:'d',
    },
    {
        question:'학생들이 한 패러디가 일치하지 않는것은?',
        img:'berserker.png',
        a:'스미레-역전재판',
        b:'아카네-페스나',
        c:'아카리-슈타게',
        d:'하레-하프라이프',
        correct:'c',
    },
    {
        question:'닌닌의 나이는?',
        img:'white.png',
        a:'15',
        b:'16',
        c:'17',
        d:'18',
        correct:'a',
    },
    {
        question:'게임부 부장 여왕님 나이는?',
        img:'white.png',
        a:'15',
        b:'16',
        c:'17',
        d:'18',
        correct:'b',
    },
    {
        question: '다음 학생 중 SMG무기가 아닌 학생은?',
        img: "white.png",
        a: '우타하',
        b: '하레',
        c: '노도카',
        d: '아이리',
        correct: 'b',
    },
    {
        question: '이 무기를 사용하는 학생은?',
        img: 'chehg.png',
        a: '체리노',
        b: '카요코',
        c: '치나츠',
        d: '코타마',
        correct: 'a',
    },
    {
        question: '이 무기의 주인은?',
        img: 'husmg.png',
        a: '네루',
        b: '츠바퀴',
        c: '유우카',
        d: '후우카',
        correct: 'd',
    },
    {
        question:'이 무기를 다루는 학생은?',
        img:'mumg.png',
        a:'이즈미',
        b: '마키',
        c: '무츠키',
        d: '피나',
        correct: 'c',
    },
    {
        question: '이 오파츠를 메인으로 필요로하는 요오오망한 학생은?',
        img: 'haniwa.png',
        a: '요시미',
        b: '코하!루',
        c: '네?루',
        d: '시로코',
        correct: 'b',
    },
    {
        question:'아!루의 메인 오파츠는?',
        img:'white.png',
        a:'만드라고라',
        b:'에테르',
        c:'로혼치 사본',
        d:'보이니치 사본',
        correct:'c',
    },
    {
        question: '22/03/16기준 스페셜인 총 학생수는?',
        img: "white.png",
        a: '18',
        b: '20',
        c: '21',
        d: '23',
        correct: 'c',
    },
    {
        question: '다음 학생 중 헤일로가 세모인 학생은?',
        img: "white.png",
        a:'스즈미',
        b:'사야',
        c:'코토리',
        d:'3명 모두 아님',
        correct: 'c',
    },
    {
        question: '연인스토리 락 듣는 소녀는?',
        img: "white.png",
        a:'츠루기',
        b:'카린',
        c:'피나',
        d:'카요코',
        correct: 'd',
    },
    {
        question: '선생의 귀를 파준 학생의 생일은?',
        img: "white.png",
        a:'4.1',
        b:'5.1',
        c:'8.1',
        d:'9.1',
        correct:'d',
    },
    {
        question:'센세에게 코박죽을 해준 학생은?',
        img:'white.png',
        a:'요시미',
        b:'무츠키',
        c:'시로코',
        d:'하나코',
        correct:'a',
    },
    {
        question: '이 브금의 출처는?',
        audio: "homescreen.mp3",
        img: "white.png",
        a:'Gacha',
        b:'Homescreen',
        c:'Shop',
        d:'Battle',
        correct: 'b',
    },
    {
        question:'성우와 맞는 학생은?(중)',
        img:'white.png',
        audio:'tsurugi.mp4',
        a:'츠루기',
        b:'코하루',
        c:'네루',
        d:'이오리',
        correct:'a',
    },
    {
        question:'성우와 맞는 학생은?(상)',
        audio:'shizuko.mp4',
        img:'white.png',
        a:'에이미',
        b:'시즈코',
        c:'햄버거',
        d:'하나에',
        correct:'b',
    },
    {
        question:'성우와 맞는 학생은?(최상)',
        audio:'aru.mp4',
        img:'white.png',
        a:'아!루',
        b:'몰?루',
        c:'털!자',
        d:'코하!루',
        correct:'a',
    },
    {
        question:'성우와 맞는 학생은?(극악)',
        audio:'hina.mp4',
        img:'white.png',
        a:'피나',
        b:'히나',
        c:'세리나',
        d:'아스나',
        correct:'b',
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const imgEl = document.getElementById("img");
const audioEl = document.getElementById("audio");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData [currentQuiz];

    questionEl.innerText = currentQuizData.question;
    imgEl.innerHTML = "<img src=" + currentQuizData.img + " />";
    audioEl.innerHTML = "<audio autoplay loop><source src=" + currentQuizData.audio + "></audio>";
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>널 좋아하는 학생은
            ${quizData.length}명 중 ${score} 명이야.</h2> 
            <button onClick="location.reload()">Reload</button>
            `;
        }
    }
});

