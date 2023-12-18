
// EXERCISE 9
// Return an array of bank accounts with balance over $100
// Array example: bankAccounts in /data/data.js
// getClientsWithBalanceOverOneHundred(array) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithBalanceOverOneHundred(array) {
  // Your code goes here...
  var strArray = [];

  if(array[0] != undefined){
    strArray[0] = array[0];
  } else if (array == undefined ) {
    return strArray;
  };

  for(var i = 0; i < array.length; i++) {
    var accountBalanceFloat = parseFloat(array[i].balance);
    if(accountBalanceFloat >= 101.00) {
      strArray.push(array[i]);
      continue;
    } else if (accountBalanceFloat < 101.0){
      continue;
    }
  }

  return strArray;
 }



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-9"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
