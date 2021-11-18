var listItems = document.querySelectorAll('ul li');

listItems.forEach(item => {
    item.addEventListener('click', (e) => {
        removeClass()
        addClass(e, item)
    });
})

function removeClass() {
    listItems.forEach(item => {
        if(item.classList.contains('show')) {
            item.classList.remove('show')
        }
    })
}

function addClass(e, item) {
    e.preventDefault();
    item.classList.add('show');
}