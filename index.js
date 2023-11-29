//Objects
const vehicle = {
  color: "blue",
  hp: 4000,
  year: 1989,
  "active registration": true,
};

// console.log(vehicle.hp); // 4000
// console.log(vehicle["color"]); //blue
// console.log(vehicle["active registration"]); // true

// Changing Object Properties and Values
vehicle.color = "red"; // changing a existing property
vehicle.make = "Audi"; // adding a new key:value pair
delete vehicle["active registration"]; // removing an existing property
vehicle.doors = 4;

for (let key in vehicle) {
  console.log(key + ": " + vehicle[key]);
  //   console.log(vehicle.key);
}

// Other Objects
const car = {
  color: "blue",
  year: 1989,
  make: "Audi",
  engine: {
    cylinders: 6,
    hp: 4000,
    size: 3.2,
  },
  passengers: [
    {
      name: "chris",
      isCool: true,
    },
    {
      name: "Younghyun",
      isCool: true,
    },
  ],
};
//
// const car2 = car;
// delete car2.color;
// console.log(car);

// console.log(car === car2);

// console.log(car.passengers[1].name);

// console.log(car.engine.size);
