document.addEventListener('DOMContentLoaded', () => {

    // 0. RESPONSIVE NAVIGATION MENU
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', String(!isOpen));
            menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
            navMenu.classList.toggle('open', !isOpen);
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Open navigation menu');
            });
        });
    }

    // 1. INTRO SCREEN LOGIC
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');
    const enterBtn = document.getElementById('enter-btn');

    if (enterBtn && introScreen && mainContent) {
    enterBtn.addEventListener('click', () => {
        introScreen.style.opacity = '0';
        introScreen.style.transition = 'opacity 0.6s ease';
        
        setTimeout(() => {
            introScreen.classList.add('hidden');
            mainContent.classList.remove('hidden');
        }, 600);
    });
    }

    // 2. TEAM CAROUSEL SCROLL LOGIC
    const cardsContainer = document.getElementById('cardsContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const scrollAmount = 300;

    if (cardsContainer && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        cardsContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        cardsContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    }

    // 3. CATEGORY FILTER TAB LOGIC
    const filterBtns = document.querySelectorAll('.filter-btn');
    const playerCards = document.querySelectorAll('.player-card');

    if (filterBtns.length && playerCards.length && cardsContainer) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const selectedCategory = btn.getAttribute('data-category');

            playerCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });

            // Reset scroll position to start after filtering
            cardsContainer.scrollTo({ left: 0, behavior: 'smooth' });
        });
    });
    }

    // 4. ALL RED FORM (front-end validation only; no data is transmitted)
    const allRedForm = document.getElementById('allRedForm');
    const formMessage = document.getElementById('formMessage');
    if (allRedForm && formMessage) {
        allRedForm.addEventListener('submit', event => {
            event.preventDefault();
            if (!allRedForm.checkValidity()) {
                allRedForm.reportValidity();
                return;
            }
            formMessage.textContent = 'Thank you! The form has passed the front-end validation demo.';
            allRedForm.reset();
        });
    }

});
