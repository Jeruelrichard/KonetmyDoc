//Makes Searchbar Functional
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');

function filterCards(query) {
      const lowerQuery = query.toLowerCase();
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(lowerQuery)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    }

    searchInput.addEventListener('input', () => {
filterCards(searchInput.value);
    });

searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      filterCards(searchInput.value);
    });
    
//Makes Filter active
const filterButtons = document.querySelectorAll('.filter-btn');
const cardss = document.querySelectorAll('.card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Removes active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Adds active class to clicked button
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    cardss.forEach(card => {
      if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});