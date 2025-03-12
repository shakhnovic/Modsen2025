function combine(arg1, arg2) {
    
    if (typeof arg1 === 'number' && typeof arg2 === 'number') {
      return arg1 + arg2;
    }
    
    else if (typeof arg1 === 'string' && typeof arg2 === 'string') {
      return arg1 + arg2;
    }
    
    else {
      return 'Arguments must be either both numbers or both strings.';
    }
  }
  
  
  console.log(combine(2, 3));           
  console.log(combine('Hello', ' World')); 
  console.log(combine(2, '3'));