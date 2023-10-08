const open = document.getElementById("open")
const close = document.getElementById("close")
const mobile = document.getElementById("mobile")

open.addEventListener("click", () =>{
    mobile.style.right="0%"
})
close.addEventListener("click", () =>{
    mobile.style.right="-100%"
})