
function toggleSectionVisibility(section) {
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
    } else {
        section.classList.add('hidden');
    }
}


function toggleImageZoom(image) {
    if (image.style.transform === 'scale(1.1)') {
        image.style.transform = 'scale(1.0)';
    } else {
        image.style.transform = 'scale(1.1)';
    }
}


const violinSection = document.getElementById('violin');
const sailingSection = document.getElementById('sailing');
const travelingSection = document.getElementById('traveling');

violinSection.addEventListener('click', () => {
    toggleSectionVisibility(violinSection);
});

sailingSection.addEventListener('click', () => {
    toggleSectionVisibility(sailingSection);
});

travelingSection.addEventListener('click', () => {
    toggleSectionVisibility(travelingSection);
});


const bookImage = document.querySelector('.book-image');

bookImage.addEventListener('click', () => {
    toggleImageZoom(bookImage);
});


function scrollPapers(container, direction, scrollAmount) {
    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        container.scrollLeft += scrollAmount;
    }
}


const papersContainer = document.querySelector('.papers-container');

papersContainer.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('scroll-button')) {
        const direction = target.classList.contains('left') ? 'left' : 'right';
        const scrollAmount = 200; 
        scrollPapers(papersContainer, direction, scrollAmount);
    }
});

function openImage(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');

    lightbox.style.display = 'block';
    lightboxImage.src = imageSrc;
}

function closeImage() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}


