//decimals logic

const option1 = document.getElementById("option1"),
      option2 = document.getElementById("option2"),
      option3 = document.getElementById("option3"),
      audio1 = document.getElementById("wrongAns");  
      audio2 = document.getElementById("rightAns");  
var answer = 0;

function generate_equation(){ 
  let num1 = parseFloat(Math.random() * 10).toFixed(1),
      num2 = Math.floor(Math.random() * 10),
      dummyAnswer1 = Math.floor(Math.random() * 20),
      dummyAnswer2 = parseFloat(Math.floor(Math.random() * 20)).toFixed(1),

      allAnswers = [],
      switchAnswers = [];

  answer = eval(num1 + num2);
  
  parseInt(document.getElementById("num1").innerHTML = num1); 
  parseInt(document.getElementById("num2").innerHTML = num2); 

  allAnswers = [answer, dummyAnswer1, dummyAnswer2];

  for (i = allAnswers.length; i--;){
    switchAnswers.push(allAnswers.splice((Math.random() * (i + 1)), 1)[0]);
  };

  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2]; 
};

option1.addEventListener("click", function(){
    if(option1.innerHTML == answer){
      audio2.play();
      generate_equation();
    }
    else{
      audio1.play();
    }
});

option2.addEventListener("click", function(){
    if(option2.innerHTML == answer){
      audio2.play();
      generate_equation();
    }
    else{
      audio1.play();
    }
});

option3.addEventListener("click", function(){
    if(option3.innerHTML == answer){
      audio2.play();
      generate_equation();
    }
    else{
      audio1.play();
    }
});

generate_equation()