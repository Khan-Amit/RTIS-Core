function getCountryTax(country){

const taxTable = {

bangladesh:25,
thailand:20,
china:18,
india:22,
usa:10,
eu:21,
russia:20

};

return taxTable[country] || 15;

}
