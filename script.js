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

    // Giftcode Modal
    const giftcodeMenu = document.getElementById('giftcode-menu');
    const giftcodeOverlay = document.getElementById('giftcode-overlay');
    const giftcodePanel = document.getElementById('giftcode-panel');
    const closeGiftcodeBtn = document.getElementById('close-giftcode');
    const serverSelect = document.getElementById('server-select');
    const serverCodeDiv = document.getElementById('server-code');

    const serverCodes = {
        server1: 'Code123',
        server2: 'Code456',
        server3: 'Code789',
    };

    giftcodeMenu.addEventListener('click', (e) => {
        e.preventDefault();
        giftcodeOverlay.classList.remove('hidden');
        giftcodePanel.classList.remove('hidden');
    });

    closeGiftcodeBtn.addEventListener('click', () => {
        giftcodeOverlay.classList.add('hidden');
        giftcodePanel.classList.add('hidden');
        serverSelect.value = '';
        serverCodeDiv.textContent = '';
    });

    giftcodeOverlay.addEventListener('click', () => {
        giftcodeOverlay.classList.add('hidden');
        giftcodePanel.classList.add('hidden');
        serverSelect.value = '';
        serverCodeDiv.textContent = '';
    });

    serverSelect.addEventListener('change', () => {
        const selectedServer = serverSelect.value;
        serverCodeDiv.textContent = serverCodes[selectedServer] || '';
    });

    // Build Team Modal
    const teamBuilderMenu = document.querySelector('a[href="#team-builder"]');
    const buildOverlay = document.getElementById('build-overlay');
    const buildPanel = document.getElementById('build-panel');
    const closeBuildTeamBtn = document.getElementById('close-build-team');
    const pokemonSelect = document.getElementById('pokemon-select');
    const pokemonCodeDiv = document.getElementById('pokemon-code');

    const pokemonImages = {
        Rayquaza: 'images/rayquaza.jpg',
        Kyogre: 'images/kyogre.jpg',
        Groudon: 'images/groudon.jpg',
    };

    teamBuilderMenu.addEventListener('click', (e) => {
        e.preventDefault();
        buildOverlay.classList.remove('hidden');
        buildPanel.classList.remove('hidden');
    });

    closeBuildTeamBtn.addEventListener('click', () => {
        buildOverlay.classList.add('hidden');
        buildPanel.classList.add('hidden');
        pokemonSelect.value = '';
        pokemonCodeDiv.textContent = '';
    });

    buildOverlay.addEventListener('click', () => {
        buildOverlay.classList.add('hidden');
        buildPanel.classList.add('hidden');
        pokemonSelect.value = '';
        pokemonCodeDiv.textContent = '';
    });

    pokemonSelect.addEventListener('change', () => {
        const selectedPokemon = pokemonSelect.value;
        const pokemonImage = document.createElement('img'); // Tạo thẻ <img> mới
        const pokemonCodeDiv = document.getElementById('pokemon-code');
        pokemonCodeDiv.innerHTML = ''; // Clear
        if (pokemonImages[selectedPokemon]) {
            pokemonImage.src = pokemonImages[selectedPokemon];
            pokemonImage.alt = selectedPokemon;
            pokemonCodeDiv.appendChild(pokemonImage);
        }
    });
});
