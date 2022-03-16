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
        question: '군중제어 효과에 걸리지 않은 경우 방어력이 증가하는 학생은?',
        img: "white.png",
        a: '스미레',
        b: '에이미',
        c: '유우카',
        d: '츠바퀴',
        correct: 'a',
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
        question: '아까부터 배경노래로 나오는 브금 출처는?',
        img: "white.png",
        a:'가챠',
        b:'홈스크린',
        c:'숍',
        d:'배틀',
        correct: 'b',
    },
    {
        question: '선생의 귀를 파준 학생의 생일은?',
        img: "wihte.png",
        a:'4.1',
        b:'5.1',
        c:'8.1',
        d:'9.1',
        correct:'d'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const imgEl = document.getElementById("img");
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

