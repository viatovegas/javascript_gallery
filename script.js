// JavaScript
const main = document.querySelector('#main-image');
const thumbs = document.querySelectorAll('.thumb');
const text = document.querySelector('#caption')

// 確認
// console.log(main);
// console.log(thumbs);

thumbs.forEach(function (item, index) {
    item.onmouseover = function () {
        main.src = this.dataset.image;
        text.textContent = this.title;
    }
});
