'use strict'

/*
//문자열 병합
console.log('Hello'+'World!');
console.log('3'+3); //number -> string
console.log(typeof ('3'+3)); //number -> string
console.log('3'+5+8);
console.log(3+5+'8'); //"88"

let x=10;
let y=20;

console.log(x+y);
console.log(x-y);
console.log(x/y);
console.log(x*y);
console.log(9%2); //나머지


let number=prompt('숫자를 입력 해주세요!')
if(number % 2 === 1) {
  alert('홀수 입니다!');
}else {
  alert('짝수 입니다!');
}


let result = x + y--;
console.log('x: ', x);
console.log('y: ', y);
console.log('result: ', result);


let a=30;
let b='30';
console.log(a!==b); // ==> true
console.log(a!=b); // ==> false


===,!==

0 == false
true
0===false
false


let x=10;
let y=20;
// x=x+y;
x+=y;
console.log(x);

// 1부터 10까지 더하는 코딩
let sum=0;
for(let i=1;i<=10; i++){
  sum+=i; //sum=sum+1;
  console.log(`${i}번째 sum=${sum}`);
}
*/
let x=false;
let y=true;
console.log(x&&y); //모두 true일떄 true, 그 외 false
console.log(x||y); //둘중 하나라도 true이면 true, 나머지 false
console.log(!x); 

let btn=document.querySelector('#btn');
let emailEl=document.querySelector('[name=email]');
let passwordEl=document.querySelector('[name=password]');

btn.addEventListener('click',function() {
  let email=emailEl.value;
  let password=passwordEl.value;
  console.log('email: ',email === '');
  console.log('!password: ',!password);
  // '' 빈값은 거짓같은 값이므로 false !''이면 반대로 true
  if(email === ''|| email.includes('@') ===false) {
    console.log('이메일이 유효하지 않습니다.')
  } else if(!password){
    console.log('비밀번호를 입력해주세요.')
  } else if((password.length >=8 && password.length <=16) === false ) {
    console.log('비밀번호는 8~16자 이내 입니다.')
  } else{
    console.log('로그인 성공!');
  }

  // (password.length >=8 && password.length <=16) ===>true여야 로그인성공

});


// 삼항 연산자
let number =10;
let message=(number %2 ===1) ?'홀수입니다':'짝수입니다';

// if(number %2 ===1){
//   message='홀수입니다';
// } else {
//   message='짝수입니다'; 
// }
console.log(message);
