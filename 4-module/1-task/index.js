function makeFriendsList(friends) {
  // ваш код...
  let ul = document.createElement('ul');

  friends.forEach(item => {
    ul.innerHTML += `<li>${item.firstName + ' ' + item.lastName}</li>`;
  });

  return ul;
}
