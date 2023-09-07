const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

function deleteToDo(event) {
  // event.target = element. 이벤트가 발생한 element를 return해줌
  // element.parentElement = 부모 element를 return. 자식 element까지 포함된채로 return됨.

  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');

  span.innerText = newTodo;
  button.innerText = '❌';

  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);

  button.addEventListener('click', deleteToDo);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  paintToDo(newToDo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);
