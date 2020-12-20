// Class adalah blueprint, ketika kita meng-overriding method parent ke child. Kita tidak bisa mengubah modifier nya
class Vehicle {
  drive(): void {
    console.log('Brum brum');
  }

  honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  // Overriding
  drive(): void {
    console.log('gas gas');
  }
}

const car = new Car();
car.drive();
car.honk();

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();
