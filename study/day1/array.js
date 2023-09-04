// const mon = 'mon';
// const tue = 'tue';
// const wed = 'wed';
// const thu = 'thu';
// const fri = 'fri';
// const sat = 'sat';
// const sun = 'sun';

const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
console.log(daysOfWeek);

//무언가를 나열하고 묶기위해 사용하는 것 = Array
const nonsense = [1, 2, 'hello', false, null, true, undefined, 'nico'];

//한 주의 5번째가 뭔지 알고 싶다면??
console.log(daysOfWeek[4]);
// array는 카운트를 0부터 셈. 컴퓨터가 그러하기 때문.

// array에 데이터를 하나 더 넣어준다면? push.
daysOfWeek.push('sun');
console.log(daysOfWeek);
