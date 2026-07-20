let barsIcon = document.getElementById('barsIcon')
let sideBar = document.getElementById('sideBar')
let XIcon = document.getElementById('XIcon')

barsIcon.onclick = function(){
    sideBar.style.left = "0"
}

XIcon.onclick = function(){
    sideBar.style.left = "-280px"
}

let ScrollTop = document.getElementById('ScrollTop')

window.onscroll = function(){
    if(window.scrollY > 400){
        ScrollTop.style.display = "flex";
    }
    else{
        ScrollTop.style.display = "none";
    }
}