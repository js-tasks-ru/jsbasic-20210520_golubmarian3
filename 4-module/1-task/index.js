function makeFriendsList(friends) {
  // ваш код...
  let ul = document.createElement('ul');

  friends.forEach(item => {
    ul.insertAdjacentHTML('beforeend', `<li>${item.firstName + ' ' + item.lastName}</li>`); //вариант 1
    //ul.innerHTML += `<li>${item.firstName + ' ' + item.lastName}</li>`; //вариант 2
  });

  return ul;
}
