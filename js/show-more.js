const showMore = document.querySelector('.show-more');
const cardsLenght = document.querySelectorAll('.collections__cards-row').length; // общее кол-во элементов
let items = 1; // начальное кол-во элементов

showMore.addEventListener('click', () => {
    items += 1;
    const array = Array.from(document.querySelector('.collections__cards').children); // массив всех элементов
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'));

    if (visItems.length === cardsLenght) {
        showMore.style.display = 'none';
    }
}); 