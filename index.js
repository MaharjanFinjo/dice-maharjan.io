var randomNumber1 = Math.floor(Math.random() * 6)+1;
document.querySelector(".dice .img1").setAttribute("src","images/dice"+randomNumber1+".png")

var randomNumber2 = Math.floor(Math.random() * 6)+1;
document.querySelector(".dice .img2").setAttribute("src","images/dice"+randomNumber2+".png")

//var x = document.querySelector(".container h1");
if(randomNumber1>randomNumber2){
  document.querySelector(".container h1").innerHTML=("player1 wins!(勝ちだよ)");
}
else if(randomNumber1<randomNumber2){
  document.querySelector(".container h1").innerHTML=("player2 wins!(勝ちだよ)");
}
else{
  document.querySelector(".container h1").innerHTML=("Draw!(引き分け)");
}
