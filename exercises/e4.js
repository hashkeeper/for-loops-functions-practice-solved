// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  // Your code goes here...
    let currentMin = 0;
    for( let i = 0; i < array.length; i++ ) {
        if ( array[i] >= array[i + 1] ){
            continue;
        } else if ( array[i] < array[i + 1]) {
            currentMin = array[i];
        };
    };
    return currentMin;
}

export function findMaxValueInArray(array) {
  // Your code goes here...
    let currentMax = 0;
    for( let i = 0; i < array.length; i++ ) {
        if ( array[i] <= array[i - 1] ) {
            continue;
        } else if ( array[i - 1] < array[i]) {
            currentMax = array[i];
        };
    };
    return currentMax;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
