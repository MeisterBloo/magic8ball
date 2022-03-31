$(document).ready(function(){
  
    var askZoltar = {};
    askZoltar.listofanswers = [
    "I see a great deal of happiness in store for you.", 
    "You will receive a letter soon, and that letter can easily be said to change the whole course of your life.",
    "You deserve this happiness because you have been so faithful and sincere in your love.",
    "If you wish to continue to be happy, you'll have to learn not to be too trustworthy. Avoid the flatterers and be a little more careful in choosing your friends.",
    "Something you lost will turn up soon.",
    "I've learned never to say never.",
    "Life ahead is timeless fortune.",
    "Common sense is the best fortune-teller.",
    "I have always believed, and I still believe, that whatever good or bad fortune may come our way we can always give it meaning and transform it into something of value.",
    "Little by little, one travels far.",
    "You cannot go back to yesterday, because you were a different person then.",
    "Don't let yesterday take up too much of today.",
    "I never dreamed of success, I worked for it.",
    "Turn your wounds into wisdom."
];
   
    askZoltar.getAnswer = function(question)
    {
      var randomNumber = Math.random();
      var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
      var answer = this.listofanswers[randomAnswer];
      
      $("#answer").text( answer );
      $("#answer").fadeIn(3000);
      $("#8ball").attr("src", "./assets/img/zoltar.jpg");
  
      console.log(question);
      console.log(answer);
    };
    $("#answer").hide();
  
    var onClick = function()
    {
      $("#answer").hide();
      $("#8ball").attr("src", "./assets/img/zoltar.jpg");
      var question = prompt("What would you ask of Zoltar?");
      askZoltar.getAnswer(question);
    };
    
    $("#questionButton").click( onClick );
  });