const quizData = [
    {
        question: "학생모집 1회 비용은?",
        img: "white.png",
        a: "10",
        b: "20",
        c: "100",
        d: "120",
        correct: "d",
    },
    {
        question: '학생머리 위에 떠 다니는 것은?',
        img: "white.png",
        a: '링',
        b: '헤일로',
        c: '손잡이',
        d: '고리',
        correct: 'b',
    },
    {
        question: '1exp는 몆 ap 인가?',
        img: "white.png",
        a: '1',
        b: '10',
        c: '100',
        d: '120',
        correct: 'a',
    },
    {
        question:'카페에 오는 학생은 몆시간 주기로 쓰담쓰담이 가능한가?',
        img:'white.png',
        a:'1',
        b:'2',
        c:'3',
        d:'4',
        correct:'c',
    },
    {
        question: '스케쥴 티켓의 최대치는 무엇에 따라 늘어나는가?',
        img: "white.png",
        a: '선생의 레벨수',
        b: '호감도 10이상 학생수',
        c: '해당 학교 학생수',
        d: '지역 랭크 총합수',
        correct: 'd',
    },
    {
        question:'일일미션의 갯수는?',
        img:'white.png',
        a:'9',
        b:'10',
        c:'11',
        d:'12',
        correct:'d',
    },
    {
        question:'8천장 쳐도 안나오는 이 학생의 이름은?',
        img:'shune.png',
        a:'스미레',
        b:'슌',
        c:'유즈',
        d:'하레',
        correct:'b',
    },
    {
        question:'놀란 이 학생이 들고 있는건?',
        img:'sora.png',
        a:'피처폰',
        b:'바코드',
        c:'스마트폰',
        d:'총',
        correct:'a',
    },
    {
        question:'이번 기대되는 아이돌 프로젝트의 학생 중 메인은?',
        img:'white.png',
        a:'아리스',
        b:'아루',
        c:'유우카',
        d:'히후미',
        correct:'c',
    },
    {
        question: '다음중 인권인 이오리와 같은 스킬 코스트를 가진 학생은?',
        img: "white.png",
        a: '수히나',
        b: '아카네',
        c: '세리카',
        d: '호시노',
        correct: 'a',
    },
    {
        question: '이 학생은 누구인가?',
        img: 'kotorii.png',
        a: '체리노',
        b: '코토리',
        c: '치나츠',
        d: '코타마',
        correct: 'b',
    },
    {
        question:'일일미션을 6회 이상 완료시 청휘석 보상 갯수는?',
        img:'white.png',
        a:'5',
        b:'10',
        c:'15',
        d:'20',
        correct:'d',
    },
    {
        question: '동물귀가 아닌 학생은?',
        img: 'white.png',
        a: '세리카',
        b: '츠바퀴',
        c: '시로코',
        d: '모모이',
        correct: 'd',
    },
    {
        question:'이 무기를 다루는 학생은?',
        img:'hibiki.png',
        a:'히비키',
        b: '카린',
        c: '수루기',
        d: '하레',
        correct: 'a',
    },
    {
        question: '제조 크래프트 챔버의 가격은?',
        img: 'white.png',
        a: '1000',
        b: '2000',
        c: '3000',
        d: '5000',
        correct: 'b',
    },
    {
        question:'새 학생의 모집 기간은?',
        img:'white.png',
        a:'7일',
        b:'10일',
        c:'14일',
        d:'15일',
        correct:'c',
    },
    {
        question: '하드 11-3지역 조각파밍 학생은?',
        img: "white.png",
        a: '하루나',
        b: '호시노',
        c: '히후미',
        d: '시로코',
        correct: 'b',
    },
    {
        question: '노말에서 하드 변경시 틀린점은?',
        img: "white.png",
        a:'스테이지가 2개 줄어든다',
        b:'청휘석 선물상자가 있다',
        c:'배경이 밤이된다',
        d:'태그가 바뀐다',
        correct: 'c',
    },
    {
        question:'중장갑에 약한 속성은?',
        audio:'kotori.mp3',
        img:'white.png',
        a:'일반',
        b:'폭팔',
        c:'관통',
        d:'신비',
        correct:'d',
    },
    {
        question: 'in10000의 보상으로 옳은것은?',
        img: "white.png",
        a:'청휘석 1200',
        b:'총력전코인 600',
        c:'나무 트로피',
        d:'크레딧 1천만',
        correct: 'a',
    },
    {
        question: '이 목소리의 학생은 누구인가? (공앱은 안들림)',
        audio: "ayane.mp3",
        img: "white.png",
        a:'아야네',
        b:'아리스',
        c:'치나츠',
        d:'후우카',
        correct:'c',
    },
    {
        question:'이 목소리의 학생은 누구인가?',
        audio: "chinatsu.mp3",
        img:'white.png',
        a:'노도카',
        b:'아카리',
        c:'후우카',
        d:'시미코',
        correct:'a',
    },
    {
        question: '앍 센세!! 를 만들어낸 이 학생은?',
        audio: "sense.mp3",
        img: "white.png",
        a:'마키',
        b:'아스나',
        c:'모모이',
        d:'시즈코',
        correct: 'd',
    },
    {
        question:'유우카의 특징중 틀린것은?',
        img:'YuuKaHalo.png',
        a:'IFF로 후열 적을 몰살한다',
        b:'가방이 없어 단단하지 않다',
        c:'정실이다',
        d:'탱커가 부족할때 쓰다 버린다',
        correct:'a',
    },
    {
        question:'목소리의 주인은?',
        audio:'aruv.mp3',
        img:'white.png',
        a:'시즈코',
        b:'아루',
        c:'아리스',
        d:'노도카',
        correct:'b',
    }
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
            <button onClick="location.reload()">다시하기</button>
            `;
        }
    }
});

