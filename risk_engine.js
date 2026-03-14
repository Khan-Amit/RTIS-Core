function riskAdjustment(baseCost, fuelRisk, delayCost, seasonalRisk){

let fuelImpact = baseCost * fuelRisk / 100;

let seasonalImpact = baseCost * seasonalRisk / 100;

let totalRisk = fuelImpact + delayCost + seasonalImpact;

return totalRisk;

}
