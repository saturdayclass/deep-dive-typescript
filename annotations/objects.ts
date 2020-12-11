// Example Type Annotations in object
const profile = {
  name: 'Raihan',
  age: 20,
  coords: {
    lat: 0,
    lng: 0,
  },
  setAge(age: number): void {
    console.log(age);
  },
};

const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
