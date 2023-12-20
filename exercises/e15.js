

// EXERCISE 15
// Please, read the exercise-info/concat.md to get the initial data of what is the expected result of this exercise.
// concatArrays(['d', 'r', 'a'], ['f', 'y']) => ['d', 'r', 'a', 'f', 'y']
// NOTE: You can NOT use the array.concat() method in your code

export function concatArrays(arr1, arr2) {
  // Your code goes here...
  let fullLength = arr1.length + arr2.length; 
  let strArray00 = [];
  let strArray01 = [];
  strArray00.push(arr1); 
  strArray00.push(arr2); 
  
  for(let i = 0; i < strArray00.length; i++) {
    for(let j = 0; j < strArray00[i].length; j++) {
      strArray01.push(strArray00[i][j]);
    };
  };
  return strArray01;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-15"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
