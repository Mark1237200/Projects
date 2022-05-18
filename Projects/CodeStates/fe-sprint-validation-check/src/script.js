const elInputUsername = document.querySelector("#username");
const elFailurMessage = document.querySelector(".failure-message");
const elSuccessMessage = document.querySelector('.success-message');


elInputUsername.onkeyup = function () {
  if(isMoreThan4Length(elInputUsername.value)) {
    //성공 메세지가 보여야 함
    elSuccessMessage.classList.remove('hide')

    //실패 메시지가 가려져야 함
    elFailurMessage.classList.add('hide')
  } else {
    //성공 메세지가 가려져야 함
    elSuccessMessage.classList.add('hide')

    //실패 메시지가 보여야 함
    elFailurMessage.classList.remove('hide') 
  }
};

function isMoreThan4Length(value) {
  return value.length >= 4
}

function isMatch (password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  isMatch(password1, paaword2)
  
}