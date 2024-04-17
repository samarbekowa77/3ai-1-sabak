const start= document.querySelector('#start')
const btns=document.querySelectorAll('button')


let count=0


btns[0].onclick=()=>{
    count++
    start.innerHTML=count
    start.style.color='green'
};
 btns[1].onclick=()=>{
    count--
    start.innerHTML=count
    start.style.color='red'
    
    if(count<=1){

    };
 };
  btns[2].onclick=()=>{
     count=0
    start.innerHTML=count
    start.style.color='blue'
  }