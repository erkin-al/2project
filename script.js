let myButton = document.getElementById("calculation");
let myStartValue = document.getElementById("startvalue");
let myAddition = document.getElementById("addition");
let myPercent = document.getElementById("percent");
let myTerm = document.getElementById("term");
let wrong = document.getElementById("wrongdata");
myButton.addEventListener("click", check);
function check(){
    let start = myStartValue.value;
    let payment = myAddition.value;
    let rate = myPercent.value;
    let term = myTerm.value;
    let monthly = start + (start * (rate/100) /360 * 30);
   
    if ((start > 0) && (payment > 0) && (rate > 0)  && (rate < 100) && (term >0) && (Number.isInteger(term))) {
            let trueterm = Math.floor(term / 30);
            for( let i= 0; i < trueterm; i++ ){
                let  final= monthly + payment;
                     final += start
                return final;
            }
            console.log(final);
    } else {
        wrong.className = "mistake";
    };
    
}