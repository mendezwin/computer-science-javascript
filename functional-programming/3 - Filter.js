/*

  Filter!
  
  Filter does exactly what it sounds like: it takes a list of items and pares out some of the items you don't need in the list. All you have to do is write a filter function that returns true if you want the item to stay in the list or false if you want it removed from the list. The returned result is a new list with just the items you returned true on.
  
  Test 1
  Name your function filterOutOdds
  Write a function that takes a list and filters out all the odd numbers
  Takes one parameter, a list of numbers
  Returns a list with only the even numbers remaining
  
  Test 2
  Name your function filterState
  Takes two parameters 
    - a list of people objects that have a name and state (as in state where they're from)
    - a string of the state which you want to filter for
  Returns a list of people objects (in the same order) from the state specified
  
  Test 3
  Name your function showOutOfCADevs
  You will need to use map, filter, and reduce (you could skip map by try to use it)
  Takes one parameter, a list of people objects (same from test 3)
  Takes that list, filters out people from CA, pulls out the name strings and throws
    away the rest of the object, uppercases the name of the person, and reduces the
    list down to one string, the names separated by a comma and a space  (", "). Use
    reduce, not join.
  Returns a string of uppercase names, separated by a comma and a space.
  
  Test 4
  Name your function myFilter
  myFilter implements filter
  Takes two parameters:
    - A list that will be filtered
    - A function that returns true if the item stays in the list, or false if it removed
  Returns a list that has been filtered

*/

const filterOutOdds = nums => nums.filter( num => num % 2 === 0);

const filterState = (list, state) => list.filter( person => person.state === state );

const showOutOfCADevs = list => {
  return list
    .filter( person => person.state !== 'CA')
    .map( person => person.name.toUpperCase() )
    .reduce( (acc, name) => `${acc}, ${name}` );
};

const myFilter = (list, fn) => {
  const answer = [];
  for (let i = 0; i < list.length; i++) {
    if (fn(list[i])) {
      answer.push(list[i]);
    }
  }
  return answer;
};
