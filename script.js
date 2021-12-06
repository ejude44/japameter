'use strict';

const enter = document.querySelector('.enter').value;
const name = document.querySelector(".name");

const popup = document.querySelector(".popup");



// Oh yes button
document.querySelector(".ohYes").addEventListener("click", function(){

    const enter = document.querySelector('.enter').value;

    if(enter === "") { alert("name cannot be empty")

    } else{

    const name = document.querySelector(".name");
   name.textContent = enter;

   document.querySelector(".main").style.opacity = 100;

   document.querySelector(".first-pop-up").style.opacity = 0;
   

    }
})


// btn-primary

const click =document.querySelector(".btn-primary").addEventListener("click", function(){

   const birth = document.querySelector(".birth").value;

   let score=0;

   if(birth === "abuja" || birth ==="lagos"){
        score = score + 10;

   }else {
       score = 5;
   }

   const names = [];


   //pop up function
   
    const popup = document.getElementById("myPopup");
    popup.classList.toggle("show");

 


  
  const popscore = document.querySelector(".popscore");
  popscore.textContent = score;


})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' || e.key=== 'Enter' && !popup.classList.contains('hidden')) {
    popup.classList.add("hidden");
  }
});












