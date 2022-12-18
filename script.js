const slides = document.querySelectorAll(".slide")
let count = 0;
let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
    sideBar.classList.toggle('active');
}

document.querySelector('#close-side-bar').onclick = () =>{
    sideBar.classList.remove('active');
}
document.querySelector('#search-btn').onclick = () =>{
    search-form.classList.toggle('active');
}

// image slider logic
slides.forEach((slide,index)=>{
    slide.style.left = `${index*100}%`
})

const goPrev = ()=>{
    if(count===0){
        count = slides.length
    }
    count--;
    slideImage();
}
const goNext = ()=>{
    count++;
    if(count===slides.length){
        count = 0;
    }
    slideImage();
}
const slideImage = ()=>{
    slides.forEach(slide=>{
        slide.style.transform = `translateX(-${count*100}%)`
    })
}

// accordian logic 
document.querySelectorAll('.accordion-container .accordion').forEach(accordion =>{
    accordion.onclick = () =>{
        accordion.classList.toggle('active');
    }
});