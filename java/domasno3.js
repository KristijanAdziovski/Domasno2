var broj1= parseInt( prompt("Vnesete go prviot broj"));
var broj2= parseInt( prompt("Vnesete go vtoriot broj"));
var broj3= parseInt( prompt("Vnesete go tretiot broj"));
var broj4= parseInt( prompt("Vnesete go cetvrtiot broj"));
var broj5= parseInt( prompt("Vnesete go petiot broj"));
if(broj1>broj2 && broj1>broj3 && broj1>broj4 && broj1>broj5){
    console.log(`Brojot ${broj1} e najgolemiot vnesen broj`)
}
else if(broj2>broj1 && broj2>broj3 && broj2>broj4 && broj2>broj5){
    console.log(`Brojot ${broj2} e najgolemiot vnesen broj`)
}
else if(broj3>broj1 && broj3>broj2 && broj3>broj4 && broj3>broj5){
    console.log(`Brojot ${broj3} e najgolemiot vnesen broj`)
}
else if(broj4>broj1 && broj4>broj2 && broj4>broj3 && broj4>broj5){
    console.log(`Brojot ${broj4} e najgolemiot vnesen broj`)
}
else if(broj5>broj1 && broj5>broj2 && broj5>broj3 && broj5>broj4){
    console.log(`Brojot ${broj5} e najgolemiot vnesen broj`)
}
else{
    console.log("Imate vneseno 2 isti najgolemi broja")
}