var person = {
      name:"sethu",
      age:20,
      gender:"male"
}
console.log(person);

// uber price calculator
function uberprice(km){

 if(km <= 10 ){
    return km * 10 ;
 }else if(km > 10 && km <= 20){
    return km * 15 ;
 }else if(km > 20 && km <= 30){
    return km * 20 ;
 }else {
    return km * 30;
 }



}
//enter your km count in uberprice(km) on this parameter
console.log("your charges are: ",uberprice(30));