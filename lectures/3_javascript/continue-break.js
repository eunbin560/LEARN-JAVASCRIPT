'use strict'

let text='';
console.log(1+2);
console.log('javascript'+'Hello');
console.log('javascript'+2); //2가 '2'로 바뀌어 문자열로 출력

for (let i=0; i<10; i++) {
  if(i==3) {
    // continue;
    break;
  }
  text=text + i;
  // console.log(`text[${i}]: `,text)
}
console.log(text);