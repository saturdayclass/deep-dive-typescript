// Example very simple type annotation in function
const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  return a - b;
};

function devide(a: number, b: number): number {
  return a / b;
}

// Anonymus Function Example
const multiply = function (a: number, b: number): number {
  return a * b;
};

const add2 = (a: number, b: number): number => {
  return a + b;
};

// Void Type Example, note : type void ini digunakan ketika function yang kita buat tidak mengembalikan nilai apa-apa. Secara teknikal void juga bisa me-return null atau undefined

const logger = (message: string): void => {
  console.log(message);
  // return null; it's okey
};

// Example Never Type
const throwError = (message: string): never => {
  throw new Error(message);
};

// Example desctructing with annotations
const todayWaters = {
  date: new Date(),
  weather: 'suny',
};

// Note : sedikit catatan ketika kita mendesctrucing object dalam parameter kemudian ingin memberikan type annotations ke desctrucing object tsb. Kita harus menyesuaikan urutan antara desctrucing object dengan pemberian desctrucing type.
const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};

logWeather(todayWaters);
