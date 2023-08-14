// let player1speedincrementer=0.01

// let player2speedincrementer=0.02
// let player3speedincrementer=0.03
// let player4speedincrementer=0.04
// let player5speedincrementer=0.05
// let player6speedincrementer=0.06
// let player7speedincrementer=0.07

// let player8speedincrementer=0.08
// let player9speedincrementer=0.09
// let player10speedincrementer=0.1
// let player12speedincrementer=0.12
// let player13speedincrementer=0.13
// let player14speedincrementer=0.14
// let player15speedincrementer=0.15
// let player16speedincrementer=0.16
// let player17speedincrementer=0.17
// let player18speedincrementer=0.18
// let player19speedincrementer=0.19
// let player20speedincrementer=0.20
// let player21speedincrementer=0.21
// let k=0
// setInterval(()=>{
// k++
// player1speedincrementer+=0.5
// player2speedincrementer+=0.2
// player3speedincrementer+=0.3
// player4speedincrementer+=0.4
// player5speedincrementer+=0.55
// player6speedincrementer+=0.06
// player7speedincrementer+=0.07

// player8speedincrementer+=0.08
// player9speedincrementer+=0.09
// player10speedincrementer+=0.1
// player12speedincrementer+=0.12
// player13speedincrementer+=0.13
// player14speedincrementer+=0.14
// player15speedincrementer+=0.15
// player16speedincrementer+=0.16
// player17speedincrementer+=0.17
// player18speedincrementer+=0.18
// player19speedincrementer+=0.19
// player20speedincrementer+=0.20
// player21speedincrementer+=0.21
// if(k>800){

//     player1speedincrementer-=0.5

// }

// },10)

window.addEventListener("load",()=>{

    alert("avoid any touch from the enemies by moving player left with left key and right with right key!!")
})

let y1 = 0;
setInterval(()=>{

    y1 += 1;
  
    if (y1 > 450) {
      y1 = 0;

    }
}, 5);

let y2 = 0;
setInterval(()=>{

    y2 += 1;
  
    if (y2 > 450) {
      y2 = 0;

    }
}, 15);

let y3 = 0;
setInterval(()=>{

    y3 += 1;
  
    if (y3 > 450) {
      y3 = 0;

    }
}, 10);

let y4 = 0;
setInterval(()=>{

    y4 += 1;
  
    if (y4 > 450) {
      y4 = 0;

    }
}, 7);

let y5 = 0;
setInterval(()=>{

    y5 += 1;
  
    if (y5 > 450) {
      y5 = 0;

    }
}, 4);

let y6 = 0;
setInterval(()=>{

    y6 += 1;
  
    if (y6 > 450) {
      y6 = 0;

    }
}, 1);

let y7 = 0;
setInterval(()=>{

    y7 += 1;
  
    if (y7 > 450) {
      y7 = 0;

    }
}, 14);

let y8 = 0;
setInterval(()=>{

    y8 += 1;
  
    if (y8 > 450) {
      y8 = 0;

    }
}, 20);

let y9 = 0;
setInterval(()=>{

    y9 += 1;
  
    if (y9 > 450) {
      y9 = 0;

    }
}, 22);

let y10 = 0;
setInterval(()=>{

    y10 += 1;
  
    if (y10 > 450) {
      y10 = 0;

    }
}, 2);

let y11 = 0;
setInterval(()=>{

    y11 += 1;
  
    if (y11 > 450) {
      y11 = 0;

    }
}, 12);

let y12 = 0;
setInterval(()=>{

    y12 += 1;
  
    if (y12 > 450) {
      y12 = 0;

    }
}, 19);

let y13 = 0;
setInterval(()=>{

    y13 += 1;
  
    if (y13 > 450) {
      y13 = 0;

    }
}, 23);

let y14 = 0;
setInterval(()=>{

    y14 += 1;
  
    if (y14 > 450) {
      y14 = 0;

    }
}, 26);

let y15 = 0;
setInterval(()=>{

    y15 += 1;
  
    if (y15 > 450) {
      y15 = 0;

    }
}, 25);

let y16 = 0;
setInterval(()=>{

    y16 += 1;
  
    if (y16 > 450) {
      y16 = 0;

    }
}, 23);

let y17 = 0;
setInterval(()=>{

    y17 += 1;
  
    if (y17 > 450) {
      y17 = 0;

    }
}, 4);

let y18 = 0;
setInterval(()=>{

    y18 += 1;
  
    if (y18 > 450) {
      y18 = 0;

    }
}, 27);

let y19 = 0;
setInterval(()=>{

    y19 += 1;
  
    if (y19 > 450) {
      y19 = 0;

    }
}, 16);

let y20 = 0;
setInterval(()=>{

    y20 += 1;
  
    if (y20 > 450) {
      y20 = 0;

    }
}, 27);






let canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext("2d");

console.log(canvas.width);

let box = document.getElementById("showScore");

let image = new Image();

