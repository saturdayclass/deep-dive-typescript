// Class adalah blueprint, ketika kita meng-overriding method parent ke child. Kita tidak bisa mengubah modifier nya. Secara default method dan property kita modifier nya adalah public

// Kenapa kita peduli dengan class? sama sepertihalnya interface. Class bisa kita reusable sehingga mempermudah proses development

// Kita bisa menggunakan javascript ke dalam typescript, kita juga bisa menggunakan library js ke dalam typescript. Tapi tidak seperti ketika kita menggunakan-nya di js. Setiap library js yang ingin digunakan di typescript harus memiliki type defintion. @types
class Vehicle {
  protected drive(): void {
    console.log('Brum brum');
  }

  constructor(public color: string) {}

  private honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('red');
console.log(vehicle.color);

class Car extends Vehicle {
  // Overriding
  drive(): void {
    console.log('gas gas');
  }

  constructor(public wheels: number, color: string) {
    super(color);
  }
}

const car = new Car(4, 'red');
car.drive();
