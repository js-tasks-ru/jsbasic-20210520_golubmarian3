function showSalary(users, age) {
  // ваш код...
  // users = users.filter(users => users.age <= age);
  // users = users.map(users => users.name + ', ' + users.balance);
  // return users.join('\n');
  return users.filter(users => users.age <= age).map(users => users.name + ', ' + users.balance).join('\n');

}
