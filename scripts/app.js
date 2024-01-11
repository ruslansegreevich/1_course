// ПОПАП ОКНО
document.querySelector('.menu__add').addEventListener('click', () => {
    const popupVisible = document.querySelector('.cover');
    popupVisible.classList.remove('cover_hidden');
    console.log('нажатие на кнопку и видимость попап окна');
} );

document.querySelector('.popup__close').addEventListener('click', () => {
    const popupInvisible = document.querySelector('.cover');
    popupInvisible.classList.add('cover_hidden');
    console.log('нажатие на кнопку закрыть попап окно и невидимое попап окно');
});
