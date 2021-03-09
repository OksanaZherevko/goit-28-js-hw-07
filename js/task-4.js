const decrementBtn = document.querySelector('#counter').firstElementChild;
const incrementBtn = document.querySelector('#counter').lastElementChild;

let counterValue = 0;
function onButtonClickIncrement() {
  counterValue += 1;
  document.querySelector('#value').textContent = counterValue;
}

function onButtonClickDecrement() {
  counterValue -= 1;
  document.querySelector('#value').textContent = counterValue;
}

incrementBtn.addEventListener('click', onButtonClickIncrement);

decrementBtn.addEventListener('click', onButtonClickDecrement);