document.title = 'hello! from. JS';

// document = HTML을 의미함. 브라우저에 존재하고있는 object
// console.dir(document) -> document의 상세 정보를 확인가능
// JS에서 HTML에 접근하고 읽고, 수정할 수 있다.

// HTML이 load된 후에 JS load됨

const title = document.getElementById('title');
// id를 통해서 html의 element를 가져올 수 있음.

title.innerText = 'Got you!';

console.log(title.id);
console.log(title.className);
console.log(title.innerText);

const his = document.getElementsByClassName('hi');
// class가 동일한 elements를 array 형태로 return
console.log('his----------------');
console.log(his);

const hellop = document.getElementsByTagName('h2');
// html의 태그 이름들로 element를 가져올  수도 있음
console.log('hellop----------------');
console.log(hellop);

// 하지만 내가 원하는 특정 element를 가져오기보단 전체적으로 가져오는 경우가 많음
// 따라서 가장 좋은 방법 2가지
// querySelector, querySelectorAll

const getHello = document.querySelector('.hi h2');
// querySelector : element를 css 방식으로 검색할 수 있음
console.log('getHello----------------');
console.log(getHello);

// 하지만 classname="hi" 인 h2가 여러개라면?
// 가장 첫번째로 검색되는 element만 가져옴.
// 모든 element를 가져오고 싶을 때 사용하는 것 = querySelectorAll
const getHellos = document.querySelectorAll('.hi h2');
console.log('getHellos----------------');
console.log(getHellos);
// array형태로 return해줌

// getElementById , class 등등 도 사용할 수 있지만 하위요소를 가져오기 어려움
// querySelector를 가장 많이 사용할 예정
