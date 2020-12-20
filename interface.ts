// Interface adalah sebuah feature dalam typescript yang digunakan untuk membuat sebuah type baru yang mendeskripsikan nama property dan value pada sebuah object.
// Kita bisa memasukan macam-macam type tidak hanya string, number, boolean dll.
interface Reportable {
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

const drink = {
  color: 'red',
  sugar: 40,
  carbonated: false,
  summary(): string {
    return `My drink have a color ${this.color}`
  }
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
