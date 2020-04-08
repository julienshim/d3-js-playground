cars = [
  {
    make: 'Ford',
    model: 'Focus',
    year: 2018,
    price: 12690
  },
  {
    make: 'Toyota',
    model: 'Prius',
    year: 2014,
    price: 9800
  },
  {
    make: 'Dodge',
    model: 'Ram',
    year: 2011,
    price: 9999
  },
  {
    make: 'Chevrolet',
    model: 'Silverado',
    year: 2017,
    price: 15995
  }
  ,  {
    make: 'Toyoa',
    model: 'Corolla',
    year: 2010,
    price: 4950
  }
]

for(let i = 0; i < cars.length; i++) {
  const car = cars[i]
  console.log(car.price)
}

for(car of cars) {
  console.log(car.price)
}

const printPrice = car => {
  console.log(car.price)
}

cars.forEach(printPrice)

const prices = cars.map(car => car.price)
console.log(prices)
console.log(prices.sort())

console.log(cars.filter(car => car.price < 10000))

const formatCar = car => {
  const {year, make, model, price} = car;
  return `${year} ${make} ${model}: $${price}`;
};

console.log(cars.filter(car => car.price < 10000)
          .map(formatCar)
          .join('\n'))
        
console.log(JSON.stringify(cars, null, 2)) // value, replacer, space

const newCars = JSON.parse(`[
  {
    "make": "Ford",
    "model": "Focus",
    "year": 2018,
    "price": 12690
  },
  {
    "make": "Toyota",
    "model": "Prius",
    "year": 2014,
    "price": 9800
  },
  {
    "make": "Dodge",
    "model": "Ram",
    "year": 2011,
    "price": 9999
  },
  {
    "make": "Chevrolet",
    "model": "Silverado",
    "year": 2017,
    "price": 15995
  },
  {
    "make": "Toyoa",
    "model": "Corolla",
    "year": 2010,
    "price": 4950
  }
]`)

console.log(newCars)