/*
  Reduce
  
  Good for taking a list and reducing it down to one value in a user defined way.

      var list = ['a','b','c'];
    list.reduce(function(accumulator, letter) {
        return accumulator + letter.toUpperCase();
    }); // returns aBC since a becomes the seed

    list.reduce(function(accumulator, letter) {
        return accumulator + letter.toUpperCase();
    }, ''); // returns ABC since '' starts as the seed
  
  Test 1
  Name your function addTogether
  Take in a list and return the result of that list added together
  Do not use a loop
  
  Test 2
  Name your function concatenateStringsWithSpaces
  Take in a list, return that string with those strings concatenated together with spaces between them
  Don't worry about leading or trailing whitespace
  Do not use .join or loops
  
  Test 3
  Name your function squaresAndSubtracts
  Map over your list, square each value, and then subtract them in order (take index 0, subtract index 1, 
  then index 2, etc.)
  Do not use a loop
  
  Test 4
  Name your function myReduce
  Implement your own reduce
  myReduce takes three parameters: the list being operated on, a function to apply the reduction, and 
  seed value to start the reduce
  You will need to use a loop
  
*/

const addTogether = list => {
    return list.reduce((acc, num) => acc+num, 0);
  };
  
  const concatenateStringsWithSpaces = list => {
    return list.reduce((acc, string) => acc + string + " ", "");
  };
  
  const squaresAndSubtracts = list => {
    return list
      .map( num => num*num )
      .reduce( (accumulator, num) => accumulator-num );
  };
  
  const myReduce = (list, fn, seed) => {
    let answer = seed;
    for (let i = 0; i < list.length; i++) {
      answer = fn(answer, list[i]);
    }
    return answer;
  };