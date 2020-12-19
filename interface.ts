// Interface adalah sebuah feature dalam typescript yang digunakan untuk membuat sebuah type baru yang mendeskripsikan nama property dan value pada sebuah object.

const oldCivic = {
  name: 'civic',
  year: 2002,
  broken: true,
};

const printVechile = (vechile: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name : ${vechile.name}`);
  console.log(`Year : ${vechile.year}`);
  console.log(`Broken? ${vechile.broken}`);
};
