const Drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// Type alias intro
type Drink = [string, boolean, number];

// Is an array until you annotate it
const pepsi: [string, boolean, number] = ["brown", true, 40];

// Using the type alias
const sprite: Drink = ["clear", true, 30];
const tea: Drink = ["brown", false, 0];

const carSpecs: [number, number] = [400, 3354];

const CarStats = {
  horsepower: 400,
  weight: 3354,
};
