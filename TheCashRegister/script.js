var cantaloupeprice = 3.50;
var mangoprice = 1.50;
var appleprice = 1.25;
var lemonprice = 1.10;
var orangeprice = 1.20;
var papayaprice = 10.00;
var grapefruitprice = 1.50;


function cashRegister() {
  var cqty = document.getElementById("cantaloupeqty").value;
  var mqty = document.getElementById("mangoqty").value;
  var aqty = document.getElementById("appleqty").value;
  var lqty = document.getElementById("lemonqty").value;
  var oqty = document.getElementById("orangeqty").value;
  var pqty = document.getElementById("papayaqty").value;
  var gqty = document.getElementById("grapefruitqty").value;

//add as above
//  var aqty = document.getElementById("appleqty").value;
//  var lqty = document.getElementById("lemonqty").value;

  var grandTotal = (cantaloupeprice*cqty) + (mangoprice*mqty) + (appleprice*aqty) + (lemonprice*lqty) + (orangeprice*oqty) + (papayaprice*pqty) + (grapefruitprice*gqty);


  document.getElementById("cantaloupetotal").innerHTML="$" + parseFloat(cantaloupeprice*cqty);
  document.getElementById("mangototal").innerHTML="$" + parseFloat(mangoprice*mqty);
  document.getElementById("appletotal").innerHTML="$" + parseFloat(appleprice*aqty);
  document.getElementById("lemontotal").innerHTML="$" + parseFloat(lemonprice*lqty);
  document.getElementById("orangetotal").innerHTML="$" + parseFloat(orangeprice*oqty);
  document.getElementById("papayatotal").innerHTML="$" + parseFloat(papayaprice*pqty);
  document.getElementById("grapefruittotal").innerHTML="$" + parseFloat(grapefruitprice*gqty);

  document.getElementById('grandTotal').innerHTML = grandTotal;

}
