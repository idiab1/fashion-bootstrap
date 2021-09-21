// Change background color for navbar 
// Select on navbar & header components
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');

window.addEventListener('scroll', ()=>{
    if(this.scrollY >= header.clientHeight){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled')
    }
})

// Add class list active in navbar link when click
// Select on navbar link
const navLinks = document.querySelectorAll('.navbar .navbar-nav .nav-link')

navLinks.forEach(navlink => {
    navlink.addEventListener('click', (e) =>{
        e.preventDefault();
        const active = document.querySelector('.nav-link.active');
        if(active){
            active.classList.remove('active');
        }
        e.currentTarget.classList.add('active')
    })
})


// Show & hide button top when scroll
// Select on button top element
const buttonTop = document.querySelector(".button-top");
window.addEventListener("scroll", () =>{
    // Show Button top when scrolling greater then 1000 and hide otherwise
    if(this.scrollY >= 1000){
        buttonTop.style.display = "block";
    }else{
        buttonTop.style.display = "none";
    }
})

// Adjust scroll to top when click in button top with smoothly
buttonTop.addEventListener("click", () =>{
    window.scroll({
        behavior: "smooth",
        top: 0,
        left: 0,
    })
})

