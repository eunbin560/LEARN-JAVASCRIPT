'use strict'

//함수 선언식
function sayHello () {
  console.log('이름과 나이를 출력해주세요');
  console.log('이름: 홍길동, 나이: 25살');
}
sayHello();

//함수 표현식
const sayHello1= function() {
  console.log('이름과 나이를 출력해주세요');
  console.log('이름: 홍길동, 나이: 25살');
}
sayHello1();