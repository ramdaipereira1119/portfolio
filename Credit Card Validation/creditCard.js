function validateCreditCard(ccnum) {
  var cardno = /^(?:3[47][0-9]{13})$/;
  if(currentNum.value.match(cardno))
        {
      return true;
        }
      else
        {
        alert("Not a valid credit card number!");
        return false;
        }
}
validateCreditCard();

//digits=numbers
for (var i = 0; i < ccnum.length; i++) {
  var currentNum = ccnum[i]
  alert("Valid Credit Card Number")
  }

function validateCreditCard(ccnum) {
  var no=document.getElementById('ccnum').value;

if(no=="")
alert("Please enter credit card number!");
}

var obj = {
  for (var i = 0; i < ccnum.length; i++) {

  }
}

function cardnumber(inputtxt)
{
  var ccnum = /^(?:5[1-5][0-9]{14})$/;
  if(inputtxt.value.match(ccnum))
        {
      return true;
        }
      else
        {
        alert("Not a valid number!");
        return false;
        }
}
