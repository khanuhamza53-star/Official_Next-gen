document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        // 1. Ensure the navigation is hidden by default on mobile via CSS/initial state.
        // We add the 'collapsed' class which your CSS uses to hide the menu when small.
        mainNav.classList.add('collapsed');

        // 2. Add the click event listener to the menu button
        menuToggle.addEventListener('click', function() {
            // This line toggles the 'collapsed' class on the navigation list.
            // If it's collapsed (hidden), it becomes un-collapsed (visible), and vice-versa.
            mainNav.classList.toggle('collapsed');
            
            // 3. Optional: Accessibility update (tells screen readers if the menu is open)
            const isExpanded = !mainNav.classList.contains('collapsed');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });

        // 4. Optional: Close menu when a link inside it is clicked (common mobile behavior)
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (!mainNav.classList.contains('collapsed')) {
                    mainNav.classList.add('collapsed');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
});