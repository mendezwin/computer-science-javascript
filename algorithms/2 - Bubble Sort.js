/*
  Write a bubble sort here
  Name the function bubbleSort
  
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
  
  
*/

var bubbleSort = nums => {  
    do {
      var swapped = false;
      for (var i = 0; i < nums.length; i++) {

        if (nums[i] > nums[i+1]) {
          var temp = nums[i];
          nums[i] = nums[i+1];
          nums[i+1] = temp;
          swapped = true;
        }
        
      }
    } while(swapped);
    
  };