// 하루에 함수 하나씩 냅다 외우기~!! day 2
// 1. a 부터 b 까지 더하는 함수
function sumAll(a, b) {
    let output = 0;
    for(let i =a; i <= b; i++) {
        output += i;
    }
    return output
}

console.log(`1 부터 100까지 숫자의 합은 ? ${sumAll(1, 100)}`);
console.log(`1 부터 500까지 숫자의 합은 ? ${sumAll(1, 500)}`);


// 2. a 부터 b 까지 곱하는 함수
function multiplyAll(a, b) {
    let output = 1;
    for(let i = a; i <= b; i++) {
        output *= i;
    }
    return output
}

console.log(`1 부터 10 까지 숫자의 곱은 ? ${multiplyAll(1, 10)}`);
console.log(`3 부터 8 까지 숫자의 곱은 ? ${multiplyAll(3, 8)}`);
