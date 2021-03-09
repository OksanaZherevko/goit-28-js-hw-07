const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const creatListIngredients = (ingredients) => {
  return ingredients.map(ingredient => {
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = ingredient;
  
    return ingredientEl;
  });
}

const ingredientsListEl = document.querySelector('#ingredients');
const elements = creatListIngredients(ingredients);
ingredientsListEl.append(...elements);