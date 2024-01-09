/*Show Menu*/ 

const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*Validate if constant exists*/ 
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/** Validate if  constant exists*/
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*Remove menu mobile*/ 
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach((n) => n.addEventListener('click', linkAction))



/*Change Background Header*/ 
function scrollHeader() {
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viweport height, add the scroll-header class t header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*Show scroll up */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is greater than 350 viweport height, add the show-scroll class to scroll-top class
    if(this.scrollY >= 80) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)










/*About tabs*/

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active');
        });
        target.classList.add('tab__active');

        tabs.forEach((tab)=>{
            tab.classList.remove('tab__active');
        });

        tab.classList.add('tab__active');
    });
});

/*Contact Form*/ 

const contactForm =document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactSubject = document.getElementById('contact-subject'),
contactMessage = document.getElementById('contact-message'),
errorMessage = document.getElementById('error-message')


const sendEmail = (e) => {
    e.preventDefault();

    //Che THE FIELD HAS A VALUE
    if(contactName.value === '' || contactEmail.value === '' || contactSubject.value === '' || contactMessage.value === ''){

    }else{
        //serviceID - templateID - #form - publickey
        emailjs.sendForm
        ('service_6bkpx19',
        'template_nol2huw',
        '#contact-form',
        '06w8cA_6cJ_4fxEK4'
        ).then(() => {
            // show message and add color, window + dot to open emoji
            

            //remove message after 5 seconds
            setTimeout(() => {
                errorMessage.textContent = ''
            },5000)
        }, (error) => {
            alert('Oops! Algo salió mal...', error)
        }
        )

        //clear input fields
        contactName.value = ''
        contactEmail.value = ''
        contactSubject.value= ''
        contactMessage.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail);





