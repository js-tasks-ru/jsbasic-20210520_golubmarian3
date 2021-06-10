function hideSelf() {
  // ваш код...
  let  button = document.querySelector('button');
  button.addEventListener('click', () => button.hidden = true);
  //button.addEventListener('click', () => button.setAttribute('hidden',''));
}
