let scrollContainer = document.querySelector('.gallery');
let backBtn = document.getElementById('back-btn');
let nextBtn = document.getElementById('next-btn');

// Add wheel event listener to the scroll container
scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = 'auto';
});

// Handle click event on the next button
nextBtn.onclick = () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 900;
};

// Handle click event on the back button
backBtn.onclick = () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 900;
};
