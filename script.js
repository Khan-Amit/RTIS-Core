function calculate(){

let price = Number(document.getElementById("price").value) || 0;
let qty = Number(document.getElementById("qty").value) || 0;
let freight = Number(document.getElementById("freight").value) || 0;
let insurance = Number(document.getElementById("insurance").value) || 0;

let sell = Number(document.getElementById("sell").value) || 0;
let sales = Number(document.getElementById("sales").value) || 0;

let country = document.getElementById("country").value;

let baseCost = price * qty;

let taxRate = getCountryTax(country);

let taxCost = baseCost * taxRate / 100;

let landingCost = baseCost + freight + insurance + taxCost;

let soldUnits = qty * (sales / 100);

let revenue = soldUnits * sell;

let profit = revenue - landingCost;

let pop = 0;
let tds = 0;

if(landingCost > 0){

pop = (profit / landingCost) * 100;
tds = (pop + sales) / 2;

}

document.getElementById("landing").innerHTML =
"Landing Cost: $" + landingCost.toFixed(2);

document.getElementById("profit").innerHTML =
"Profit: $" + profit.toFixed(2);

document.getElementById("pop").innerHTML =
"POP Score: " + pop.toFixed(2) + "%";

document.getElementById("tds").innerHTML =
"TDS Score: " + tds.toFixed(2);

}
