/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter (moneyamount) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels= 0;
  coinPurse.pennies= 0;
//argument passed in and set to variable
var startingAmount = 0;
   startingAmount = moneyamount*100;
  for (i = 0; i < 100 ; i++){
    if (startingAmount >= 25){
      coinPurse.quarters += 1;
      startingAmount -= 25;



    }else if (startingAmount >= 10){
        coinPurse.dimes += 1;
        startingAmount -= 10;

    }else if (startingAmount >= 5){
      coinPurse.nickels += 1;
      startingAmount -= 5;

    }else if (startingAmount >= 1){
      coinPurse.pennies += 1;
      startingAmount -= 1;
    }

  }
  return coinPurse;
}

var coins = coinCounter()
console.log(coins);



