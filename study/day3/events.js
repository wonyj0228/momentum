const title = document.querySelector('div.hello:first-child h1');

console.log(title);
// console.log : object로 표시한 element를 보여줌
// on~ : 이벤트

title.innerText = 'Click ME!';

// title.style.color = 'blue';
// style도 javascript에서 변경할 수 있음.

function handleTitleClick() {
  title.style.color = 'tomato';
  console.log('title was clicked!');
}

function handleMouseEnter() {
  console.log('Mouse is here!');
  title.innerText = 'Mouse is here!';
}
function handleMouseLeave() {
  title.innerText = 'Mouse is gone!';
}

title.addEventListener('click', handleTitleClick);
title.addEventListener('mouseenter', handleMouseEnter);
title.addEventListener('mouseleave', handleMouseLeave);
// event를 listen 하는 것. 어떤 event를 listen하고싶은지 적어야 함
// 해당 event에 어떤 function을 동작시킬지 argument를 2개 넘겨줘야 함
// function name만 작성하고 함수 실행을 시켜선 안됨.

console.dir(title);
// element에 가능한 event를 javascript 관점에서 디테일하게 보고싶을 때
