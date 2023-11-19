function showListItem() {
    let count = 0;
    let listItems = document.querySelectorAll('.beautiful-list__item');
    listItems.forEach((el) => {
        if (((el.getBoundingClientRect().y + el.getBoundingClientRect().height) <= (window.innerHeight)) && el.style.left == '') {
            setTimeout(() => {el.style.left = 0, el.classList.add('animated-text')}, 200 * count++);
        }
    });
    
}
window.addEventListener('scroll', showListItem)
window.addEventListener('DOMContentLoaded', showListItem)