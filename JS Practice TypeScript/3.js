function getCar(car) {
    
    if (car.model && car.year) {
      return `Car Info: Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`;
    } 
    
    else if (car.brand) {
      return `Car Info: Brand: ${car.brand}`;
    }
    
    else {
      return 'Invalid car information';
    }
  }
  
  
  const fullCar = { brand: 'Toyota', model: 'Corolla', year: 2020 };
  console.log(getCar(fullCar)); 
  
  const brandOnlyCar = { brand: 'Honda' };
  console.log(getCar(brandOnlyCar)); 
  
  const invalidCar = { model: 'Civic' };
  console.log(getCar(invalidCar)); 