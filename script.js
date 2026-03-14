function loadProducts(){

let category = document.getElementById("category").value;
let productSelect = document.getElementById("product");

productSelect.innerHTML = "<option>Select Product</option>";

if(!categories[category]) return;

categories[category].forEach(function(p){

let option = document.createElement("option");
option.value = p;
option.text = p;

productSelect.appendChild(option);

});

}


function showHS(){

let product = document.getElementById("product").value;

if(!hsDatabase[product]){
console.log("Product not found:",product);
return;
}

document.getElementById("hs").value =
hsDatabase[product].hs;

document.getElementById("marketLow").value =
hsDatabase[product].marketLow;

document.getElementById("marketHigh").value =
hsDatabase[product].marketHigh;

}
