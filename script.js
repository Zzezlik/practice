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
  if (nameI.value.trim() !== "" && passI.value !== "") {
    console.log(`Name: ${nameI.value}\nPassword: ${passI.value}`);
  } else {
    const msgc = `<li class="message js-message">
        <a>
          <h3>error</h3>
          <p>
            description
          </p>
          <div>
            <button type="button" class="message__close-btn">[x]</button>
          </div>
        </a>
      </li>`;
    msgj.insertAdjacentHTML("beforeend", msgc);
    const onMsgClose = (e) => {
      if (e.tagName !== "BUTTON") return;
      const msgCl = target.closest("li");
      console.dir(msgCl);
    };
    msgj.addEventListener("click", onMsgClose);
  }
};

btnModalOpen.addEventListener("click", onModalOpenC);
btnModalClose.addEventListener("click", onCloseBtnClick);
