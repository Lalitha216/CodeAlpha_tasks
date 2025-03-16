document.addEventListener('DOMContentLoaded', function () {
    const searchBox = document.querySelector('.search-box input');
    const images = document.querySelectorAll('.images .card');
    const loadMoreBtn = document.querySelector('.load-more');
    let visibleImages = 6; // Number of images initially visible

    // Search functionality
    searchBox.addEventListener('input', function () {
        const searchTerm = searchBox.value.trim().toLowerCase();

        images.forEach(image => {
            const altText = image.querySelector('img').getAttribute('alt').toLowerCase();
            if (altText.includes(searchTerm)) {
                image.style.display = 'block'; // Show matching images
            } else {
                image.style.display = 'none'; // Hide non-matching images
            }
        });
    });

    // Load more functionality
    loadMoreBtn.addEventListener('click', function () {
        visibleImages += 6; // Increase the number of visible images
        for (let i = 0; i < visibleImages && i < images.length; i++) {
            images[i].style.display = 'block';
        }

        // Hide the "Load More" button if all images are visible
        if (visibleImages >= images.length) {
            loadMoreBtn.style.display = 'none';
        }
    });

    // Initially hide images beyond the first 6
    for (let i = visibleImages; i < images.length; i++) {
        images[i].style.display = 'none';
    }
});