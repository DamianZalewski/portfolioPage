let heightInput = document.getElementsByName("heightInput")[0];
let weightInput = document.getElementsByName("weightInput")[0];
let genderInput = document.getElementsByName("genderInput");

let heightValue = document.getElementById("heightValue");
let weightValue = document.getElementById("weightValue");
let bmiValueInput = document.getElementById("bmiValue");
let bmiStatusInput = document.getElementById("bmiStatus");
let bodyImageDiv = document.getElementById("bodyImage");

let bmiValue = 0;
let bmiText = "";

changeHeightValue = () => {
    heightValue.innerHTML = heightInput.value + " cm";
}

changeWeightValue = () => {
    weightValue.innerHTML = weightInput.value + " kg";
}

calculateBMI = (e) => {
    bmiValue = weightInput.value / Math.pow(heightInput.value/100,2);
    if(bmiValue < 18.5) bmiText = "Underweight"; else
    if(bmiValue >= 18.5 && bmiValue < 25) bmiText = "Normal weight"; else
    if(bmiValue >= 25 && bmiValue < 30) bmiText = "Overweight"; else
    if(bmiValue >= 30) bmiText = "Obesity";
    bmiValueInput.value = Math.floor(bmiValue);
    bmiStatusInput.value = bmiText;
    
    bodyImageDiv.innerHTML = "<img width='60%' src='"+checkBodyImage()+"' alt='body image' />";
}

checkBodyImage = () => {
    console.log(genderInput[1].checked);
    let pic = genderInput[0].checked ? "m" : "f"; 
    if(bmiValue < 19) { pic += "1"; } else
    if(bmiValue >=19 && bmiValue < 22) { pic += "2"; } else  
    if(bmiValue >=22 && bmiValue < 24) { pic += "3"; } else  
    if(bmiValue >=24 && bmiValue < 26) { pic += "4"; } else  
    if(bmiValue >=26 && bmiValue < 29) { pic += "5"; } else  
    if(bmiValue >=29 && bmiValue < 33) { pic += "6"; } else  
    if(bmiValue >=33 && bmiValue < 37) { pic += "7"; } else  
    if(bmiValue >=37 && bmiValue < 40) { pic += "8"; } else  
    if(bmiValue >=40) { pic += "9"; };
    
    return "assets/"+pic+".jpg";
}

changeHeightValue();
changeWeightValue();