/*
  Map
  
  Map is a method on the array prototype in JavaScript. It takes one (required)
  parameter: the function you want called on each element in the array. While you
  can make these functions, I'd recommend making them named and thus resuseable.

  var array = [1,2,3,4,5];
  var transformed = array.map(function(num) { return num+1 });
  console.log(transformed); // [2,3,4,5,6]
  
  Test 1
  Make a function named doubleEach. doubleEach takes in an array and returns an
  array where every element in the array is doubled. Do not use a loop.
  
  Test 2
  Make a function named squareEach. squareEach takes in an array and returns an
  array where every element in the array is squared. Do not use a loop.
  
  Test 3
  Make a function named doubleAndSquareEach. If you made your other functions
  composeable, you can reuse them here. Return an array where each element
  is doubled first and then squared. Do not use a loop.
  
  Test 4
  Make a function named myMap. myMap is going to simulate the behavior of the
  map method on the Array prototype. myMap takes two parameters: the array being
  mapped over, and the function being called on each element. You must use a loop
  in myMap. myMap returns the resulting array of calling the inputted function on 
  each value in the array.


*/
const double = num => 2*num;
const doubleEach = input => input.map( double );

const square = num => num*num;
const squareEach = input => input.map( square );

const doubleAndSquareEach = input => input.map(double).map(square);

const myMap = (array, fn) => {
  const answer = [];
  for (let i = 0; i < array.length; i++) {
    answer.push(fn(array[i]));
  }
  return answer;
};