image.src =
  "https://tse2.mm.bing.net/th?id=OIP.EDMfJ5cFQnLsIL5_0uYA_wHaEK&pid=Api&P=0&h=180";

let playerImage = new Image();

playerImage.src =
  "https://tse3.mm.bing.net/th?id=OIP.16yA-HSH3l6iynCTJEJSFQHaHa&pid=Api&P=0&h=180";



let enemyarr = [];

for (let i = 0; i <= 20; i++) {
  const enemy = {
    x: i * 70,
  };

  enemyarr.push(enemy);
}

// function enemy(x,y){
let imageEnemy = new Image();
imageEnemy.src =
  "https://tse1.mm.bing.net/th?id=OIP.uNw4uVz1vYUiIpwcv8gxnwHaJC&pid=Api&P=0&h=180";

let speed = 0;

let acceleration = 0.0001;

let player = {
  x: 300,
};

window.addEventListener("keydown", (e) => {

  if (e.key === "ArrowLeft") {
    

    player.x -= 8;

    if(player.x<0){

        player.x=0
    }
  }

  if (e.key === "ArrowRight") {
    player.x += 8;

    if(player.x+40>canvas.width){

        (player.x)=canvas.width-40
    }
  }
});

//console.log(player.x);

let score = 0;

let gameover = false;

let interval = setInterval(() => {
  score++;
}, 500);

let imageNavbar1 = new Image();

imageNavbar1.src =
  "https://tse1.mm.bing.net/th?id=OIP.v_y_SOANkb1ho3WK6LHbqgHaEK&pid=Api&rs=1&c=1&qlt=95&w=184&h=103";

let animationID;

function animate() {
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  context.drawImage(imageNavbar1, 0, 0, canvas.width, 80);

  context.drawImage(playerImage, player.x, 490, 40, 40);
  context.fillStyle = "yellow";
  context.font = "40px monospace";

  context.fillText("GAME-MANIA", 700, 50, 200);

  context.fillStyle = "WHITE";
  context.font = "20px monospace";

  context.fillText(`SCORE:${score}`, 1300, 50, 200);

 //enemeis
 
 //enemy end here 

  animationID = requestAnimationFrame(animate);

  enemy1()
  enemy2()
  enemy3()
  enemy4()
  enemy5()
  enemy6()
  enemy7()
  enemy8()
  enemy9()
  enemy10()
  enemy11()
  enemy12()
  enemy13()
  enemy14()
  enemy15()
  enemy16()
  enemy17()
  enemy18()
  enemy19()
  enemy20()
  enemy21()
}

animate();



function enemy1(){

    context.drawImage(imageEnemy, enemyarr[0].x, 80 + y1, 40, 40);

    if(Math.abs(enemyarr[0].x-player.x)<=40&&Math.abs(80+y1-530)<=40){
      gameoverresults()
      cancelAnimationFrame(animationID)

      gameover=true
        
    }
}

function enemy2(){

    context.drawImage(imageEnemy, enemyarr[1].x, 80 + y2, 40, 40);

    if(Math.abs(enemyarr[1].x-player.x)<=40&&Math.abs(80+y2-530)<=40){
      gameoverresults()
      cancelAnimationFrame(animationID)
        
    }
}

function enemy3(){

    context.drawImage(imageEnemy, enemyarr[2].x, 80 + y3, 40, 40);

    if(Math.abs(enemyarr[2].x-player.x)<=40&&Math.abs(80+y3-530)<=40){
      gameoverresults()
      cancelAnimationFrame(animationID)
       gameover=true 
    }
}

function enemy4(){

    context.drawImage(imageEnemy, enemyarr[3].x, 80 + y4, 40, 40);

    if(Math.abs(enemyarr[3].x-player.x)<=40&&Math.abs(80+y4-530)<=40){
      gameoverresults()
      cancelAnimationFrame(animationID)
       gameover=true 
    }
}

function enemy5(){

    context.drawImage(imageEnemy, enemyarr[4].x, 80 + y5, 40, 40);

    if(Math.abs(enemyarr[4].x-player.x)<=40&&Math.abs(80+y5-530)<=40){
      gameoverresults()
      cancelAnimationFrame(animationID)
        gameover=true
    }
}

function enemy6(){

    context.drawImage(imageEnemy, enemyarr[5].x, 80 + y6, 40, 40);

    if(Math.abs(enemyarr[5].x-player.x)<=40&&Math.abs(80+y6-530)<=40){
      gameoverresults()
      cancelAnimationFrame(animationID)
       gameover=true 
    }
}

function enemy7(){

    context.drawImage(imageEnemy, enemyarr[6].x, 80 + y7, 40, 40);

    if(Math.abs(enemyarr[6].x-player.x)<=40&&Math.abs(80+y7-530)<=40){
      gameoverresults()
      cancelAnimationFrame(animationID)
      gameover=true  
    }
}

