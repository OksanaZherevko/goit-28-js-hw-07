const items = document.querySelectorAll('.item');
// console.log('items', items);

console.log(`В списке ${items.length} категории.`);

items.forEach(item => {
console.log('Категорія:', item.querySelector('h2').textContent);
console.log('Кількість елементів:', item.querySelector('ul').children.length);
});

