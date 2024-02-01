//1] get메서드
// console.log("hello Javascript");
let title=document.getElementById('title');
console.log(title);
title.textContent='헬스 3대 운동';

let items=document.getElementsByClassName('item');
console.log(items);
console.log('스쿼트: ',items[0]);
console.log('밴치프레스: ',items[1]);
console.log('데드리프트: ',items[2]);

let liList=document.getElementsByTagName('li');
console.log(liList);

//2] HTML 요소 쿼리 (dom 요소)
let h2=document.querySelector('#title');
console.log('h2:', h2);

let item=document.querySelectorAll('.item');
console.log('itemAll: ', item);
console.log('itemAll[0]: ', item[0]);1
console.log('itemAll[1]: ', item[1]);
console.log('itemAll[2]: ', item[2]);

// h2.textContent='<span>운동!!!</span>';
// console.log(h2.textContent);
// h2.innerHTML='<span>운동@@@</span>';

// document.querySelector('body').innerHTML='<strong>운동</strong>';

let input=document.querySelector('input');
input.setAttribute('placeholder','헬스 운동을 입력해주세요');
input.setAttribute('required','');
input.removeAttribute('placeholder');
input.removeAttribute('required'); 



let helloItem = document.querySelector('.hello');
console.log('helloItem: ',helloItem);
// helloItem.style.color = 'white';
// helloItem.style.backgroundColor='black';

helloItem.classList.add('dark','one');
helloItem.classList.remove('dark');


