const smallimg = document.querySelectorAll(".gallery img")
const modal = document.querySelector(".modal")
const fullimg = document.querySelector(".full-image")

smallimg.forEach(img => {

img.addEventListener("click",()=>{

const fullsize = img.getAttribute("alt")
const path = `full/${fullsize}.jpg`

fullimg.src = path
modal.classList.add("open")

})

})

modal.addEventListener("click",(e)=>{

if(e.target.classList.contains("modal")){
modal.classList.remove("open")
}

})