
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
    let strArray = [];
    let name = '';
    let balan = '';
    let depos = 0; 
    let withd = 0;
    let dwDiff = 0;

    for( let i = 0; i < array.length; i++ ) {
      name = array[i].name;
      balan = array[i].balance;
      depos = 0; 
      withd = 0;
  
      if(array[i].deposits == undefined || array[i].withdrawals == undefined){
        continue;
      } else if (array[i].deposits == NaN) {
        depos += 0;
      } else if (array[i].withdrawals == NaN) {
        withd += 0;
      } else {

      for( let j = 0; j < array[i].deposits.length; j++){
        depos += array[i].deposits[j];
      };
  
      for( let k = 0; k < array[i].withdrawals.length; k++){
        withd += array[i].withdrawals[k];
      };
  
      dwDiff = depos - withd;
      if ( dwDiff != balan ) {
        strArray.push(array[i]);
      }};
    };
    return strArray;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
