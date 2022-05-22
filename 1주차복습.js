// 최솟값 구하기
// const testArray = [20, 40, 342, 51, 12, 37]
function min(array) {
    let output = array[0];
    for(let item of array ) {
        if(output > item) {
            output = item;
        }
    }
    return output
}
const testArray = [20, 40, 342, 51, 12, 37]
console.log(`${testArray} 중에서 최솟값은 ${min(testArray)} 입니다.`)


// 최댓값 구하기
// const testArray = [20, 40, 342, 51, 12, 37]
function max(array) {
    let output = array[0];
    for(let item of array) {
        if(output < item) {
            output = item;
        }
    }
    return output
}
console.log(`${testArray} 중에서 최댓값은 ${max(testArray)} 입니다.`);


// 가격 낮은 순서 구하기
let products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 32000, title: 'Check Shirt' },
    { id: 2, price: 15000, title: 'Black Tie' },
    { id: 3, price: 67000, title: 'Springfield Shirt' },
    { id: 4, price: 82000, title: 'Red Mini Dress' },
  ];

 function lowToHigh() {
     products.sort(function(a,b) {
         return a.price - b.price;
     })
     console.log(products);
 }
 lowToHigh();


// 369 게임(3, 6, 9의 배수가 나올 때 마다 짝👏)
function 삼육구(number) {
    let nums = number.toString().split('');
    let clap = [];

    for(let num of nums) {
        if(num === '3' || num === '6' || num === '9') {
            clap.push('짝👏')
        }
    }
    return clap;
}
console.log(삼육구(369));
console.log(삼육구(336699));
console.log(삼육구(14));