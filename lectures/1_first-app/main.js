console.log("hello");
console.log("hello");
console.log("hello","world",'javascript');
console.log('안녕');

// alert("Hello Javascript"); 

let str ='Hello javascript';
let number=30
console.log('문자열: ', str);
console.log('숫자: ', number);

function sayHello() {
  console.log('Hello1');
  console.log('Hello2');
  console.log('Hello3');
}
sayHello();
console.log('-------');
sayHello();

let obj={
  number:30,//vmfhvjx
  sayHello: function() {
    console.log('objHello1');
    console.log('objHello2');
    console.log('objHello3');
  }
}

console.log(obj);
console.log(obj.number);
obj.sayHello();
