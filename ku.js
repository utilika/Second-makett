const menuWPop = document.querySelector('.kuku');
const menuButt = document.querySelector('.butt');


menuButt.addEventListener('click', showPopu);

function showPopu(evt) {
    console.log(evt);
    evt.preventDefault();
    menuWPop.classList.toggle('img-pop')
}
//------------------------------------------


const menuPic = document.querySelector('.img-pop');

menuPic.addEventListener('click', closePic);

function closePic(evt) {
    console.log(evt);
    evt.preventDefault();
    menuWPop.classList.remove('img-pop')
}