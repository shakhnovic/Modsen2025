class Person {
    
    #name;
  
    
    constructor(name) {
      this.#name = name;
    }
  
    
    getName() {
      return this.#name;
    }
  
    
    setName(newName) {
      this.#name = newName;
    }
  }
  
  
  const person = new Person('Alice');
  console.log(person.getName()); 
  
  person.setName('Bob');
  console.log(person.getName()); 
  
  