document.querySelectorAll('.gallery-container').forEach(container => {
    const gallery = container.querySelector('.arrow-gallery');
    const leftButton = container.querySelector('.arrow.left');
    const rightButton = container.querySelector('.arrow.right');

    let scrollAmount = 0;
    const scrollStep = 800; // adjust this as needed

    rightButton.addEventListener('click', () => {
        scrollAmount += scrollStep;
        gallery.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    leftButton.addEventListener('click', () => {
        scrollAmount -= scrollStep;
        if (scrollAmount < 0) scrollAmount = 0;
        gallery.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});
