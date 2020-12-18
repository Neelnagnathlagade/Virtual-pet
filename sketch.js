//Create variables here

var dog,happyDog,foodS,foodStock
var dogImage,happyDogImage
var database


function preload()
{
  //load images here
  dogImage=loadImage("sprites/dogimg.png")
  happyDogImage=loadImage("sprites/dogimg1.png")
}

function setup() {
  createCanvas(800, 800);

  database=firebase.database();

  dog=createSprite(400,400,50,50)
  dog.addImage(dogImage)
  dog.scale=0.3
  
  

}


function draw() {  

  background(46,139,87);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImage)
}
text("Food remaining : "+foodS,170,200);

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').set({
    Food:x
  })
}


