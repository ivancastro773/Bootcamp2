const classP = document.querySelectorAll('.p');
const a = document.querySelector(".anchor");
const plink = document.querySelector(".link");
const image = document.createElement('img');
let countP = 0;
//imagen - ejer4
image.src  = './foto.png';
document.querySelector('.container').appendChild(image)

//Contador y background
classP.forEach(function(pItem) {
    pItem.style.background="red";
    pItem = document.getElementById("pa").innerHTML;
    countP = countP+pItem.split(" ").length;
  });

let count = document.getElementById("count");
count.innerText=countP;

a.addEventListener('click',(e)=>{
    e.preventDefault();
    plink.innerText=a.href;
});
 
