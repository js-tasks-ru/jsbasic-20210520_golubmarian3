function sumSalary(salaries) {
  // ваш код...
  let result = 0;

    for (kay in salaries) {
      if (isFinite(salaries[kay])) {
        result = result + salaries[kay];
      }
    }
  
  return result;
}
