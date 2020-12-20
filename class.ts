class Vehicle {
  drive(): void {
    console.log('Brum brum');
  }

  honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
