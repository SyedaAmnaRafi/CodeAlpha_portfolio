import './style.css'

console.log('hey this is my porfolio website');


console.log('lets make our portfolio website on vite');

// for resume section, when user click on particular button, particular detail will open.

const resumeBtns = document.querySelectorAll('.resume-button');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail')
        resumeBtns.forEach((btn) => {
            btn.classList.remove('active');
        })
        btn.classList.add('active')

        resumeDetails.forEach((detail) => {
            detail.classList.remove('active');
        })
        resumeDetails[idx].classList.add('active');
    })
})

// for image slider
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');


let index = 0;

const activePortfolio = () =>{
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetail = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetail.forEach(detail => {
        detail.classList.remove('active')
    })
    portfolioDetail[index].classList.add('active')
}

arrowRight.addEventListener('click', () => {
    if(index < 4) {
        index++
        arrowLeft.classList.remove('disabled')
    } else {
        index = 5
        arrowRight.classList.add('disabled')
    }
    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if(index > 1) {
        index--
        arrowRight.classList.remove('disabled')
    } else {
        index = 0;
        arrowLeft.classList.add('disabled')
    }
    activePortfolio();
});


const menuIcon = document.querySelector('#menu-icon')
const navbar = document.querySelector('header nav')

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
})

