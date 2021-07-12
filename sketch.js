const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var hour
var engine, world;
var backgroundImg;

var bg="sunrise1.png"

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg)
 background(backgroundImg)
    Engine.update(engine);

    // write code to display time in correct format here
  textSize(24)
  fill("black")
  if (hour>=12){
  text("Time :"+ hour%12+"p.m.",50,100);

  }else 
    if(hour===0){
      text("Time : 12 a.m.",50,100);
  }else {
    text("Time :"+ hour%12+"a.m.",50,100);
  }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response =await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    console.log(response)
    var responsejson =await response.json()
    console.log(responsejson)
    var datetime = responsejson.datetime
    console.log(datetime)
     hour = datetime.slice(11,13)
    
    if(hour>=04&&hour<=08){
       bg="sunrise2.png"

    }else if(hour>=08&&hour<=11){
        bg="sunrise4.png"
     } 
       else if(hour>=11&&hour<=16){
        bg="sunset7.png"
 
     }else if(hour>=16&&hour<=20){
        bg="sunset11.png"
 
     }else if(hour>=20&&hour<=24){
        bg="sunset12.png"
 
     }
     backgroundImg=loadImage(bg);
}
