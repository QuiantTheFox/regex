const string=`La rupture conventionnelle permet à l\'employeur et 
au salarié en CDI de convenir d\'un commun accord des conditions de 
rupture du contrat de travail qui les lie.`


// uniquement les voyelles
const vowelsLowercase = /[a,e,i,o,u,y]/g
// tout sauf les voyelles
const noVowelsLowercase =/[^a,e,i,o,u,y]/g


console.log(string.match(noVowelsLowercase))