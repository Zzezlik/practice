const msgList = document.querySelector("ul");

const onCloseBtn = (e) => {
  const { target } = e;

  if (target.nodeName !== "BUTTON" && target.tagName !== "BUTTON") return;

  const msg = target.closest("li");
  console.dir(msg);
  msg.remove();
};

msgList.addEventListener("click", onCloseBtn);
