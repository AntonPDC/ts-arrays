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
