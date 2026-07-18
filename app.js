let barsIcon = document.getElementById('barsIcon')
let sideBar = document.getElementById('sideBar')
let XIcon = document.getElementById('XIcon')

barsIcon.onclick = function(){
    sideBar.style.left = "0"
}
XIcon.onclick = function(){
    sideBar.style.left = "-280px"
}