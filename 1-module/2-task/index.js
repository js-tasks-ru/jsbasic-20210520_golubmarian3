/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  // ваш код...
  
  //if ((name.includes(' ')) || (name.length < 4) || name == null) {  //в браузере работает, но тест не проходит
  //  return false;
  // } else return true;

  // if (name.includes(' ') || name.length < 4 || name == '') { //в браузере работает, но тест не проходит
  //   return false;
  // } else return true;
  
  if ((name !== null) && (name.indexOf(' ') == -1) && (name.length >= 4)) {
    return true;
  } else return false;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
