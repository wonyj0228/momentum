const h1 = document.querySelector('div.hello:first-child h1');

// javascript 에서 css 수정하기
function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  currentColor === 'blue' ? (newColor = 'tomato') : (newColor = 'blue');
  h1.style.color = newColor;
}

// css 내용을 javascript로 가져오기
function titleClick() {
  const currentClass = h1.className;
  const clickedClass = 'active';
  let setClass;

  currentClass === clickedClass ? (setClass = '') : (setClass = clickedClass);
  h1.className = setClass;
  // class를 setClass로 대체해버리면, 기존에 설정되어 있던 class가 사라질 수 있음
}

// Class List 사용하기
function titleClick2() {
  //   const currentClass = h1.classList;
  //   const clickedClass = 'active';

  //   if (currentClass.contains(clickedClass)) {
  //     h1.classList.remove(clickedClass);
  //   } else {
  //     h1.classList.add(clickedClass);
  //   }

  // 위의 주석코드와 동일하게 한줄로 정리할 수 있는 함수가 있음.
  h1.classList.toggle('active');
  // toggle : classList에서 해당 classname이 있는지 확인하고 없으면 추가, 있으면 삭제해줌
}

h1.addEventListener('click', titleClick2);
