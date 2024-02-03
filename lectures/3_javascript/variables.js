'use strict'

// number=2;
// console.log(number);

let teacher='짐코딩';
console.log(teacher);
teacher="홍길동";
console.log(teacher);

// let teacher='홍길동';

const username='짐코딩';
console.log(username);
// username='change';

{
  let a='변수';
  console.log('a: ',a);
  {
    let c='c 변수';
    let a='변수2';
    console.log('c: ',c);
    console.log('c블록 a: ',a);
    console.log('a: ',a);
  }
}
// console.log('a: ',a);

function sum(a,b){
  let result=a+b;
  return result;
}
// console.log('result: ',result);

{
  var number=2;
  var number=3;
}
console.log(number);

// 호이스팅
console.log(sum(1,2));
function sum(num1,num2) {
  return num1+num2;
}

console.log(number);
let number2=2;

