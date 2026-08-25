// inferred type
const carMakers = ["ford", "toyota", "chevy"];

// annotation
const carmakers2: string[] = [];

const dates = [new Date(), new Date()];

const carByMake = [["f150"], ["corolla"], ["camaro"]];
const carByMake2: string[][] = [[]];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible array values
const dates2: (string | Date)[] = [new Date()];
dates2.push("2030-10-10");
dates2.push(new Date());
dates2.push(100);
