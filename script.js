const filterButtons = document.querySelectorAll('.filter_buttons button');
const filterableCards = document.querySelectorAll('.filterable_cards .card');

const filterCards = (e) => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    
    filterableCards.forEach(card => {
        card.classList.add('hide');
        if (card.dataset.name.toLowerCase() === e.target.dataset.name.toLowerCase() || e.target.dataset.name === 'all') {
            card.classList.remove('hide');
        }
    });
}

filterButtons.forEach(button => button.addEventListener('click', filterCards));