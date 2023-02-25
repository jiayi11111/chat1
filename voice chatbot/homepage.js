 let data;
let answer = "";
let mic;
let micLevel;

let imagetop;
let inputfield;
let sentbutton;
let speakbutton;
let speakicon;
let speakimage;
let speakRec;
let myRec=new p5.SpeechRec();
myRec.continuous =true;

let listening=false;

let botvoice=new p5.Speech();

let size;
let newred;

let sorry;

let rectHeight = 400;

// let rectWidth = min(textWidth(answer), 500);
function preload(){
   
    imagetop = loadImage('memain.gif');
    speakicon = loadImage('speakicon.png');
    speakimage= loadImage('ear.png');
      data = loadJSON("answer.json");
     speakRec= loadImage('speakRec.gif');
      sorry=loadImage('s.gif');
}


function setup(){
    createCanvas(windowWidth, windowHeight);
    botvoice.setVoice("Alex ");
    botvoice.setRate(1.2);
    botvoice.setPitch(1.4);
    botvoice.speak("Hi, I'm ChatBot Assistant. Ask me anything about Jiayi!");

    //  botvoice.speak(myRec.resultString);
   
    inputfield = createInput("");
    inputfield.style("width", "450px");
    inputfield.style("height", "45px");
    inputfield.position(width/1.72, 720);
    inputfield.elt.style.borderRadius = "25px";
    sentbutton = createButton("send");
    sentbutton.size(70, 40);
    sentbutton.position(width - 125, 730);
   sentbutton.elt.style.borderRadius = "25px";
  sentbutton.style("background-color", "white");
  sentbutton.mousePressed(showResult);
//  sentbutton.mousePressed(answerme);
mic = new p5.AudioIn();
    mic.start();
    size = 0;
    newred = 0;
    speakbutton = createButton('');
    speakbutton.size(40, 40);
    speakbutton.position(width/2+67, 730);
    speakbutton.elt.style.borderRadius = "25px";
    speakbutton.style("background-image", "url('speakicon.png')");
    speakbutton.style("border", "none");
    speakbutton.style("background-size", "cover");
    // mic = new p5.AudioIn();
    // mic.start();
    
    // speakbutton.mousePressed(changeImage);
     speakbutton.mousePressed(mouseispressed);
     speakbutton.mouseReleased(answerme);
     


    // sentbutton.mousePressed(answerme)；

}

// function question(){
//     if(inputfield.value()!="" && sentbutton.mousePressed()){
//         fill(0,47,167);
//         ellipse(1350, 220,70, 70);
//         // text(answer, 895, 225);
//         fill(255);
//         rect(850, 200,420, 50,27);
    
//         fill(0);
//         textSize(15);
//         text(inputfield.value(), 895, 225);
//         }
//     }


function answerme(){
  
  mic.stop();
  myRec.stop();
  myRec.onEnd=function recEnd(){
    listening=false;
    myRec.onResult = showResult;


}
  //   let question = inputfield.value();
  //  question = question.toLowerCase();
  //   loop1: for (let i = 0; i < data.brain.length; i++) {
  //   loop2: for (let j = 0; j < data.brain[i].triggers.length; j++) {
  //         if (question.indexOf(data.brain[i].triggers[j]) !== -1) {
          
  //           answer = random(data.brain[i].responses);
           
            

  //           let img=createImg(data.brain[i].url);
  //           img.position(width/1.7+20, 540);
  //           img.size(155,125);
  //           // fill(255);
  //           // rect(800, 350,70, 70,27);
  //           // rect(750, 350,120, 70,27);
  //           // text(answer, 755, 350);
           
    
  //           break loop1;
  //         } else {
  //           answer = random(data.catchall);
            
  //         }
  //       }
  //     }
    
  //     botvoice.speak(answer);
      
}


function mouseispressed(){
  mic.start();
  if (getAudioContext().state !== "running") {
    getAudioContext().resume();
  }
  myRec.start();
  myRec.onResult=showResult;
  listening=true;
//   myRec.onEnd=function recEnd(){
//     listening=false;
//     myRec.onResult = answerme;

// }
}



function showResult(){
    // console.log(myRec.resultString);
    // inputfield.value(myRec.resultString);
     inputfield.value(myRec.resultString);
    let question = inputfield.value();
    question = question.toLowerCase();
     loop1: for (let i = 0; i < data.brain.length; i++) {
     loop2: for (let j = 0; j < data.brain[i].triggers.length; j++) {
           if (question.indexOf(data.brain[i].triggers[j]) !== -1) {
           
             answer = random(data.brain[i].responses);
            
             
 
             let img=createImg(data.brain[i].url);
             img.position(width/1.7+20, 540);
             img.size(155,125);
             // fill(255);
             // rect(800, 350,70, 70,27);
             // rect(750, 350,120, 70,27);
             // text(answer, 755, 350);
            
            
             break loop1;
           } else {
             answer = random(data.catchall);
             
           }
         }
       }
     
       botvoice.speak(answer);

//   createP(myRec.resultString);


  }

  // function mouseover(){
  //   mic.stop();
  //   myRec.stop();
  //   myRec.onEnd=function recEnd(){
  //     listening=false;
  //     myRec.onResult = answerme;

     
  
  // }
  // }

