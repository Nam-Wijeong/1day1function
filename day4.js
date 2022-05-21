// 하루에 함수 하나씩 냅다 외우기~!! day 4
// 가격 낮은 순서 구하기

let products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 32000, title: 'Check Shirt' },
    { id: 2, price: 15000, title: 'Black Tie' },
    { id: 3, price: 67000, title: 'Springfield Shirt' },
    { id: 4, price: 82000, title: 'Red Mini Dress' },
  ];

function lowToHigh() {
    products.sort(function(a, b) {
        return a.price - b.price;
    })
    console.log(products);

}
lowToHigh();