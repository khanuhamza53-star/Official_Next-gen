<script>
    feather.replace();

    const modal = document.getElementById('bioModal');
    const closeModal = document.getElementById('closeModal');
    const cards = document.querySelectorAll('.member-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Fill data from HTML attributes
            document.getElementById('modalName').innerText = card.getAttribute('data-name');
            document.getElementById('modalRealName').innerText = `Real Name: ${card.getAttribute('data-real')}`;
            document.getElementById('modalBio').innerText = card.getAttribute('data-bio');
            document.getElementById('modalImg').src = card.getAttribute('data-img');
            
            // Fill Mobile Number
            const phone = card.getAttribute('data-mobile');
            document.getElementById('modalMobile').innerText = phone ? `Cell: ${phone}` : 'Contact Unavailable';
            
            // Show modal
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    const closeFunc = () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    };

    closeModal.addEventListener('click', closeFunc);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeFunc(); });
</script>
