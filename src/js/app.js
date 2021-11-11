const menuBtn = document.querySelector('#toggleMenu');
const searchIcon = document.querySelectorAll('.search-icon');
const navItems = document.querySelectorAll('.nav-li');
const searchContainer = document.querySelector('.search-container');
const searchInput = document.querySelector('.search-input');
let toggleM = true;
let toggleS = true;

menuBtn.addEventListener('click', () => { toggleMenu(); })

searchIcon.forEach((icon) => {
    icon.addEventListener('click', () => { toggleSearch(); })
})

searchContainer.addEventListener('click', (e) => {
    !searchContainer.firstElementChild.contains(e.target) ? toggleSearch() : null;
})

window.addEventListener('keydown', (e) => {
    if(e.key == 'Escape' && toggleS) {
        toggleSearch()
    }
})

function toggleMenu() {
    searchContainer.classList.add('hidden'); 
    navItems.forEach((item) => {
        if(toggleM) {
            item.classList.remove('hidden');
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        } else {
            item.classList.add('hidden');
        }
    });
    toggleM = !toggleM;
}

function toggleSearch() {
    if(toggleS) {
        searchContainer.classList.toggle('hidden');
        navItems.forEach((item) => {
            item.classList.add('hidden');
        });
        toggleS = false;
    } else {
        searchContainer.classList.add('hidden');
        searchInput.value = '';
        toggleS = true;
    }
}