function draw(){
    background(0);
    
    image(imagetop, width/2+20, 50, 90, 80);
    fill(255);
    rect(width/1.7, 50,470, 190,27);
    fill(0);
    textSize(15);
    text("Hi, I'm ChatBot Assistant. Ask me anything about Jiayi!", width/1.65, 85);
    textSize(13);
    text("1.name", width/1.65, 115);
    text("2.School, Grade, Major", width/1.65, 135);
    text("3.Work experience", width/1.65, 155);
    text("4.Skills", width/1.65, 175);
    text("5.Portfolio", width/1.65, 195);

 

  
   
//  if(sentbutton.mousePressed()){
//     fill(0,47,167);
//             ellipse(1350, 220,70, 70);
//             // text(answer, 895, 225);
//             fill(255);
//             rect(850, 200,420, 50,27);
        
//             fill(0);
//             textSize(15);
//             text(inputfield.value(), 895, 225);
       
//  }


//After press the sent button the text of answer and inputfield.value will show up on the screen
if(inputfield.value()!="" ){

  let rectx=(width-inputfield.value().length)/1.25;
    fill(255);
  rect(rectx-(inputfield.value().length *5), 300,inputfield.value().length * 6+120, 55,27);
    fill(0);
    textSize(15);
    
    text(inputfield.value(), rectx-(inputfield.value().length *4)+5, 330);
 
    fill(0,47,167);        
 ellipse(width/1.07, 320,60, 60);


   

    }

 

    if(answer!=""){

    image(speakRec, width/2+20, 400,98, 85);
   
   
  // rect(width/1.7, 330,textWidth(answer)+40, 55,27);
 image(speakRec, width/2+20, 520,98, 85);
  //  let rectWidth = min(textWidth(answer), 500);
  // let rectWidth = textWidth(answer)*1.5;
 
 drawTextInRectangle(answer, width/1.7+20, 420,rectHeight, 55);
    }
    if(answer==data.catchall[0]){
      image(sorry, width/1.7+20, 540,155,125);
    }

    if(answer==data.catchall[1]){
      image(sorry, width/1.7+20, 540,155,125);
    }

    if(answer==data.catchall[2]){
      image(sorry, width/1.7+20, 540,155,125);
    }
  
   




//     fill(0);
// textSize(15);
//     text(answer, width/1.7+20, 350);

  

     image(speakicon,width/2+65, 725,sentbutton.width, sentbutton.height);
     if(listening == true){
      micLevel = mic.getLevel();
      console.log(micLevel);
        // image(speakimage,width/2+67, 650,80, 80);
        //  let radius = map(micLevel, 0, 1, 0, 200);
        size = map( micLevel, 0, 1, 0, 1000 );
     ellipseMode(CENTER);
  
  newred = map( micLevel, 0, 1, 0, 400 );

  
  fill( newred, 220, 220 );
  ellipse(speakbutton.x + 10,speakbutton.y -50,size*1.2,size*1.2);
        // fill(255);
        // noStroke();
       
        // ellipse(
        //   speakbutton.x + 10,
        //   speakbutton.y -50,
        // radius*1.4
        // );
       
        fill(255);
        text("I'm listening",width/2+60,700);
        
//draw indicator if program is listening
        
      }else{
        fill(255);
        text("Pressed to speak",width/2+60,700);
       
      }


         
    





}

function drawTextInRectangle(answer, x, y, rectWidth, rectHeight) {

  // let answerWidth = textWidth(answer);
  // if (answerWidth >500) {
  //   rectWidth = 500;
  // } else {
  //   rectWidth = answerWidth;
  // }


  fill(255);
  rect(x, y, rectWidth, rectHeight,27);


  let words = answer.split(' ');
 
  


  let xPos = x;
  let yPos = y;

  let lineHeight = 40;


  for (let i = 0; i < words.length; i++) {
    let word = words[i];
     

    let wordWidth = textWidth(word + ' ');
  


    // if (xPos + wordWidth < x + rectWidth) {
    //   fill(0);
    //   textSize(15);
    //   text(word + ' ', xPos+10, yPos+30);
    //   xPos += wordWidth;
    // } else {
   
    //   xPos =x;
    //   yPos += lineHeight;
    //   rectHeight += lineHeight;
  
    //   fill(255);
    //   rect(x, y, rectWidth, rectHeight,27);
    //    fill(0);
    //    textSize(12);
       
    //    text(word+'', xPos+10, yPos+30);
     
    
      
    //    xPos += wordWidth;
 
     
    // }

    if (xPos + wordWidth > x + rectWidth) {
      xPos = x;
      yPos += lineHeight;
      rectHeight += lineHeight;
      fill(255);
      rect(x, y, rectWidth, rectHeight+10, 27);
    }

    fill(0);
    textSize(15);
    text(word + ' ', xPos + 10, yPos+20,rectWidth-20,rectHeight-20);
    xPos += wordWidth;
  
   
    

    // if (yPos + lineHeight > y + rectHeight) {
    //   rectHeight += lineHeight; // Increase the rectangle height by the line height
    //   yPos += lineHeight;
    //   fill(255);
    //   rect(x, y, rectWidth, rectHeight,27);
    // }
  
  }
  
}



//1. could not recognize the mic level
//2. could not make the answer text wrap if the text is longer than the rectangle


// function googleTranslateElementInit() {
//   new google.translate.TranslateElement({
//       pageLanguages: 'en',
//   }, 'google_translate_element');
// }




