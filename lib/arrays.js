const getNthElement = (index, array) => {
  // your code here
  if (index < array.length){
    return array[index];
  }
   else if (index-(array.length) < array.length){
     return array[index-(array.length)]
   }

};
  
const arrayToCSVString = array => {
  // your code here
  return array.join()
};

const csvStringToArray = string => {
  return string.split(',');
  // your code here
  document.write(array.toString());
};

const addToArray = (element, array) => {
  // your code here
  array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  // your code here
  return array.splice(index,1);
};

const numbersToStrings = numbers => {
  // your code here
  return numbers.map(number => String(number));
};

const uppercaseWordsInArray = strings => {
  // your code here
  return strings.map(word => 
    word.toUpperCase())
};

const reverseWordsInArray = strings => {
  // your code here
  return strings.map(word => 
    word.split("").reverse().join("")
  )
};

const onlyEven = numbers => {
  // your code here
  return numbers.filter(number => 
    (number % 2 === 0));
};

const removeNthElement2 = (index, array) => {
  // your code here
  return array.filter((_, itemIndex) => itemIndex !== index);
};

const elementsStartingWithAVowel = strings => {
  // your code here
  //const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  //return strings.startsWith((vowels.map === word[0])
  
};

const removeSpaces = string => {
  // your code here
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  // your code here
  //numbers.reduce((acc, number) => {
   //return acc + number
  //}, 0);
  numbers.reduce((total, number) => {
    return total + number
  }, 0);
};

const sortByLastLetter = strings => {
  // your code here
  const reverseString = (item) => item.split('').reverse().join('');
  
  return strings.map(reverseString).sort().map(reverseString);
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
