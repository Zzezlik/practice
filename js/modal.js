const btnModalOpen = document.querySelector(".js-modal-open");
const btnModalClose = document.querySelector(".js-modal-close");
const backdrop = document.querySelector(".js-backdrop");
const nameI = document.querySelector(".js-nameI");
const passI = document.querySelector(".js-passI");
const submit = document.querySelector(".js-submit");
const modal = document.querySelector(".modal");
const form = document.querySelector(".form");
const msgj = document.querySelector(".js-message-list");

const onModalOpenC = (e) => {
  e.preventDefault();
  backdrop.classList.add("is-open");
  backdrop.addEventListener("click", onBackdropClick);
  document.addEventListener("keydown", onEscClick);
  submit.addEventListener("click", onSubmitClick);
};

const onBackdropClick = (e) => {
  const { target, currentTarget } = e;
  if (target === currentTarget) {
    onCloseBtnClick();
  }
};

const onCloseBtnClick = () => {
  backdrop.classList.remove("is-open");
  backdrop.removeEventListener("click", onBackdropClick);
  document.removeEventListener("keydown", onEscClick);
  submit.removeEventListener("click", onSubmitClick);
};

const onEscClick = (e) => {
  if (e.key === "Escape" || e.code === "Escape") {
    onCloseBtnClick();
  }
};

const onDeleteClick = (e) => {
  e.preventDefault();
  const { target } = e;
  const msga = target.closest("li");
  msga.remove();
};

const onSubmitClick = (e) => {
  e.preventDefault();
  if (nameI.value.trim() === "" && passI.value === "") {
    const msgEl = document.createElement("li");
    const msgBtn = document.createElement("button");

    msgEl.classList.add("message");
    msgBtn.classList.add("message__close-btn");

    msgEl.textContent = "Error";
    msgBtn.textContent = "x";
    form.insertAdjacentElement("beforeend", msgEl);
    msgEl.insertAdjacentElement("beforeend", msgBtn);

    msgBtn.addEventListener("click", onDeleteClick);
  } else {
    const msgEl = document.createElement("li");
    const msgBtn = document.createElement("button");

    msgEl.classList.add("message");
    msgBtn.classList.add("message__close-btn");
    msgEl.textContent = `Name: ${nameI.value}Password: ${passI.value}`;

    msgBtn.textContent = "x";
    msgBtn.addEventListener("click", onDeleteClick);

    form.insertAdjacentElement("beforeend", msgEl);
    msgEl.insertAdjacentElement("beforeend", msgBtn);
  }
};

btnModalOpen.addEventListener("click", onModalOpenC);
btnModalClose.addEventListener("click", onCloseBtnClick);
