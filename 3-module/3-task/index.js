function camelize(str) {
  // ваш код...
  //vol 1.0
  // str = str.split('');   
  
  // str = str.map(function (item, index) {

  //   if (str[index - 1] == '-') {
  //     return item.toUpperCase();
  //   } return item;     
  
  // });

  // str = str.filter(item => item !== '-');            
  // return str.join('');


  // vol 1.1
  str = str.split('');   
  str = str.map((item, index) => (str[index - 1] == '-') ? item.toUpperCase() : item);
  str = str.filter(item => item !== '-');
  return str.join('');
}
