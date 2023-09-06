// form
const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

// form : submit 형태의 버튼은 데이터를 전송하며 페이지를 새로고침한다.
function onLoginSubmit(event) {
  //브라우저는 어떤 function에 대해 기본적으로 수행하는 동작이 있다.
  // ex) form을 submit 했을 때 새로고침을 함
  // preventDefault는 event 객체에 만들어진 기본적인 함수
  event.preventDefault(); // --> 기본 수행동작을 막는 함수
  // eventListener에 어떤 함수를 추가해도 javascript는
  // 첫번째 argument로 발생된 event에 대한 정보를 객체에 담아 줌

  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

// submit : form에서 엔터나 버튼을 클릭할 때 발생
// onLoginSubmit() 을 사용하지 않는건, 바로 실행되기 때문에
// submit이 발생하는 시점에 해당 함수가 발생되길 원함으로 실행시키지 않은것.

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
