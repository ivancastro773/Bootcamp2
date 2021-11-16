const btn = document.querySelector(".btn");
const div = document.querySelector(".show");
const list = document.querySelector(".list");
const note = document.querySelector(".note");
const btnAdd = document.querySelector(".add");
const divEjer4 = document.querySelector(".container");
const btnRed = document.querySelector(".backRed");
const btnGreen = document.querySelector(".backGreen");
const date = document.querySelector(".date");

//Ejer 1
let statuss = 0;
const changeStatus =()=>{
    if(statuss==0){
        div.style.display = "none";
        statuss=1;
    }else{
        div.style.display = "block";
        statuss=0;
    }
}
btn.addEventListener('click',changeStatus);
//ejer 2

const addNote=()=>{
    let li = document.createElement("li");
    li.innerText=note.value;
    list.appendChild(li);
   
 /*    
    list.appendChild(array[0]); */
}
btnAdd.addEventListener('click',addNote);


//Ejer 3
let fecha = new Date(Date.now());
date.innerText='Hola estamos en el año '+fecha.getFullYear();

//ejer4
divEjer4.style.border = "1px solid black";
const changeRed =()=>{
    divEjer4.style.background="red";
    console.log("Boton Rojo se ejecuto");
};
const changeGreen =()=>{
    divEjer4.style.background="green";
    console.log("Boton verde se ejecuto");
}
btnRed.addEventListener('click',changeRed);
btnGreen.addEventListener('click',changeGreen);

//ejer5
let f = document.createElement("form");
document.body.appendChild(f);
f.action = "";
f.method = "POST"
let input = document.createElement("input");
let input2 = document.createElement("input");
input.setAttribute('type', 'text');
input.setAttribute('name', 'name');
input2.setAttribute('type', 'email');
input2.setAttribute('name', 'email');
//agrego al form
f.appendChild(input);
f.appendChild(input2);


