//const = constant. 값을 바꿀 수 없음.
// 그럼 variable의 값을 변경하고 싶을땐?

const a = 5;
const b = 2;

let myName = 'yejin';

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log('hello ' + myName);

// const로 선언을 했다면 변경할 수 없지만, let으로 선언했기 때문에 변수 값을 변경할 수 있음
myName = 'Won Yejin';
console.log('hello ' + myName);

// always (대부분) const : 재선언 X, 재할당 X
// need to (필요할때) let : 재선언 X, 재할당 O

// var (variable) : 재선언 O, 재할당 O
