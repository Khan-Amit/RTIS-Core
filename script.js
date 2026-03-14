function searchProduct(){

let input=document.getElementById("searchBox").value.toLowerCase();
let select=document.getElementById("product");

select.innerHTML="<option>Select Product</option>";

for(let p in hsDatabase){

if(p.toLowerCase().includes(input)){

let option=document.createElement("option");
option.value=p;
option.text=p;

select.appendChild(option);

}

}

}



function showHS(){

let product=document.getElementById("product").value;

if(!hsDatabase[product]) return;

document.getElementById("hs").value =
hsDatabase[product].hs;

document.getElementById("marketLow").value =
hsDatabase[product].marketLow;

document.getElementById("marketHigh").value =
hsDatabase[product].marketHigh;

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
