const birth = 1998;

// 작업의 결과를 전달받기 위해 사용하는 것 = return
function calculateAge(birth) {
  return 2023 - birth;
}

const age = calculateAge(birth);

console.log(age);
