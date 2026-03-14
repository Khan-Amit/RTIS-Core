function getCountryTax(country, hs){

const tariffs = {

bangladesh:{
6109:25,
6203:30,
8517:10,
8471:5,
1006:15
},

thailand:{
6109:20,
6203:25,
8517:7,
8471:0,
1006:10
},

china:{
6109:18,
6203:20,
8517:8,
8471:3,
1006:12
},

india:{
6109:22,
6203:28,
8517:12,
8471:8,
1006:20
},

usa:{
6109:16,
6203:18,
8517:0,
8471:0,
1006:5
},

eu:{
6109:12,
6203:15,
8517:0,
8471:0,
1006:8
},

russia:{
6109:15,
6203:17,
8517:5,
8471:2,
1006:10
}

};

if(tariffs[country] && tariffs[country][hs]){
return tariffs[country][hs];
}

return 10;

}
