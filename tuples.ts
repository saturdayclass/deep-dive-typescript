// Tuple
// Struktur data yang sangat mirip sekali dengan array. Tapi bukan array,
// Tupple biasa nya mengandung beberapa property untuk mendiskripsikan satu hal
// Biasa nya tupple akan mencocokan banyak type yang berbeda dalam data yang ada dalam tupple

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

const sprite = ['brown', true, 30];
// sprite[0] = 20;

// Type Alias
type Drink = [string, boolean, number];

const fanta: Drink = ['Red', true, 30];
const cocaCola: Drink = ['black', true, 30];
