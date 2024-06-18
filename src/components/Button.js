export function newBtn(nameOfButton = '', elementClass) {
  const btn = document.createElement('button');

  btn.textContent = nameOfButton;

  if (elementClass) {
    btn.classList.add(elementClass);
  }

  return btn;
}
