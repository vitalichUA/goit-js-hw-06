// const allCategoriesEl = document.querySelectorAll('ul#categories li.item');
// const numberOfCategoriesEl = allCategoriesEl.length;
// console.log(`Number of categories: ${numberOfCategoriesEl}`);

// const allItemEl = document.querySelectorAll(`.item`);
// for (let item of allItemEl) {
//     console.log(`Category: ${item.querySelector(`h2`).textContent}`);
//     console.log(`Elements: ${item.querySelectorAll(`li`).length}`);
// }



const listRef = document.querySelector('#categories');
const itemRef = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemRef.length}`);

itemRef.forEach(node => {
    const title = node.querySelector('h2');
    const item = node.querySelectorAll('li');
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${item.length}`);
})