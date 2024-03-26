// public/js/script.js
// public/js/script.js
document.addEventListener('DOMContentLoaded', () => {
  const nextPageButton = document.getElementById('next-page');
  const prevPageButton = document.getElementById('prev-page');

  nextPageButton.addEventListener('click', () => {
    const currentOffset = parseInt(nextPageButton.dataset.offset);
    const searchQuery = window.location.search.split('=')[1].split('&')[0]; // Extract search query from URL
    const newOffset = currentOffset + 5; // Increment by 5
    window.location.href = `/?q=${searchQuery}&offset=${newOffset}`; // Include search query in the URL
  });

  prevPageButton.addEventListener('click', () => {
    const currentOffset = parseInt(prevPageButton.dataset.offset);
    const searchQuery = window.location.search.split('=')[1].split('&')[0]; // Extract search query from URL
    const newOffset = Math.max(0, currentOffset - 5); // Decrement by 5
    window.location.href = `/?q=${searchQuery}&offset=${newOffset}`; // Include search query in the URL
  });
});



// Show loader when Next button is clicked
document.getElementById('next-page').addEventListener('click', function() {
  document.querySelector('.loader').classList.remove('hidden');
});