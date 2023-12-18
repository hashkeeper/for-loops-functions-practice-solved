
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  // Your code goes here...
var strArray = [];

if ( array != undefined ) {
  strArray[0] = array[0];
} else if (array == undefined) {
  return strArray;
}

for(var i = 0; i < array.length; i++ ){
    if (array[i].balance >= strArray[0].balance && array[i].balance > 0){
      strArray = [];
      strArray.push(array[i]);
    };
};

return strArray;  
};


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
