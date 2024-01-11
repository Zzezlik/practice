const count = document.querySelector(".count");
const plus = document.querySelector(".js-increment");
const minus = document.querySelector(".js-decrement");

let counterValue = 0;

const onPlusClick = (e) => {
  e.preventDefault();
  counterValue += 1;
  count.textContent = counterValue;
};
const onMinusClick = (e) => {
  e.preventDefault();
  counterValue -= 1;
  count.textContent = counterValue;
};

plus.addEventListener("click", onPlusClick);
minus.addEventListener("click", onMinusClick);
