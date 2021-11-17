const btnLike = document.querySelector("#like");
const btnPlay = document.querySelector(".play");

const changeIconPause = ()=>{
    btnPlay.classList.toggle('fa-play-circle');
}
const changeColorLike = ()=>{
    btnLike.classList.toggle('like')
}

btnLike.addEventListener('click',changeColorLike);
btnPlay.addEventListener('click',changeIconPause);