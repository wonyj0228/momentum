// function = 반복해서 사용할 수 있는 코드 조각

function sayHello(nameOfPerson, age) {
  console.log('Hello my name is ' + nameOfPerson + " and I'm " + age);
}

sayHello('yejin', 10);
sayHello('nico', 23);
sayHello('J', 21);

// firstNumber, secondNumber는 지역변수로 function 안에서만 존재한다.
function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

// NaN = Not a number

plus(8, 60);

function divide(a, b) {
  console.log(a / b);
}

divide(98, 20);

// 객체 내에 value값이 function일 수도 있음. 매개변수도 받을 수 있음
const player = {
  name: 'nico',
  sayHello: function (otherName) {
    console.log('hello! ' + otherName + ' Nice to meet you!');
  },
};

player.sayHello('lynn');
player.sayHello('nico');
