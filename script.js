const btnModalOpen = document.querySelector('.js-modal-open');
const btnModalClose = document.querySelector('.js-modal-close');
const backdrop = document.querySelector('.js-backdrop');
const nameI = document.querySelector('.js-nameI');
const passI = document.querySelector('js-passI');
const 

const onModalOpenC = (e) => {
    e.preventDefault();
    backdrop.classList.add('is-open');
    backdrop.addEventListener('click', onBackdropClick);
    document.addEventListener('keydown', onEscClick)
};

const onBackdropClick = (e) => {
    const { target, currentTarget } = e;
    if (target === currentTarget) {
        backdrop.classList.remove('is-open');
        backdrop.removeEventListener('click', onBackdropClick);
        document.removeEventListener('click', onEscClick)
    }
}

const onCloseBtnClick = (e) => {
    backdrop.classList.remove('is-open')
}

const onEscClick = (e) => {
    if (e.key === 'Escape' || e.code === 'Escape') {
        onCloseBtnClick();
    }
}

btnModalOpen.addEventListener('click', onModalOpenC);
btnModalClose.addEventListener('click', onCloseBtnClick);