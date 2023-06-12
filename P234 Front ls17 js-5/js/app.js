























//----------------------------------------------
// TASK-2
class Car {
  constructor(brand, model, year) {
    this._brand = brand;
    this._model = model;
    this._year = year;
  }

  get brand() {
    return this._brand;
  }

  get model() {
    return this._model;
  }

  get year() {
    return this._year;
  }

  
}

let  car = new Car("BMW", "M5 f90", 2023);
console.log(car.brand); 
console.log(car.model); 
console.log(car.year); 


//-----------------------------------------------------------------
// TASK-3

function findSmallestElement(arr) {
  if (!Array.isArray(arr)) {
    console.log("Array deyil!!");
    return;
  }

  if (arr.length === 0) {
    console.log("Bos array");
    return;
  }

  const smallestElement = Math.min(...arr);
  console.log( smallestElement);
}

findSmallestElement([3, 1, 7, 5, 2]);
findSmallestElement([]); 
findSmallestElement("not an array"); 

