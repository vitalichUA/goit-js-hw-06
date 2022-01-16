const allCategoriesEl = document.querySelectorAll('ul#categories li.item');
const numberOfCategoriesEl = allCategoriesEl.length;
console.log(`Number of categories: ${numberOfCategoriesEl}`);

const allItemEl = document.querySelectorAll(`.item`);
for (let item of allItemEl) {
    console.log(`Category: ${item.querySelector(`h2`).textContent}`);
    console.log(`Elements: ${item.querySelectorAll(`li`).length}`);
}

