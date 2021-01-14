//Create variables here
var dag;
var dogImage,dogImage1

function preload()
{
  //load images here
  dogImage = loadImage("dogImg.png");
  dogImage = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
}


function draw() {  

  drawSprites();
  //add styles here

}

function readStock(data){
    foods=data.val();
}

function wtiteStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
    database.ref('/').update({
      food:x
    })
}

if(keyWentDown(UP_ARROW)){
     writeStock(foods);
     dogImage.addImage(dogHappy);
}









