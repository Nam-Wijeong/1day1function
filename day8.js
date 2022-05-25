// 하루에 함수 하나씩 냅다 외우기~!! day 8
// 퀴즈 판독기 만들기📝
// 1. 유저가 답을 맞추면 alert('성공')
// 2. 유저가 답을 3번 찍어서 못맞추면 alert('멍청아')
// 3. 2번까지는 틀렸으면('땡')
const answerBtn = document.querySelector('#send-answer');
const answer = document.querySelector('#answer');
let count = 0;

answerBtn.addEventListener('click', ()=> {
    count++;
    if(answer.value == 1335) {
        alert('정답!!!')
    }else if(answer.value != 1335 && count < 3) {
        alert('땡!!!!')
    }else{
        alert('멍충아!!!!!!!')
    }
})
