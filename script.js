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
    backdrop.classList.remove("is-open");
    backdrop.removeEventListener("click", onBackdropClick);
    document.removeEventListener("click", onEscClick);
  }
};

const onCloseBtnClick = (e) => {
  backdrop.classList.remove("is-open");
};

const onEscClick = (e) => {
  if (e.key === "Escape" || e.code === "Escape") {
    onCloseBtnClick();
  }
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
    const onDeleteClick = (e) => {
      e.preventDefault();
      const { target } = e;
      const msga = target.closest("li");
      msga.remove();
    };
    msgBtn.addEventListener("click", onDeleteClick);
  } else {
  }
};

btnModalOpen.addEventListener("click", onModalOpenC);
btnModalClose.addEventListener("click", onCloseBtnClick);
