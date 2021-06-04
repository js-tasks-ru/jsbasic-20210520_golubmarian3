function getMinMax(str) {
  // ваш код...
  str = str.split(',');
  str = str.map(item => item.split(' '));
  str = str.flat(Infinity);
  str = str.filter(item => isFinite(item) && item !== '');
  str = str.sort((a, b) => a - b);
  let result = {};
  result.min = +str[0];
  result.max = +str[str.length - 1]; 
  return result;
}
