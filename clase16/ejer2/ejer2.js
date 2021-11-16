const btn = document.querySelector('.button')
const btn2 = document.querySelector('.button2')
const content= document.querySelector('.content') //clase
btn.style.background ="lightblue";
btn.style.borderRadius ="10px";

const miH1 = document.getElementById('h1');
const myInput = document.getElementById('myinput');
//Texto por default
miH1.innerText='Texto';
//Funciones
const changeData =()=>miH1.innerText=myInput.value;
const changeWithStyle=()=>{
    content.style.color = "black";
    content.style.background = "red";
   return miH1.innerText=myInput.value; 
}
btn.addEventListener('click',changeData);
btn2.addEventListener('click',changeWithStyle);