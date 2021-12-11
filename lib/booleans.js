function negate(a) {
  return (a = !a);
  // your code here
}

function both(a, b) {
  return a && b;
  // your code here
}

function either(a, b) {
  return a || b;
  // your code here
}

function none(a, b) {
  return a === false && b === false;
  // your code here
}

function one(a, b) {
  return (a || b) && !(a && b);
  // return a === true || b === true
  // your code here
}

function truthiness(a) {
  return Boolean(a);

  // your code here
}

function isEqual(a, b) {
  return a === b;
  // your code here
}

function isGreaterThan(a, b) {
  return a > b;
  // your code here
}

function isLessThanOrEqualTo(a, b) {
  return a <= b;
  // your code here
}

function isOdd(a) {
  if (a % 2 !== 0) {
    return true;
  }
  return false;

  // your code here
}

function isEven(a) {
  if (a % 2 === 0) {
    return true;
  }
  return false;

  // your code here
}

function isSquare(a) {
  // your code here
  return Boolean(Math.sqrt(a) % 1 === 0);
}

function startsWith(char, string) {
  if (char === string.charAt(0)) {
    return true;
  }
  return false;

  // your code here
}

function containsVowels(string) {
  const letters = string.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  const stringVowels = letters.filter(letter => {
    return vowels.indexOf(letter) !== -1;
  });
  return stringVowels.length > 0;
  // your code here
}

function isLowerCase(string) {
  if (string === string.toLowerCase()) {
    return true;
  }
  return false;

  // your code here
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
