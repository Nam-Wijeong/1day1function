// 구구단 외우기
function gogodan() {
    for(let i = 2; i <=9; i++) {
        for(let j = 1; j <=9; j++) {
            console.log(`${i} X ${j} = ${i * j}`);
        }
    }
}
gogodan();