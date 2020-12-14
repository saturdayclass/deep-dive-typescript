// Example Type Annotations in Array
const carMakers: string[] = ['Toyota', 'Ford', 'BMW'];
const dates = [new Date(), new Date(), new Date()];
const carsByMakes: (string | number)[][] = [[2], ['corolla'], ['camaro']];

/* Why do we care?
1). Ts can co type inference when extracting values from an array
2). Ts can prevent us from adding incompatible values to the array
3). We can get help with 'map', 'forEach, 'reduce' function
4). Flexible - arrays can be still contain multiple different types
*/

// Example reason number one
const car1 = carMakers[0];
const removeLastCar = carMakers.pop();

// Example reason number two
// const addCar = carMakers.push(2)

// Example reason number three
carMakers.map((data) => {
  return data.toUpperCase();
});

// Example reason number four
const importantDate = [new Date(), '2020-10-10'];
importantDate.push('ok');
// importantDate.push(2) can't
