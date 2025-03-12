function sortArray<T>(arr: T[]): T[] {
    return arr.slice().sort((a, b) => {
      if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b);  
      }
      if (typeof a === 'number' && typeof b === 'number') {
        return a - b;  
      }
      return 0;  
    });
  }
  
  // Пример использования
  const numArray = [3, 1, 4, 1, 5, 9];
  console.log(sortArray(numArray));  // [1, 1, 3, 4, 5, 9]
  
  const strArray = ['banana', 'apple', 'cherry'];
  console.log(sortArray(strArray));  


  type ConditionalType<T extends boolean> = T extends true ? string : number;

function getType<T extends boolean>(condition: T): ConditionalType<T> {
  if (condition) {
    return 'This is a string' as ConditionalType<T>;
  } else {
    return 42 as ConditionalType<T>;
  }
}

// Пример использования
console.log(getType(true));  // 'This is a string'
console.log(getType(false)); // 42



function getObjectKeys(obj) {
    return Object.keys(obj);
  }
  
  // Пример использования
  const person = { name: 'Alice', age: 30, city: 'Wonderland' };
  console.log(getObjectKeys(person));  // ['name', 'age', 'city']