
var sideNavMenu=document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
var close=document.getElementById("side-navbar-close")

sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.right="0px"
})
close.addEventListener("click",function(){
    sidenavbar.style.right="-60%"
})



var donatebtn=document.getElementById("donatebtn")
var qrcode=document.getElementById("qrcode")
var close=document.getElementById("close")
var close2=document.getElementById("close2")
donatebtn.addEventListener("click",function(){
    qrcode.style.display="block"
    qrcode.style.transition="2s"
})

close2.addEventListener("click",function(){
    qrcode.style.display="none"
})


close.addEventListener("click",function(){
    qrcode.style.display="none"
    qrcode.style.transition="2s"
})

