var godina = prompt("Enter your year of birth");
var zodiag = ( godina - 4) % 12;
if(zodiag==0){
    console.log("You are Rat")
}
else if(zodiag==1){
    console.log("You are Ox")
}
else if(zodiag==2){
    console.log("You are Tiger")
}
else if(zodiag==3){
    console.log("You are Rabbit")
}
else if (zodiag==4){
    console.log("You are Dragon")
}
else if(zodiag==5)
{
    console.log("You are Snake")
}
else if(zodiag==6){
    console.log("You are Horse")
}
else if(zodiag==7){
    console.log("You are Goat")
}
else if(zodiag==8){
    console.log("You are Monkey")
}
else if(zodiag==9){
    console.log("You are Rooster")
}
else if(zodiag==10){
    console.log("You are Dog")
}
else  {
    console.log("You are Pig")
}
