const hambur = document.querySelector(".toogle");
const item = document.querySelectorAll(".item");
const fa = document.querySelector("fa-timers");
const pr = document.querySelector("#pr");

const changeIcon = ()=>{
    let i = 0;
    let len = item.length;
    for (; i < len; i++) {
        if (item[i].classList.contains('active')) {
            item[i].classList.remove("active");
        } else {
            item[i].classList.add("active"); 
        }
    }
    pr.classList.toggle("fa-times");
}
