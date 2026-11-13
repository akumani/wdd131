const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');
const navigationLinks = navigation.querySelectorAll('[data-filter]');
const templeFigures = document.querySelectorAll('.temple-grid figure');

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isExpanded));
    menuButton.setAttribute('aria-label', isExpanded ? 'Open navigation menu' : 'Close navigation menu');
    menuButton.querySelector('.menu-icon').textContent = isExpanded ? '☰' : '×';
    navigation.classList.toggle('is-open', !isExpanded);
});

navigationLinks.forEach((link) => {
    link.addEventListener('click', () => {
        const filter = link.dataset.filter;

        templeFigures.forEach((figure) => {
            const matches = filter === 'all'
                || figure.dataset.age === filter
                || figure.dataset.size === filter;
            figure.hidden = !matches;
        });

        navigationLinks.forEach((navigationLink) => {
            navigationLink.removeAttribute('aria-current');
        });
        link.setAttribute('aria-current', 'page');

        navigation.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation menu');
        menuButton.querySelector('.menu-icon').textContent = '☰';
    });
});
