let apples: number = 6;
let speed: string = 'fast';
let hasName: boolean = false;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [false, true];

// Classes
class Car {}
let car: Car = new Car();

// Objects Literals
let point: { x: number; y: number } = { x: 12, y: 13 };

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

/* 
when to use annotation
1) function that return the any type like example below
*/
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
/* 
note: Kalo di perhatikan constanta coordinates disini menggunakan any type.
kenapa? karena function JSON.parse() akan men-parse nilai dari property yg akan di parse sesuai dengan tipe data nilainya. Maka dari itu typescript tidak dapat memprediksi type apa yang digunakan oleh si constanta coordinates karena mungkin saja dalam memparse json banyak sekali tipe data yang di parse.
*/

/*
when to use annotation
3) variable whose type cannot be inferred correctly
*/

let numbers = [-1, -10, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
