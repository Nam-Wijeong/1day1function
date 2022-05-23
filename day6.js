// 하루에 함수 하나씩 냅다 외우기~!! day 6
// 평균 점수 구하기

function average(...array) {
    let sum = 0;
    for(let i=0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(Math.floor(sum / array.length));
}

average(72, 64, 88, 90);