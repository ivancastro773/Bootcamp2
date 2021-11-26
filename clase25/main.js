const emoji = document.getElementById("img1");

const changeEmoji = ()=>{
    if(emoji.getAttribute("src")=="img/img1.JPG"){
        emoji.src="img/img2.JPG";
    }else{
        emoji.src="img/img1.JPG";
    }
}
