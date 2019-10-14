const fullSizeImgs = document.getElementsByClassName('slides');

let currentImage = 0;

function reset() {
    for (let img of fullSizeImgs) {
        img.classList.remove('show');
    }
}