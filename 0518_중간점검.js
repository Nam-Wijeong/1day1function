// ✨ 중간점검
// 윤년인지 확인하는 함수
function isLeapYear(year) {
    return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)
}
console.log(`2020년은 윤년일까? => ${isLeapYear(2020)}`);
console.log(`2022년은 윤년일까? => ${isLeapYear(2022)}`);
console.log(`1900년은 윤년일까? => ${isLeapYear(1900)}`);


// a 부터 b 까지 합과 곱 구하기 함수
function sumAll(a, b) {
    let output = 0;
    for(let i = a; i <= b; i++) {
        output += i;
    }
    return output
}
console.log(`1부터 100까지 숫자의 합은 ? ${sumAll(1, 100)} 입니다.`)

function multiplyAll(a, b) {
    let output = 1;
    for(let i = a; i <= b; i++) {
        output *= i;
    }
    return output
}

console.log(`3부터 8까지 숫자의 곱은? ${multiplyAll(3, 8)} 입니다.`)


// 최솟값 최댓값 구하기 함수

function min(array) {
    let output = array[0];
    for(item of array) {
        if(output > item) {
            output = item;
        }
    }
    return output
}

const testArray = [32, 28, 143, 61, 18, 22]
console.log(`${testArray} 중에서 최솟값은 ${min(testArray)} 입니다.`)

function max(array) {
    let output = array[0];
    for(item of array) {
        if(output < item) {
            output = item;
        }
    }
    return output
}

const testArray2 = [32, 28, 143, 61, 18, 22];
console.log(`${testArray2} 중에서 최댓값은 ${max(testArray2)} 입니다.`)

