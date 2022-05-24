// 하루에 함수 하나씩 냅다 외우기~!! day 7
// 별트리 만들기🎄 (제로초님 코드)

// const level = 5;
// for(let i = 1; i <= level; i++) {
//     console.log(" ".repeat(level - i) + "*".repeat(i * 2 - 1));
// }

// 별트리 만들기🎄 (재현님 코드) 
const level = 5;
for(let i =1; i <= level; i++) {
    let tree = "";
    for(let k = 1; k <= level - i; k++) {
        tree += " ";
    }
    for(let j = 1; j <= i * 2 - 1; j++) {
        tree += "*";
    }
    console.log(tree);
}
