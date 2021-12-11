const createPerson = (name, age) => {
  // your code here
  return {
  name: name,
  age: age,
  }
};

const getName = object => {
  return object.name;
  // your code here
};

const getProperty = (property, object) => {
  return object[property];
  // your code here
};

const hasProperty = (property, object) => {
  // your code here
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  // your code here
  return person.age > 65;
};

const getAges = people => {
  // your code here
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  // your code here
  return people.find(personName => personName.name === name);
};

const findHondas = cars => {
  // your code here
  return cars.filter(carMake => carMake.manufacturer === "Honda");
};

const averageAge = people => {
  // your code here
  const totalAge = people.reduce((prevAge, currentPerson) => {
    return prevAge + currentPerson.age;
  }, 0); 
  return totalAge / people.length;
};

const createTalkingPerson = (name, age) => {
  // your code here
  return {
    name: name,
    age: age,
    introduce: strangersName => {
      return `Hi ${strangersName}, my name is ${name} and I am ${age}!`;
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
