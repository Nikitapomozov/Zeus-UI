const showMore = document.querySelector('.show-more');
const cardsLenght = document.querySelectorAll('.collections__card').length; // общее кол-во элементов
let items = 3; // начальное кол-во элементов

showMore.addEventListener('click', () => {
    items += 3;
    const array = Array.from(document.querySelector('.collections__cards').children); // массив всех элементов
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'));

    if (visItems.length === cardsLenght) {
        showMore.style.display = 'none';
    }
    console.log('d')
}); 