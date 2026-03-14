function profitSimulation(qty, sell, sales, landingCost){

let soldUnits = qty * (sales / 100);

let revenue = soldUnits * sell;

let profit = revenue - landingCost;

return profit;

}
