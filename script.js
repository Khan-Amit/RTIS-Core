window.onload = function(){

let categorySelect = document.getElementById("category");

for(let category in hsDatabase){

let option = document.createElement("option");
option.value = category;
option.textContent = category;

categorySelect.appendChild(option);

}

};



function loadProducts(){

let category = document.getElementById("category").value;
let productSelect = document.getElementById("product");

productSelect.innerHTML = "<option>Select Product</option>";

let products = hsDatabase[category];

for(let product in products){

let option = document.createElement("option");
option.value = product;
option.textContent = product;

productSelect.appendChild(option);

}

}



function showHS(){

let category = document.getElementById("category").value;
let product = document.getElementById("product").value;

let data = hsDatabase[category][product];

document.getElementById("hs").value = data.hs;
document.getElementById("marketLow").value = data.marketLow;
document.getElementById("marketHigh").value = data.marketHigh;

}



function calculate(){

let price = Number(document.getElementById("price").value);
let qty = Number(document.getElementById("qty").value);
let freight = Number(document.getElementById("freight").value);
let insurance = Number(document.getElementById("insurance").value);

let sell = Number(document.getElementById("sell").value);
let sales = Number(document.getElementById("sales").value);

let country = document.getElementById("country").value;
let hs = document.getElementById("hs").value;


let baseCost = price * qty;

let taxRate = getCountryTax(country, hs);

let taxCost = baseCost * taxRate / 100;

let landingCost = baseCost + freight + insurance + taxCost;

let unitsSold = qty * sales / 100;

let revenue = unitsSold * sell;

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
