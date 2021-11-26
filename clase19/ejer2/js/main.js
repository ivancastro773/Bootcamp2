const ul = document.querySelector("#item");
const tg = document.querySelector("#tg");

const changeIcon = () => {
    if(ul.classList.contains('active')){
        ul.style.display = "none"
        ul.classList.remove("active");
    }else{
        ul.classList.add("active");
        ul.style.display = "block"
    }
    tg.classList.toggle("fa-times");
}
