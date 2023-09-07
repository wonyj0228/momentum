const quotes = [
  {
    quote: 'Every moment is a fresh beginning.',
    author: 'T.S Eliot',
  },
  {
    quote: 'Everything you can imagine is real.',
    author: 'Pablo Picasso',
  },
  {
    quote: 'Simplicity is the ultimate sophistication.',
    author: 'Leonardo da vinci',
  },
  {
    quote: 'What we think, we become.',
    author: 'Buddha',
  },
  {
    quote: 'Problems are not stop signs, they are guidelines.',
    author: 'Robert H. Schuller',
  },
  {
    quote: "I don't need it to be easy, I need it to be worth it.",
    author: 'Lil Wayne',
  },
  {
    quote: 'Never let you emotions overpower your intelligence',
    author: 'Drake',
  },
  {
    quote: 'Nothing lasts forever but at least we got these memories.',
    author: 'J. Cloe',
  },
  {
    quote: "Try to be a rainbow in someone's cloud.",
    author: 'Maya Angelou',
  },
  {
    quote: 'And still, I rise.',
    author: 'Maya Angelou',
  },
  {
    quote: 'The time is always right to do what is right.',
    author: 'Martin luther King Jr.',
  },
];

// Math.random() = 0이상 1미만의 난수를 반환
// Math.round() = 반올림
// Math.ceil() = 올림
// Math.floor() = 내림
// Math.random()
// 최대값 : Math.random() * 최대값
// 최소값 : Math.random() + 최소값
// 최대,최소값 : Math.random() * (최대값-최소값) + 최소값
const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
