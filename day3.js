// 하루에 함수 하나씩 냅다 외우기~!! day 3
// 1. 최솟값 구하기
function min(array) {
    let output = array[0];
    for(item of array) {
        if(output > item) {
            output = item;
        }
    }
    return output
}
const testArray = [20, 40, 342, 51, 12, 37]
console.log(`${testArray} 중에서 최솟값은 ${min(testArray)} 입니다.`)



// 2. 최댓값 구하기
function max(array) {
    let output = array[0];
    for(item of array) {
        if(output < item) {
            output = item;
        }
    }
    return output
}

const testArray2 = [20, 40, 342, 51, 12, 37];
console.log(`${testArray2} 중에서 최댓값은 ${max(testArray2)} 입니다`)