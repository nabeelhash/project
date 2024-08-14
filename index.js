

let quotes= ['This is great','hello this is nabeel','yes my boy']


//1st
// btn1.addEventListener('click',function(){
//     console.log('enter');
//     let name = prompt('Please enter your name');
//     if(name.trim().length === 0){
//         console.log('no name enter')
//         return false;
//     }
//     text.innerHTML = name
// })

//2nd
// let openBtn = document.getElementById('bt');
// let doc = document.getElementsByClassName('close')[0];

// openBtn.addEventListener('click',function(){
//     doc.classList.remove('close')
//     doc.classList.add('open')
// })

// doc.addEventListener('click',function(){
//     doc.classList.remove('open')
//     doc.classList.add('close')
// })

//3rd
// let para = document.getElementById('para');
// let btn = document.getElementById('btn');
// let body = document.body;

// let code = ['0','1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F']
// btn.addEventListener('click',gen)

// function gen(){
//     let index=0
//     for(let i=0;i<5;i++){
//         let rand = Math.floor(Math.random()*code.length)
//         index += code[rand];
//     }
//     para.innerHTML = '#'+ index
//     body.style.backgroundColor = '#'+index
// }

// let colors = ['red','green','yellow','blue','pink']
// let index =0;
// btn.addEventListener('click',function(){
//     document.body.style.backgroundColor = colors[index]
//     index++
//     if(index>colors.length-1){
//         index=0
//     }
// })

//5th
// let count = document.getElementById('count');

let prev = document.getElementsByClassName('prev')[0];
let next = document.getElementsByClassName('next')[0];

// let index = 0
// function toggle(i){
//     index+=i
//     count.innerHTML = index
// }

// 6th
let img = document.getElementsByClassName('images');

let indexs= 0;
function toggle(j){
    for(let i=0;i<img.length;i++){
        img[i].style.display = 'none'
    }
    indexs+=j
    if(indexs >= img.length){
        indexs = 0
    }
    if(indexs < 0){
        indexs = img.length-1
    }
    img[indexs].style.display = 'block';
}

// let count = document.getElementById('count');

// let index=0
// function counter(){
//     count.innerHTML = index++
// }

// setInterval(counter,1000)

// let input = document.getElementById('input')
// let submit = document.getElementsByClassName('submit')[0];
// let text = document.getElementById('text');

// let arr=[];
// submit.addEventListener('click',function(){
//     let inputValue = input.value
//     if(inputValue.length <4)
//     {
//         alert('return')
//         return false
//     }
//     arr=[...arr,inputValue]
//     text.innerHTML = arr
// })

// let key =prompt('enter key')
// let value =prompt('enter value')

// localStorage.setItem(key,value)

// let res=localStorage.getItem(key)
// console.log(`The value is ${value}`)

//     localStorage.removeItem('age')
// console.log(localStorage.getItem('name'))

let text = document.getElementById('friend');
let button = document.getElementById('req');

let index = 0
button.addEventListener('click',add)
function add(){
    if(index === 0){
        text.innerHTML = 'Friends'
        button.innerHTML = 'Remove Friend'
        index = 1;
        setTimeout(function(){
            text.style.fontSize = '40px'
            text.style.color = 'yellow'
        },20)
        setTimeout(function(){
            text.style.fontSize = '30px'
            text.style.color = 'white'

        },500)
    }
 
    else{
        text.innerHTML = 'Unknown'
        button.innerHTML = 'Add Friend'
        index = 0;
    }
}