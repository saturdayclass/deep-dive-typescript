// Interface adalah sebuah feature dalam typescript yang digunakan untuk membuat sebuah type baru yang mendeskripsikan nama property dan value pada sebuah object.

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: 2002,
  broken: true,
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
