// Class adalah blueprint, ketika kita meng-overriding method parent ke child. Kita tidak bisa mengubah modifier nya. Secara default method dan property kita modifier nya adalah public
class Vehicle {
  protected drive(): void {
    console.log('Brum brum');
  }

  private honk(): void {
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

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();
