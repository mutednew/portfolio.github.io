/* Intro 
================================*/
const activeScroll = document.querySelectorAll('.active-scroll'),
    introH = activeScroll[0].offsetHeight,
    btn = document.querySelector('.project-btn');
let autoScrolling = false;

function handleScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll < introH && !autoScrolling) {
        autoScrolling = true;

        window.scrollTo({
            top: introH,
            behavior: 'smooth'
        });

        setTimeout(() => {
            autoScrolling = false;
        }, 1000);
    }
}

function enableFreeScroll() {
    document.body.style.overflow = 'auto';
}

window.addEventListener('scroll', handleScroll);

window.addEventListener('scroll', () => {
    if(window.scrollY >= introH) {
        enableFreeScroll();
    }
});

function sectionEffect() {
    activeScroll.forEach((el) => {
        const rect = el.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    });
}

window.addEventListener('scroll', sectionEffect);

document.addEventListener('DOMContentLoaded', () => {
    activeScroll.forEach((el, i) => {
        if (i > 0) {
            el.classList.add('hidden');
        }
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