'use strict';

const enter = document.querySelector('.enter').value;
const nam = document.querySelector(".name");



const popname= document.querySelector(".popupname");

const popup = document.querySelector(".popup");

const popups = document.getElementById("myPopup");


const names = []

// Oh yes button
document.querySelector(".ohYes").addEventListener("click", function(){

    const enter = document.querySelector('.enter').value;

    if(enter === "") { alert("name cannot be empty")

    } else{

    const nam = document.querySelector(".name");
   nam.textContent = enter;

   document.querySelector(".main").style.opacity = 100;

   document.querySelector(".first-pop-up").style.opacity = 0;

   names.push(enter);

   console.log(names);
   

    }
})


// btn-primary

const click =document.querySelector(".btn-primary").addEventListener("click", function(e){

  
popname.textContent = names[0];


  e.preventDefault();
  const birth = document.querySelector(".birth").value;
  const age = document.querySelector('.age').value;
  const acct = document.querySelector('.acct').value;
  const destination = document.querySelector('.destination').value;

  const checkedPolitician= document.querySelector('input[type = radio ]:checked').value;
  const educationLevel = document.getElementById("education").value;

  const marital = document.getElementById("marital").value;

  const checkedPassport = document.querySelector('input[name = passport]:checked').value;

  const employment = document.getElementById("employment").value;

   


  //employment
let employmentScore = 0;

const employFunction = function(){
  if(employment === "employed"){
    employmentScore = employmentScore + 10
  } else if( employment==="unemployed"){
    employmentScore = employmentScore + 5
  }
  return employmentScore;
}

console.log( employFunction(employment));


  //passport
  let passportScore = 0;

  const passportFunction = function(){
    if(checkedPassport=== "nopassport"){
      passportScore = passportScore + 5;
    } else if(checkedPassport === "passport"){
      passportScore = passportScore + 15;
    }
    else{
      passportScore = passportScore + 0;
    }
    return passportScore;
  }
   console.log( passportFunction(checkedPassport));

// // marital
let maritalScore =0;
 const maritalFunction = function(){
   if(marital==="single"){
     maritalScore = maritalScore + 5;
   } else if(marital === "married"){
     maritalScore = maritalScore +10
   }
   return maritalScore;
 }
 console.log( maritalFunction(marital));


// // education 

let eduScore = 0;
function chainToSwitchs(vals) {
  var answer = educationLevel;
  // Only change code below this line

  switch (vals) {
    case "schoolcert":
      answer = 2;
      break;
    case "bachelors":
      answer = 6;
      break;
    case "masters":
      answer = 8;
      break;
    case "phd":
      answer = 10;
      break;
    case "drop-out":
      answer = 0;
      break;
      
  }
  

  // Only change code above this line
 eduScore = eduScore + answer;
   return answer;

}
console.log( chainToSwitchs(educationLevel));



  


//   //Politican
let politicianScore = 0;
const politicianFunc = function(){
  if (checkedPolitician === "no") {politicianScore = politicianScore + 0; }else {politicianScore = politicianScore + 10;}

  return politicianScore;
}
console.log( politicianFunc(checkedPolitician));


  // //age
  let agescore = 0;
  const ageFunc = function(){
    if(age <= 23 || age > 50) {
      
       agescore = agescore + 10;
    } else if (age > 23  && age < 50){
      agescore = agescore + 5;
    }
    else{
      agescore = agescore +0;
    }
    return agescore;
  }
  console.log( ageFunc(age));

  // // acctbalance
  let acctscore = 0;
  const balance = function(){
    if(acct >= 1000000) {
      
       acctscore = acctscore + 15;
    } else if (acct >= 500000 &&  acct < 1000000 ){
      acctscore = acctscore + 10;
    } else {
      acctscore = acctscore +5
    }
    return acctscore;
    
  }
  console.log( balance(acct));
  // //Birthplace
  let birthscore = 0;
   const placeOfBirth = function(str){
     if(str=== 'lagos' || str === 'abuja'){
       
        birthscore = birthscore + 10;
     } else {
       birthscore = birthscore + 5;
     }
     return birthscore
   }
   console.log( placeOfBirth(birth));

//    //travel
   let travelScore = 0;
function chainToSwitch(val) {
  var answer = destination;
  // Only change code below this line

  switch (val) {
    case "usa":
      answer = 5;
      break;
    case "uk":
      answer = 5;
      break;
    case "usa":
      answer = 5;
      break;
    case "canada":
      answer = 5;
      break;
    case "germany":
      answer = 5;
      break;
      case destination:
        answer = 10;
        break;
  }

  // Only change code above this line
 travelScore = travelScore+ answer;
   return answer;

}

// Change this value to test
console.log( chainToSwitch(destination));

  //total score

   const totalScore = birthscore + agescore + acctscore + travelScore + politicianScore + eduScore + maritalScore + passportScore + employmentScore;

   if (totalScore >= 85){
    document.getElementById("image").src = "/docs/dispensation.png";
   } else if(totalScore >65 ){
    document.getElementById("image").src = "/docs/comrade.jpg";

   } else if(totalScore< 65){
    document.getElementById("image").src = "/docs/sabinus.jpg";

   }

  const popscore = document.querySelector(".popscore");
  popscore.textContent = totalScore;

  //pop up 
   

  popups.classList.toggle("show");

})


  



   
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' || e.key=== 'Enter' && !popup.classList.contains('hidden')) {
    popup.classList.add("hidden");
  }
});

const close = document.querySelector(".close").addEventListener("click", function(){

  popup.classList.add("hidden");


}
)






