'use strict';


const name = document.querySelector(".name");


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

document.querySelector(".btn-primary").addEventListener("click", function(){

   const birth = document.querySelector(".birth").value;

   let score=0;

   if(birth === "abuja" || birth ==="lagos"){
        score = score + 10;

   }else {
       score = 5;
   }

  console.log(`your score is ${score}`);
  console.log(birth);


})









