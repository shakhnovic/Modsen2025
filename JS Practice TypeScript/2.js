function createPartial(obj) {
    const result = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = undefined; \
      }
    }
    return result;
  }
  
  const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
  };
  
  const partialCar = createPartial(car);
  console.log(partialCar); 