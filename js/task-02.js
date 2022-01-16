const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


  
const ingredientsListEl = document.querySelector("#ingredients");

const iterEl = ingredients.map((ingredient) => {
  
  const createItemEl = document.createElement("li");
  createItemEl.textContent = ingredient;
  createItemEl.classList.add('item');

  console.log(createItemEl);
  return createItemEl
});
  
ingredientsListEl.append(...iterEl);


