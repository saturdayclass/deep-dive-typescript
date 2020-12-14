// Example Type Annotations in Array
const carMakers: string[] = ['Toyota', 'Ford', 'BMW'];
const dates = [new Date(), new Date(), new Date()];
const carsByMakes: string[][] = [['f150'], ['corolla'], ['camaro']];

/* Why do we care?
1). Ts can co type inference when extracting values from an array
2). Ts can prevent us from adding incompatible values to the array
3). We can get help with 'map', 'forEach, 'reduce' function
4). Flexible - arrays can be still contain multiple different types
*/
