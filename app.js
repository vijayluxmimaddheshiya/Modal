const modalbtn = document.querySelector('.Modal_Btn')
const closebtn = document.querySelector('.close-btn')
const modelOverlay  = document.querySelector('.modal-overlay')

modalbtn.addEventListener('click' , function(){
    console.log("modal buttion is clicked")
    modelOverlay.classList.add('Opening-Model')
})
closebtn.addEventListener('click' , function(){
    console.log("close button is clicked")
   modelOverlay.classList.remove('Opening-Model')
})









