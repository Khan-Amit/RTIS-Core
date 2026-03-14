function calculate(){

let price = Number(document.getElementById("price").value);
let qty = Number(document.getElementById("qty").value);
let freight = Number(document.getElementById("freight").value);
let insurance = Number(document.getElementById("insurance").value);

let sell = Number(document.getElementById("sell").value);
let sales = Number(document.getElementById("sales").value);

let country = document.getElementById("country").value;

let baseCost = price * qty;

let taxRate = getCountryTax(country);

let taxCost = baseCost * taxRate / 100;

let landingCost = baseCost + freight + insurance + taxCost;

let soldUnits = qty * sales / 100;

let revenue = soldUnits * sell;

let profit = revenue - landingCost;

let pop = (profit / landingCost) * 100;

let tds = (pop + sales) / 2;


document.getElementById("landing").innerHTML =
"Landing Cost: $" + landingCost.toFixed(2);

document.getElementById("profit").innerHTML =
"Profit: $" + profit.toFixed(2);

document.getElementById("pop").innerHTML =
"POP Score: " + pop.toFixed(2) + "%";

document.getElementById("tds").innerHTML =
"TDS Score: " + tds.toFixed(2);

}
