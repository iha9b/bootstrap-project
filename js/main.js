

var scrollbtn = document.querySelector(".scroll");

window.onscroll = function(){
    if (window.scrollY > 150){
        scrollbtn.classList.add("show")
    }
    else{
        scrollbtn.classList.remove("show")
    }
}

scrollbtn.onclick = function(){
    window.scrollTo({
        top : '0' , 
        behavior : 'smooth'
    })
}