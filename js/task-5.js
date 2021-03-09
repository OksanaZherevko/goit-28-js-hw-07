const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onInputChange);

function onInputChange() {
  event.currentTarget.value.length === 0 
        ? nameOutput.textContent = 'незнайомець' 
        : nameOutput.textContent = event.currentTarget.value;
}