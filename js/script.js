const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
const ulEl = document.querySelector(".js-itemholder");
const ulEls = document.querySelectorAll(".item");
const searchEl = document.querySelector("#search");

for (let i = 0; i < fruits.length; i++) {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = fruits[i];
  ulEl.appendChild(liEl);
  console.dir(liEl.outerHTML);
}

// ----------------------------------------------

const onInput = (e) => {
  const { target } = e;
  const searchText = target.value.toLowerCase();
  const filteredItems = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(searchText)
  );

  ulEl.innerHTML = "";

  filteredItems.forEach((filteredItem) => {
    const li = document.createElement("li");
    li.classList.add("item");
    li.textContent = filteredItem;
    ulEl.appendChild(li);
  });
};

searchEl.addEventListener("input", onInput);
