'user strict'

/*
// 1] 배열 생성
const fruits=['사과','바나나','딸기','파인애플'];
console.log(fruits);


// const fruits=new Array('사과','바나나','딸기');
console.log('fruits: ',fruits);

console.log(fruits[0]);
console.log(fruits[1]);
fruits[2]='포도';
console.log(fruits[2]);

//2] 자주 사용하는 배열 API
// length
console.log('fruits.length: ',fruits.length);
console.log('마지막 값: ',fruits[fruits.length]);
console.log('마지막 값: ',fruits[fruits.length-1]);

// push()
fruits.push('귤');
console.log(fruits);

// forEach
fruits.forEach(function(item, index) {
  console.log(index, item);
});

// pop() --뒤에부터 제거
// fruits.pop();
let removedItem=fruits.pop();
console.log('removedItem: ', removedItem);
console.log('제거 완료: ', fruits);

// shift() --앞에부터 제거
fruits.shift();
fruits.shift();
console.log(fruits);

// unshift() --앞에 값 추가
fruits.unshift('수박');
console.log(fruits);

// indexOf()
// const index=fruits.indexOf('파인애플');
// console.log('index: ', index);
const index=fruits.indexOf('토마토');
console.log('index: ', index);
//찾고자 하는 인덱스가 없을때는 -1을 반환한다.


// splice() --특정인덱스에 있는 값 제거(어디서부터, 몇개 제거)
// fruits.splice(1,1);
// console.log(fruits);
const findIndex=fruits.indexOf('파인애플');
console.log('findIndex: ',findIndex);
fruits.splice(2,1);
console.log(fruits); 
*/


/*
// 3] 구조분해 할당
let fruits=['사과','바나나','딸기'];
// let apple=fruits[0];
// let banana=fruits[1];
// let starwberry=fruits[2];

let [apple,banana, starwberry, ...others]=['사과','바나나','딸기','a','b','c','d','e'];
console.log(apple);
console.log(banana);
console.log(starwberry);
console.log(others);
*/


/*
// 4] 전개 구문
let fruits1=['사과','바나나','딸기'];
let fruits2=['파인애플','수박'];
let items=[...fruits1, ...fruits2];
console.log(items);


// 5] Rest Parameters
print('a','b','c','d','e','f');

function print(...values) {
  values.forEach(function(value, index){
    console.log('index: ',index, 'value: ', value);
  });
}


// 얕은 복사(Shallow copy)
let source=['사과','바나나','딸기'];
let target=source;
target[0]='파인애플';
//참조값 때문에 target만 바뀌는 것이 아니라 source값도 바뀌게 된다.
console.log(source);
console.log(target);


// 깊은 복사(Deep copy)
let source=['사과','바나나','딸기'];
let target=[...source];
target[0]='파인애플';
console.log('source: ', source);
console.log('target: ', target);




// --Array를 통한 깊은 복사
let source=['사과','바나나','딸기'];
let target=Array.from(source);
target[0]='파인애플';
console.log('source: ', source);
console.log('target: ', target);

*/

// --slice 를 통한 깊은 복사
let source=['사과','바나나','딸기'];
let target=source.slice();
target[0]='파인애플';
console.log('source: ', source);
console.log('target: ', target);
