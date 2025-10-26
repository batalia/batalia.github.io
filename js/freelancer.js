/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    
    let scrollPosition = 0;
    let previousScrollBehavior = '';

    document.addEventListener('show.bs.modal', function () {
        if (window.innerWidth <= 767) {
            scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            // disable smooth scroll and auto restoration to avoid visible bounce
            previousScrollBehavior = document.documentElement.style.scrollBehavior;
            document.documentElement.style.scrollBehavior = 'auto';
            if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
            }
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPosition}px`;
            document.body.style.width = '100%';
        }
    });

    document.addEventListener('hidden.bs.modal', function () {
        if (window.innerWidth <= 767) {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            // restore scroll on next frame to avoid layout thrash
            requestAnimationFrame(function () {
                window.scrollTo(0, scrollPosition);
                // restore smooth behavior and browser restoration after scroll is applied
                document.documentElement.style.scrollBehavior = previousScrollBehavior || '';
                if ('scrollRestoration' in history) {
                    history.scrollRestoration = 'auto';
                }
            });
        }
    });

});
