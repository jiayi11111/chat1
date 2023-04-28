
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
let bot=new RiveScript();
let rectWidth=400;
let rectHeight=100;

let inputvalue;

let mouse=false;



// let unknown=true;
// let movie;



// let questionDiv=createQuestion(inputfield);

// let rectWidth = min(textWidth(answer), 500);
function preload(){
  
    imagetop = loadImage('memain.gif');
    speakicon = loadImage('speakicon.png');
    speakimage= loadImage('ear.png');
     speakRec= loadImage('speakRec.gif');
  
      
     bot.loadFile("bot.txt"). then(loaded).catch(error);
    
     
}

function loaded() {
  console.log("Bot is loaded.");
  bot.sortReplies(); // Call sortReplies() here
}

function error(err){
  console.log(err);
  console.log("error happened")
}




function setup(){
    createCanvas(windowWidth, windowHeight);
    // botvoice.setVoice("Alex ");
    botvoice.setVoice('Google US English Female');
    botvoice.setRate(1.3);
    botvoice.setPitch(1.4);
    botvoice.speak("Hey! I'm evaluate personality chatbot. You can try to say hi to me."
    );

    //  botvoice.speak(myRec.resultString);
   
     inputfield = createInput("");
    inputfield.style("width", "450px");
    inputfield.style("height", "45px");
    inputfield.position(width/1.72, 720);
    inputfield.elt.style.borderRadius = "25px";
    // inputfield.changed(typeResult);
    
    sentbutton = createButton("send");
    sentbutton.size(70, 40);
    sentbutton.position(width - 125, 730);
   sentbutton.elt.style.borderRadius = "25px";
  sentbutton.style("background-color", "white");
  // sentbutton.mousePressed(showResult);
  sentbutton.mousePressed(typeResult);
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

  
   
     speakbutton.mousePressed(mouseispressed);
     speakbutton.mouseReleased(answerme);
     




}





function keyPressed(){
  if(keyCode===ENTER){
   typeResult() //let the chatbot respond when enter key pressed
  //  sendQuestion();
  
  
  }

}


function answerme(){
  

  myRec.stop();
  myRec.onEnd=function recEnd(){
    listening=false;
    myRec.onResult = showResult;


}
      
}


function mouseispressed(){
  mic.start();
  if (getAudioContext().state !== "running") {
    getAudioContext().resume();
  }
  myRec.start();
  myRec.onResult=showResult;
  listening=true;

}



function showResult(){
    // console.log(myRec.resultString);

      inputfield.value(myRec.resultString);
  
    let question = myRec.resultString;
     question = question.toLowerCase();
    answer = bot.reply("local-user", question).then(respond);
     
    function respond(reply){
      answer = reply;
      botvoice.speak(answer);

    }

  }


function typeResult(){

mouse=true;
  let question = inputfield.value();
  question = question.toLowerCase();
inputvalue=question;
  answer = bot.reply("local-user", question).then(respondme);


  function respondme(reply) {

      console.log(reply);
      answer = reply;
      botvoice.speak(answer);
      console.log("known");
    
  

  }
  

   
   

    setTimeout(clearInput, 1000);
    function clearInput(){
      inputfield.value("");
    }

 
    }


    
  

function draw(){
    background(0);
    
    image(imagetop, width/2+20, 80, 100, 90);
    fill(255);
    rect(width/1.7, 50,470, 120,27);
    fill(0);
    textSize(16);
    textAlign(LEFT);
    text("Hey! I'm evaluate personality chatbot. You can try to say hi to me.", width/1.65, 89, 400, 200);
    

 let rectW = min(textWidth(inputvalue) + 40, 300);

let rectx = (width - textWidth(inputvalue)) / 1.15;
let recty = 300;

let rectH = textAscent() * 3.4;




      //  text( questionDiv.innerHTML, rectx-(inputfield.value().length *4)+5, 330);
      // questionDiv.position(rectx-(inputfield.value().length *4)+10, 320);
   

      //  text(inputvalue, rectx+20, 320, 400);

  
 if (inputfield.value() != "") {
 
  // fill(255);
  fill("#95ec69");
  rect(rectx, recty, rectW, rectH, 27);
    fill(0,47,167);        
    ellipse(width/1.07, 320,50, 50);
  let dotSize = 6; // The size of the dot
 
  let alpha = map(sin(frameCount * 0.05), -1, 1, 0, 255);
  fill(0, alpha);
  noStroke();
   ellipse(rectx+15, recty+30, dotSize, dotSize);
   ellipse(rectx+25, recty+30, dotSize, dotSize);
   ellipse(rectx+35, recty+30, dotSize, dotSize);
  
 
   
 }

 if(keyCode===ENTER|| mouse===true){
  // fill(255);
  fill("#95ec69");
rect(rectx, recty, rectW, rectH, 27);
  fill(0,47,167);        
  ellipse(width/1.07, 320,50, 50); }

 textAlign(LEFT);
 fill(0);
 textSize(15);
 
 text(inputvalue, rectx+15, 320, rectW-30);

    if(answer!=""){


    image(speakRec, width/2+20, 430,100, 90);
  
textAlign(LEFT);
    textSize(15);
    fill(255);
    rect(width / 1.7 + 20, 420, rectWidth + 20, rectHeight+20, 27);
    fill(0);
    text(answer, width / 1.7 + 30, 450,400,rectHeight-20);
   
  
    
    }
   
  
  

     image(speakicon,width/2+65, 725,sentbutton.width, sentbutton.height);
     if(listening == true){
      micLevel = mic.getLevel();
      console.log(micLevel);
        size = map( micLevel, 0, 1, 0, 1000 );
     ellipseMode(CENTER);
  
  newred = map( micLevel, 0, 1, 0, 400 );

  
  fill( newred, 220, 220 );
  ellipse(speakbutton.x + 10,speakbutton.y -50,size*1.2,size*1.2);
      
        fill(255);
        text("I'm listening",width/2+60,700);
        
//draw indicator if program is listening
        
      }else{
        fill(255);
        text("Pressed to speak",width/2+60,700);
       
      
      }

}


    





function drawTextInRectangle(answer, x, y, rectWidth, rectHeight) {



  fill(255);
  rect(x, y, rectWidth, rectHeight,27);


  let words = answer.split(' ');
 
  


  let xPos = x;
  let yPos = y;

  let lineHeight = 40;


  for (let i = 0; i < words.length; i++) {
    let word = words[i];
     

    let wordWidth = textWidth(word + ' ');
  

    if (xPos + wordWidth > x + rectWidth) {
      xPos = x;
      yPos += lineHeight;
      rectHeight += lineHeight;
      fill(255);
      rect(x, y, rectWidth, rectHeight+200, 27);
    }

  
  }
  
}









