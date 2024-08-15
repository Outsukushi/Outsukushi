/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== TESTIMONIAL SWIPER ===============*/
let testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: 'true',

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')

/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop){
    cartShop.addEventListener('click', () =>{
        cart.classList.add('show-cart')
    })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose){
    cartClose.addEventListener('click', () =>{
        cart.classList.remove('show-cart')
    })
}

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');

        }

    });

});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));




var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    initialSlide:2,
    speed:600,
    preventClicks: true,
    slidesPerview: "auto",
    coverflowEffect:{
        rotate:0,
        stretch:80,
        depth:350,
        modifer:1,
        slideshadows:true,

    },
    on: {
        click(event){
            swiper.slideTo(this.clickIndex);
        },
    },
    pagination: {
        el: ".swiper-pagination",
    },

});







document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.fullscreen-btn');
    const images = document.querySelectorAll('.swiper-slide img');
    let currentIndex = 0;
  
    buttons.forEach((button, index) => {
      button.addEventListener('click', function() {
        currentIndex = index;
        showFullscreenImage(images[currentIndex]);
      });
    });
  
    function showFullscreenImage(img) {
      const fullscreenDiv = document.createElement('div');
      fullscreenDiv.classList.add('fullscreen');
      const fullscreenImg = document.createElement('img');
      fullscreenImg.src = img.src;
      fullscreenDiv.appendChild(fullscreenImg);
  
      const prevBtn = document.createElement('button');
      prevBtn.classList.add('nav-btn', 'prev-btn');
      prevBtn.textContent = 'Previous';
      fullscreenDiv.appendChild(prevBtn);
  
      const nextBtn = document.createElement('button');
      nextBtn.classList.add('nav-btn', 'next-btn');
      nextBtn.textContent = 'Next';
      fullscreenDiv.appendChild(nextBtn);
  
      const closeBtn = document.createElement('button');
      closeBtn.classList.add('close-btn');
      closeBtn.textContent = 'X';
      fullscreenDiv.appendChild(closeBtn);
  
      document.body.appendChild(fullscreenDiv);
  
      prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        fullscreenImg.src = images[currentIndex].src;
      });
  
      nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        fullscreenImg.src = images[currentIndex].src;
      });
  
      closeBtn.addEventListener('click', function() {
        document.body.removeChild(fullscreenDiv);
      });
  
      fullscreenDiv.addEventListener('click', function(e) {
        if (e.target === fullscreenDiv) {
          document.body.removeChild(fullscreenDiv);
        }
      });
    }
  });






  

  document.getElementById('search').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let products = document.querySelectorAll('.products__card');
    let searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Clear previous results

    if (filter) {
        searchResults.style.display = 'block'; // Show the search results box
    } else {
        searchResults.style.display = 'none'; // Hide the search results box
    }

    products.forEach(function(product) {
        let title = product.querySelector('.products__title').textContent.toLowerCase();
        if (title.includes(filter)) {
            // Add matching product names to the search results
            let resultItem = document.createElement('div');
            resultItem.textContent = product.querySelector('.products__title').textContent;
            resultItem.classList.add('search-result-item');
            resultItem.addEventListener('click', function() {
                // Remove highlight from all products
                products.forEach(p => p.classList.remove('highlight'));
                // Scroll to the product and add highlight
                product.scrollIntoView({ behavior: 'smooth' });
                product.classList.add('highlight');
            });
            searchResults.appendChild(resultItem);
        }
    });

    // Hide the search results box if no products match the filter
    if (!searchResults.querySelector('.search-result-item')) {
        searchResults.style.display = 'none';
    }
});

