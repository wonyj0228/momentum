const playerName = 'nico';
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = 'little bit';

const playerArray = ['nico', 121212, false, 'little bit'];
//  배열이지만 각각의 데이터가 무엇을 의미하는지는 알수 없음
// player[0] == name
// ...
// 주석으로 정리할 순 있지만 더 좋은 방법이 있음

// 설명이 필요하지 않은 데이터 리스트들은 array!
// 설명이 필요한 정보가 담긴 데이터 리스트는 object!

// object(객체) = 중괄호
const player = {
  name: 'nico',
  points: 10,
  fat: true,
};

console.log(player);

// object 의 속성을 가져오는 방식 2가지
console.log(player.name);
console.log(player['name']);

// object내의 내용을 변경할 수도있음
player.fat = false;
console.log(player);

// object내에 key, value 값을 추가하거나 수정할 수도 있음
player.lastName = 'potato';
player.points = player.points + 15;
console.log(player.points);
