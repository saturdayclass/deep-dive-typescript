// Interface adalah sebuah feature dalam typescript yang digunakan untuk membuat sebuah type baru yang mendeskripsikan nama property dan value pada sebuah object.
// Kita bisa memasukan macam-macam type tidak hanya string, number, boolean dll.
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2002,
  broken: true,
  summary(): string {
    return `name: ${this.name}`;
  },
};

// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name : ${vehicle.name}`);
//   console.log(`Year : ${vehicle.year}`);
//   console.log(`Broken? ${vehicle.broken}`);
// };

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name : ${vehicle.name}`);
  console.log(`Year : ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

printVehicle(oldCivic);
