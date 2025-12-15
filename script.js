<script>
    /**
     * NEXT GEN MEDIA - Professional Collective Script
     * Integrated: Feather Icons, Member Modal with Mobile Number & Smooth Scroll
     */

    // 1. Initialize Feather Icons
    feather.replace();

    // 2. Select DOM Elements
    const modal = document.getElementById('bioModal');
    const closeModal = document.getElementById('closeModal');
    const cards = document.querySelectorAll('.member-card');
    
    // Modal Content Elements
    const modalImg = document.getElementById('modalImg');
    const modalName = document.getElementById('modalName');
    const modalRealName = document.getElementById('modalRealName');
    const modalMobile = document.getElementById('modalMobile'); // Target for the number
    const modalBio = document.getElementById('modalBio');

    /**
     * 3. Modal Logic with Mobile Support
     */
    const openMemberModal = (card) => {
        // Extract data from the clicked card attributes
        const name = card.getAttribute('data-name');
        const realName = card.getAttribute('data-real');
        const bio = card.getAttribute('data-bio');
        const img = card.getAttribute('data-img');
        const mobile = card.getAttribute('data-mobile'); // Grab the mobile number

        // Populate Modal Fields
        modalName.innerText = name;
        modalRealName.innerText = `Real Name: ${realName}`;
        modalBio.innerText = bio;
        modalImg.src = img;
        modalImg.alt = name;
        
        // Populate Mobile Number (The Number Modal Script)
        if (modalMobile) {
            modalMobile.innerText = mobile ? `CONTACT: ${mobile}` : 'CONTACT: NOT PROVIDED';
        }

        // Show Modal
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        // Disable Background Scrolling
        document.body.style.overflow = 'hidden';
    };

    // Close Modal Function
    const closeFunc = () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    };

    /**
     * 4. Event Listeners
     */

    // Click on Member Card to trigger Modal
    cards.forEach(card => {
        card.addEventListener('click', () => openMemberModal(card));
    });

    // Close Button Click
    if (closeModal) {
        closeModal.addEventListener('click', closeFunc);
    }

    // Click Outside Modal Content to Close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeFunc();
    });

    // ESC Key to Close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeFunc();
        }
    });

    /**
     * 5. Smooth Scroll Offset
     * Fixes the sticky header overlap when clicking nav links
     */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
</script>
