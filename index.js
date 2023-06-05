function bmi(){
    var h=document.getElementById("height").value;
    var w=document.getElementById("weight").value;
    var bmi=w/(h/100*h/100);
    var total=bmi.toFixed(1);
   if(total<18.5){
    document.getElementById("result").innerHTML="your BMI is in underweight range "+total;
   }
   else if(total>=18.5 && total<=24.9){
    document.getElementById("result").innerHTML="your BMI is in healthy-weight range "+total;
   }
   else if(total>=25.0 && total<=29.9){
    document.getElementById("result").innerHTML="your BMI is in overweight range "+total;
   }
   else{
    document.getElementById("result").innerHTML="your BMI is in obese range "+total;
   }

}