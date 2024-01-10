const searchEl = document.querySelector("#searchInput");
const itemList = document.querySelector("#itemList");
const item = document.querySelector(".item");

console.dir(itemList);

searchEl.addEventListener("input", inputChange);
