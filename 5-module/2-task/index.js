function toggleText() {
  // ваш код...
  document.querySelector('button').addEventListener('click', () => text.hidden == false ? text.hidden = true : text.hidden = false);
  //document.querySelector('button').addEventListener('click', () => text.hidden = !text.hidden);
  
}
