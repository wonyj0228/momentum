const age = prompt('How old are you?');
// prompt() : 사용자에게 창을 띄어 값을 받음.
// 하지만 지금은 사용하지 않음

console.log(typeof age);
// typeof(공백)변수 : 해당 변수의 value값의 type을 알려줌

console.log(typeof parseInt(age));
// parseInt() : String -> int로 변경

const age2 = parseInt(prompt('How old are you? :)'));

console.log(isNaN(age2));
// isNaN() : 해당 value값이 NaN인가? true면 NaN,false면 숫자라는 뜻

if (isNaN(age2)) {
  console.log('Please write a Number');
} else {
  console.log('Thank you for writing your age.');
}

if (isNaN(age2)) {
  console.log('Please write a number');
} else if (age2 < 18) {
  console.log('You are too young.');
} else if (age2 > 50) {
  console.log('Please stop drinking');
} else {
  console.log('You can drink');
}

if (isNaN(age2) || age25 < 0) {
  console.log('Please write a real positive number');
} else if (age < 18) {
  console.log('You are too young.');
} else if (age >= 18 && age <= 50) {
  console.log('You can drink!');
} else {
  console.log("You can't drink!");
}

// else, else if는 optional함

// true || true === true
// false || true === true
// true || false === true
// false || false ===false
// true && true === true
// false && true === false
// true && false === false
// false && false === false

// ==(동등 연산자) 와 ===(일치 연산자)
// 동등연산자는 값만 같으면 true
// 일치연산자는 값과 값의 data type 까지 비교. 일치연산자 사용을 추천
// 배열이나 객체는 데이터 값이 같더라도 메모리 주소를 참조함.
// 따라서 두 배열이나 객체를 비교할때 메모리 주소가 다르기때문에 같다고 볼 수 없음.
