function getCountryTax(country){

let taxRates = {

bangladesh:25,
thailand:20,
china:18,
india:22,
usa:10,
eu:12,
russia:15

};

return taxRates[country] || 0;

}
