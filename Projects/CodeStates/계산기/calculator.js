const cal = document.getElementById('calculator');

document.addEventListener('DOMContentLoaded', function(){
    //다크모드 토글
    if(document.querySelector('.darkmode')){
        if(localStorage.getItem("darkmode") == 'on'){
            //다크모드 켜기
            document.body.dataset.darkmode='on';
            document.querySelector('#toggle-radio-dark').checked = true;
        }
        //다크모드 이벤트 핸들러
        document.querySelector('.darkmode').addEventListener("click", e=>{
            if(e.target.classList.contains('todark')){
                document.getElementById('logo').src="logow.png"
                document.body.dataset.darkmode='on';
                localStorage.setItem("darkmode", "on");
                cal.style.backgroundColor = 'grey';
            }else if(e.target.classList.contains('tolight')){
                document.getElementById('logo').src="logod.png"
                document.body.dataset.darkmode='off';
                localStorage.setItem("darkmode", "off");
                cal.style.backgroundColor = 'white';
            }
        },false);
    }else{
        localStorage.removeItem("darkmode");
    }
})












// class calculator {
//     constructor(displayElement) {
//         this.displayElement = displayElement
//         this.displayContent = ''
//     }

//     appendNumber(number) {
//         this.displayContent += number
//     }

//     appendOperator(operator) {
//         this.displayContent += operator
//     }

//     updateDisplay() {
//         this.displayElement.value = this.displayContent
//     }
// }

// const buttons = document.getElementsByClassName('btn')
// const displayElement = document.getElementById('result')

// const calculator = new calculator(displayElement)

// buttons.forEach(botton => {
//     button.addEventListener('click', () => {
//         switch (button.dataset.type) {
//             case 'operator':
//                 console.log('operator')
//                 break
//             case 'ac':
//                 console.log('ac')
//                 break
//             case 'equals':
//                 console.log('equals')
//                 break
//             default:
//                 calculator.appendNumber(button.innerText)
//                 calculator.updateDisplay()
//                 break
//         }
//     })
// })