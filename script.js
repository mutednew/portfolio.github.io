/* Intro 
================================*/
const intro = document.querySelector('.intro'),
      introHeight = intro.offsetHeight,
      scrollBtn = document.querySelector('.project-btn');

scrollBtn.addEventListener('click', () => {
    window.scrollTo( {
        top: introHeight,
        behavior: 'smooth'
    });
});



/**
 * LINK
 */
const goProject = document.querySelectorAll('.device-frame');

goProject[0].addEventListener('click', () => {
    window.open('lr-7/index.html', '_blank');
});

goProject[1].addEventListener('click', () => {
    window.open('lr-8/index.html', '_blank');
});

goProject[2].addEventListener('click', () => {
    window.open('lr-9/index.html', '_blank');
});

goProject[3].addEventListener('click', () => {
    window.open('lr-10/index.html', '_blank');
});