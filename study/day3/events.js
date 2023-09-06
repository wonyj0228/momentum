const h1 = document.querySelector('div.hello:first-child h1');

console.log(h1);
// console.log : object로 표시한 element를 보여줌
// on~ : 이벤트

h1.innerText = 'Click ME!';

// h1.style.color = 'blue';
// style도 javascript에서 변경할 수 있음.

function handleH1Click() {
  h1.style.color = 'tomato';
  console.log('h1 was clicked!');
}

function handleMouseEnter() {
  console.log('Mouse is here!');
  h1.innerText = 'Mouse is here!';
}
function handleMouseLeave() {
  h1.innerText = 'Mouse is gone!';
}

h1.addEventListener('click', handleH1Click);
// h1.onclick = handleH1Click;
// 함수를 할당하는 방식으로도 사용할 수 있다.
h1.addEventListener('mouseenter', handleMouseEnter);
h1.addEventListener('mouseleave', handleMouseLeave);
// event를 listen 하는 것. 어떤 event를 listen하고싶은지 적어야 함
// 해당 event에 어떤 function을 동작시킬지 argument를 2개 넘겨줘야 함
// function name만 작성하고 함수 실행을 시켜선 안됨.

// 객체.removeEventListener 이벤트를 지울수도 있음
// 따라서 함수를 할당하는 방식보다 더 나음

console.dir(h1);
// element에 가능한 event를 javascript 관점에서 디테일하게 보고싶을 때

function handleWindowResize() {
  document.body.style.backgroundColor = 'pink';
  // html의 body, head, title과 같은 메인 태그들은 바로 불러올 수있음
  // 나머지 element들은 querySeletor or getElementByid 등으로 불러와야함
}

function handleWindowCopy() {
  alert('copy!');
}

function handleWindowOffline() {
  alert('SOS no WIFI');
}

function handleWindowOnline() {
  alert('ALL GOOD!');
}

// window 객체의 이벤트를 사용할 수도 있음
// resize = 화면 사이즈 조정
// online & offline = wifi 연결
window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);
