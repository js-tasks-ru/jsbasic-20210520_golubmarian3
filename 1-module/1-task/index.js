function factorial(n) {
  // ваш код...
  let result = n;

    if (n == 0 || n == 1) {
     return 1; 
    } else {
      
      for (let i = 1; i < n; i++) {
        result = result * ( n - i ) ;
      }
    
      return result;    
    }
}
