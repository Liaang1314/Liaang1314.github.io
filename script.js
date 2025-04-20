document.addEventListener('DOMContentLoaded', () => {
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            if (navMenu.classList.contains('active')) {
                menuToggle.innerHTML = '&times;';
            } else {
                menuToggle.innerHTML = '&#9776;';
            }
        });
    }

    // Giftcode menu functionality
    const giftcodeMenu = document.getElementById('giftcode-menu');
    const giftcodePanel = document.getElementById('giftcode-panel');
    const closeGiftcodeBtn = document.getElementById('close-giftcode');
    const serverSelect = document.getElementById('server-select');
    const serverCodeDiv = document.getElementById('server-code');

    const serverCodes = {
        server1: 'GIFT-CODE-SERVER-1',
        server2: 'GIFT-CODE-SERVER-2',
        server3: 'GIFT-CODE-SERVER-3'
    };

    if (giftcodeMenu && giftcodePanel && closeGiftcodeBtn && serverSelect && serverCodeDiv) {
        const giftcodeOverlay = document.getElementById('giftcode-overlay');

        giftcodeMenu.addEventListener('click', (e) => {
            e.preventDefault();
            giftcodePanel.classList.remove('hidden');
            giftcodeOverlay.classList.add('active');
        });

        closeGiftcodeBtn.addEventListener('click', () => {
            giftcodePanel.classList.add('hidden');
            giftcodeOverlay.classList.remove('active');
            serverSelect.value = '';
            serverCodeDiv.textContent = '';
        });

        giftcodeOverlay.addEventListener('click', () => {
            giftcodePanel.classList.add('hidden');
            giftcodeOverlay.classList.remove('active');
            serverSelect.value = '';
            serverCodeDiv.textContent = '';
        });

        serverSelect.addEventListener('change', () => {
            const selectedServer = serverSelect.value;
            if (serverCodes[selectedServer]) {
                serverCodeDiv.textContent = serverCodes[selectedServer];
            } else {
                serverCodeDiv.textContent = '';
            }
        });
    }
});