function enemy8(){

    context.drawImage(imageEnemy, enemyarr[7].x, 80 + y8, 40, 40);

    if(Math.abs(enemyarr[7].x-player.x)<=40&&Math.abs(80+y8-530)<=40){
      
      cancelAnimationFrame(animationID)
      gameover=true  
    }
}

function enemy9(){

    context.drawImage(imageEnemy, enemyarr[8].x, 80 + y9, 40, 40);

    if(Math.abs(enemyarr[8].x-player.x)<=40&&Math.abs(80+y9-530)<=40){
      gameoverresults()
      cancelAnimationFrame(animationID)
       gameover=true 
    }
}

function enemy10(){

    context.drawImage(imageEnemy, enemyarr[9].x, 80 + y10, 40, 40);

    if(Math.abs(enemyarr[9].x-player.x)<=40&&Math.abs(80+y10-530)<=40){
      gameoverresults()
      cancelAnimationFrame(animationID)
      gameover=true  
    }
}

function enemy11(){

    context.drawImage(imageEnemy, enemyarr[10].x, 80 + y11, 40, 40);

    if(Math.abs(enemyarr[10].x-player.x)<=40&&Math.abs(80+y11-530)<=40){
      
      cancelAnimationFrame(animationID)
       gameover=true 
    }
}

function enemy12(){

    context.drawImage(imageEnemy, enemyarr[11].x, 80 + y12, 40, 40);

    if(Math.abs(enemyarr[11].x-player.x)<=40&&Math.abs(80+y12-530)<=40){
      gameoverresults()
      cancelAnimationFrame(animationID)
        
    }
}

function enemy13(){

    context.drawImage(imageEnemy, enemyarr[12].x, 80 + y13, 40, 40);

    if(Math.abs(enemyarr[12].x-player.x)<=40&&Math.abs(80+y13-530)<=40){
      gameoverresults()
      cancelAnimationFrame(animationID)
      gameover=true  
    }
}

function enemy14(){

    context.drawImage(imageEnemy, enemyarr[13].x, 80 + y14, 40, 40);

    if(Math.abs(enemyarr[13].x-player.x)<=40&&Math.abs(80+y14-530)<=40){
      gameoverresults()
      cancelAnimationFrame(animationID)
        
    }
}

function enemy15(){

    context.drawImage(imageEnemy, enemyarr[14].x, 80 + y15, 40, 40);

    if(Math.abs(enemyarr[14].x-player.x)<=40&&Math.abs(80+y15-530)<=40){
      gameoverresults()
      cancelAnimationFrame(animationID)
       gameover=true 
    }
}

function enemy16(){

    context.drawImage(imageEnemy, enemyarr[15].x, 80 + y16, 40, 40);

    if(Math.abs(enemyarr[15].x-player.x)<=40&&Math.abs(80+y16-530)<=40){
      gameoverresults()
      cancelAnimationFrame(animationID)
       gameover=true 
    }
}

function enemy17(){

    context.drawImage(imageEnemy, enemyarr[16].x, 80 + y17, 40, 40);

    if(Math.abs(enemyarr[16].x-player.x)<=40&&Math.abs(80+y17-530)<=40){
      gameoverresults()
      cancelAnimationFrame(animationID)
      gameover=true  
    }
}

function enemy18(){

    context.drawImage(imageEnemy, enemyarr[17].x, 80 + y18, 40, 40);

    if(Math.abs(enemyarr[17].x-player.x)<=40&&Math.abs(80+y18-530)<=40){
      gameoverresults()
      cancelAnimationFrame(animationID)
       gameover=true 
    }
}

function enemy19(){

    context.drawImage(imageEnemy, enemyarr[18].x, 80 + y19, 40, 40);

    if(Math.abs(enemyarr[18].x-player.x)<=40&&Math.abs(80+y19-530)<=40){
      gameoverresults()
      cancelAnimationFrame(animationID)
       gameover=true 
    }
}

function enemy20(){

    context.drawImage(imageEnemy, enemyarr[19].x, 80 + y20, 40, 40);

    if(Math.abs(enemyarr[19].x-player.x)<=40&&Math.abs(80+y20-530)<=40){
      gameoverresults()
      cancelAnimationFrame(animationID)
      gameover=true  
    }
}

function enemy21(){

    context.drawImage(imageEnemy, enemyarr[20].x, 80 + y12, 40, 40);

    if(Math.abs(enemyarr[20].x-player.x)<=40&&Math.abs(80+y12-530)<=40){
      gameoverresults()
      cancelAnimationFrame(animationID)
      gameover=true  
    }
}


let stopaudio=new Audio()

Audio.src='over.wav'



let gameAudio = new Audio();

gameAudio.src = "game.wav";

if (!gameover) gameAudio.play();




function gameoverresults() {
  gameAudio.pause();

  document.querySelector("h2").textContent = score;
  stopaudio.play()
  box.showModal();

  //console.log(score);

  clearInterval(interval);
}

document.querySelector("#btn").addEventListener("click",()=>{

    box.close()

    window.location.reload()

    
})


