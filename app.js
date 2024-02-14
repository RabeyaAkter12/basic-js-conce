var nayok = "hero alom";
if (nayok == "hero alom") {
    console.log("marbo ekhane lash porbe barisal a.")
} 
else if(nayok == "anonto") {
    console.log("ami sob pari.")
}
else{
    console.log(" I don't know.")

}

var tamim = 80;

if(tamim > 0){
    if( tamim == 80){
        console.log(" i am a number")
        } 
        else{
            console.log("not a number")
        } 
}
else{
console.log("mark can not be nagetive number")
}

//  0-32 = f grade 
// 43-39 = d grade 
// 40-49 = c grade 
// 50-59 = b grade 
// 60-69 = a- grade 
// 70-79 = a grade 
// 80-89 = a+ grade 
// 90-100 = golden +

var result = 43;

 if(result < 33 && result > 0){
    console.log("tumi fail marco ekhn ricksha chalaw akhn");
 }
 else if(result >= 33 && result < 40){
    console.log("tume d grade paiso")
 }
 else if(result >= 40 && result < 49){
    console.log("tume d grade paiso")
 }
 else if(result >= 33 && result < 40){
    console.log("tume d grade paiso")
 }
 else if(result >= 33 && result < 40){
    console.log("tume d grade paiso")
 }
 else if(result >= 33 && result < 40){
    console.log("tume d grade paiso")
 }
 else if(result >= 33 && result < 40){
    console.log("tume d grade paiso")
 }

 var name = " hero";

 switch(name){
   case "rohim":
      console.log("tume rohim");
      break;
      case "rasel":
         console.log("tume rasel");
         break;
         case "hero":
            console.log("tume hero");
            break;
            default:
               console.log("tume hero noye")
 }


 var numbers = [1, rasel, 2, 5, rokeya,  8,  7, ruberl, 9];

 numbers.push('dhaka')
 console.log(numbers)

 numbers.pop();
 console.log(numbers)

 numbers.shift('dhaka')
 console.log(numbers)

 numbers.unshift('dhaka')
 console.log(numbers)

 for(var i = 0; i < 10; i++){
   console.log(i)
 }

 var friends =["siam", "mim", "rasel", "rokeya", "rubel"];

 for(var i = 0; i <friends.length; i++){
   var element = friends[i]
   console.log(i)
 }

