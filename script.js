const btnModalOpen = document.querySelector('.js-modal-open');
const btnModalClose = document.querySelector('.js-modal-close');
const backdrop = document.querySelector('.js-backdrop');
const nameI = document.querySelector('.js-nameI');
const passI = document.querySelector('.js-passI');
const submit = document.querySelector('.js-submit');
const modal = document.querySelector('.modal');
const ulel = document.querySelector('.js-ul');

const onModalOpenC = (e) => {
    e.preventDefault();
    backdrop.classList.add('is-open');
    backdrop.addEventListener('click', onBackdropClick);
    document.addEventListener('keydown', onEscClick)
    submit.addEventListener('click', onSubmitClick);
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

const onSubmitClick = (e) => {
    e.preventDefault();
    if (nameI.value.trim() !== '' && passI.value !== '') {
        console.log(`Name: ${nameI.value}\nPassword: ${passI.value}`);
    } else {
        const message = document.createElement('li');
        message.textContent = 'test'
        ulel.appendChild(message)
    }
}

btnModalOpen.addEventListener('click', onModalOpenC);
btnModalClose.addEventListener('click', onCloseBtnClick);