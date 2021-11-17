const options= document.querySelectorAll('.option')

options.forEach((option,index) => {
    option.addEventListener("click",()=>{  
        options.forEach((ele)=>{
            ele.classList.remove("selected")
        })
        option.classList.add("selected")
    })
});