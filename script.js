// PRODUCT SEARCH

function searchProduct(){

let input = document.getElementById("searchBox").value.toLowerCase();
let dropdown = document.getElementById("product");

dropdown.innerHTML = "<option value=''>Select Product</option>";

for (let key in hsDatabase){

if(key.toLowerCase().includes(input)){

let option = document.createElement("option");
option.value = key;
option.textContent = key;

dropdown.appendChild(option);

}

}

}



// SHOW HS CODE + MARKET SIZE

function showHS(){

let product = document.getElementById("product").value;

if(product === "" || !hsDatabase[product]){
return;
}

let data = hsDatabase[product];

document.getElementById("hs").value = data.hs;
document.getElementById("marketLow").value = data.marketLow;
document.getElementById("marketHigh").value = data.marketHigh;

}



// TRADE CALCULATION

function calculate(){

let product = document.getElementById("product").value;

if(product === ""){
alert("Select a product first");
return;
}

let hs = document.getElementById("hs").value;
let country = document.getElementById("country").value;

let price = Number(document.getElementById("price").value);
let qty = Number(document.getElementById("qty").value);
let freight = Number(document.getElementById("freight").value);
let insurance = Number(document.getElementById("insurance").value);

let sell = Number(document.getElementById("sell").value);
let sales = Number(document.getElementById("sales").value);


// BASE COST

let productCost = price * qty;


// TAX FROM ENGINE

let taxRate = getCountryTax(country, hs);

let taxCost = productCost * taxRate / 100;


// LANDING COST

let landingCost = productCost + freight + insurance + taxCost;


// SALES

let unitsSold = qty * sales / 100;

let revenue = unitsSold * sell;


// PROFIT

let profit = revenue - landingCost;


// POP

let pop = (profit / landingCost) * 100;


// TDS

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
