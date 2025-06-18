document.querySelectorAll('.gallery-container').forEach(container => {
    const gallery = container.querySelector('.arrow-gallery');
    const leftButton = container.querySelector('.arrow.left');
    const rightButton = container.querySelector('.arrow.right');

    let scrollAmount = 0;
    const scrollStep = 800;

    function getMaxScrollAmount() {
        return gallery.scrollWidth - gallery.clientWidth;
    }

    rightButton.addEventListener('click', () => {
        const maxScrollAmount = getMaxScrollAmount();
        scrollAmount = Math.min(scrollAmount + scrollStep, maxScrollAmount);
        gallery.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    leftButton.addEventListener('click', () => {
        scrollAmount = Math.max(scrollAmount - scrollStep, 0);
        gallery.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});
