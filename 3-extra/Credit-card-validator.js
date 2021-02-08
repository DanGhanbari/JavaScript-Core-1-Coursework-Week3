// Here is our main function that checks if the Card Number is valid:
function cardNum(num) {
  if (
    num.toString().length === 16 &&
    typeof num === "number" &&
    num.toString()[15] % 2 === 0 &&
    sumGreaterThan16(num) === true &&
    checkAtleastTwoDigit(num) === true
  ) {
    console.log(num);
    return "valid";
  }
  return "Invalid Credit Card Number";
}
console.log(cardNum(2222222222227222));

//This function checks if sum of the numbers greater than 16 or not:
function sumGreaterThan16(num) {
  const arrSum = num
    .toString(10)
    .split("")
    .map(Number)
    .reduce(function (a, b) {
      return a + b;
    }, 0);
  if (arrSum > 16) {
    return true;
  } else {
    return false;
  }
}
//This function checks if the card number includes at least two different numbers:
function checkAtleastTwoDigit(num) {
  let arrNum = num.toString(10).split("").map(Number);
  for (let i = 0; 1 < arrNum.length; i++) {
    for (let j = 1; j < arrNum.length; j++) {
      if (arrNum[i] !== arrNum[j]) {
        return true;
      }
    }
    return false;
  }
}
