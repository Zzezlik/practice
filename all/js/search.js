const items = ["apple", "banana", "orange", "kiwi"];

const searchInputEl = document.querySelector(".js-search");
const searchList = document.querySelector(".js-items");
const item = document.querySelectorAll(".item");

for (let i = 0; i < items.length; i++) {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = items[i];
  searchList.appendChild(item);
}
// ------------------------------------------------

const inputChange = (e) => {
  const searchText = e.target.value.toLowerCase();
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchText)
  );

  searchList.innerHTML = "";

  filteredItems.forEach((filteredItem) => {
    const li = document.createElement("li");
    li.classList.add("item");
    li.textContent = filteredItem;
    searchList.appendChild(li);
  });
};

searchInputEl.addEventListener("input", inputChange);
