const boton = document.querySelector('.button')
const input = document.querySelector('.input')
const content= document.querySelector('.content') //clase
boton.style.background ="lightblue";
boton.style.borderRadius ="10px";
const miH1 = document.getElementById('h1');
const myInput = document.getElementById('myinput');
//const btn = document.getElementById('btn').addEventListener("click",changeData());

miH1.innerText='Texto';

const changeData =()=>miH1.innerText=myInput.value;

const changeWithStyle=()=>{
    content.style.color = "black";
    content.style.background = "red";
   return miH1.innerText=myInput.value; 
}