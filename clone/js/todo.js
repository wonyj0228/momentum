const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

// handleToDoSubmit -> saveToDos : localStorage에 전체 todolist 배열 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //JSON.stringify(Object) = 어떠한 javascript의 형이든 String으로 변환
  //JSON.parse(String) = String을 Javascript가 이해할 수 있는 형태로 변환
}

// todo 삭제버튼 클릭시
function deleteToDo(event) {
  // event.target = element. 이벤트가 발생한 element를 return해줌
  // element.parentElement = 부모 element를 return. 자식 element까지 포함된채로 return됨.

  const li = event.target.parentElement;
  li.remove();

  // filter = foreach와 동작 방식은 동일하나,
  // callback 함수에서 true를 return 해주는 값만 모아 새로운 array를 만들어줌
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

// handleToDoSubmit -> paintToDo : ul태그 안에 li태그 추가
function paintToDo(newToDoObj) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');

  li.id = newToDoObj.id;
  span.innerText = newToDoObj.txt;
  button.innerText = '❌';

  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);

  button.addEventListener('click', deleteToDo);
}

// form에서 submit(엔터 or 클릭) 발생시
function handleToDoSubmit(event) {
  event.preventDefault();

  const newToDo = toDoInput.value;
  toDoInput.value = '';

  const newToDoObj = {
    txt: newToDo,
    id: Date.now(),
  };

  paintToDo(newToDoObj);

  toDos.push(newToDoObj);
  saveToDos(toDos);
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos != null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // 자바스크립트는 현재 처리중인 item을 parameter로 제공해줌 (기본)
  // like event 발생시 첫번째 parameter가 event에 대한 정보인 것 처럼.
  // array의 0번째 value값을 하나씩 argument로 전달해주고 있는 것.
  parsedToDos.forEach(paintToDo);

  //   parsedToDos.array.forEach(function (item) {
  //     paintToDo(item);
  //   });
}
