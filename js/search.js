// const items = ["apple", "banana", "orange", "kiwi"];

const searchInputEl = document.querySelector(".js-search");
const searchList = document.querySelector(".js-items");
const item = document.querySelectorAll(".item");

// for (let i = 0; i < items.length; i++) {
//   const item = document.createElement("li");
//   item.textContent = items[i];
//   searchList.appendChild(item);
// }
// ------------------------------------------------

const inputChange = (e) => {
  for (let i = 0; i < item.length; i++) {
    // console.dir(item[i].innerHTML);
    if (item[i].textContent.includes(e.target.value)) {
      // console.dir(e.target.value);
      item[i].classList.remove("hidden");
    } else item[i].classList.add("hidden");
  }
};

searchInputEl.addEventListener("input", inputChange);
