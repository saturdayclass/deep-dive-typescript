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

const { age, name }: { age: number; name: string } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
