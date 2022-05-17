// 하루에 함수 하나씩 냅다 외우기~!! day 1
// 윤년인지 확인하는 함수
// 1. 4로 나누어 떨어지는 해는 윤년이다.
// 2. 하지만 100으로 나누어 떨어지는 해는 윤년이 아니다.
// 3. 하지만 400으로 나누어 떨어지는 해는 윤년이다.

function isLeapYear(year) {
    return (year % 4  === 0) && (year % 100 !== 0) || (year % 400 === 0);    
}

console.log(`2020년은 윤년일까? -> ${isLeapYear(2020)}`); // true
console.log(`2000년은 윤년일까? -> ${isLeapYear(2000)}`); // true
console.log(`1900년은 윤년일까? -> ${isLeapYear(1900)}`); // false
console.log(`2010년은 윤년일까? -> ${isLeapYear(2010)}`); // false