const toggler1 = document.querySelector('.toggler1')
const toggler2 = document.querySelector('.toggler2')
console.log(toggler2.classList)

toggler1.addEventListener('click', (e)=>{
    e.target.classList.toggle("toggleOff") 
    toggler2.classList.remove("toggleOff")
})

toggler2.addEventListener('click', (e)=>{
    e.target.classList.toggle("toggleOff") 
    toggler1.classList.remove("toggleOff")
})