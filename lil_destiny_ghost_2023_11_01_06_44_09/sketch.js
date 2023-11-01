/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
  
  
*/
let dancer;

function setup() {
  // no adjustments in the setup function needed...
  createCanvas(windowWidth, windowHeight);
  // ...except to adjust the dancer's name on the next line:
  dancer = new AviDancer(width/2, height/2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only
  dancer.update();
  dancer.display(); 
  
}


// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class AviDancer{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.moveX = 0;
    this.moveY = 0;
    this.r = 0;
    this.g = 0;
    this.b = 0;
    // add properties for your dancer here:
    //..
    //..
    //..
    
  }  
  update(){
    // update properties here to achieve
    // your dancer's desired moves and behaviour
       // this.y += this.ySpeed;
   // if (this.y > height + 50 || this.y < height - 10) {
    //  this.ySpeed = -this.ySpeed;
    //}
    this.y += sin(frameCount * 0.04)
    this.x += sin(frameCount * 0.03)
    
  }
  display(){
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);
    
    
    // ******** //
    // ⬇️ draw your dancer here ⬇️
    stroke(this.r, this.g, this.b);
    strokeWeight(0.5);
    //core pattern
    push();
    fill(200)
    circle(0, 0, 40)
    pop();
    
    push();
    noStroke()
    fill(20, 250, 250)
    rotate(sin(frameCount * 0.06) * 0.1);
    //---------------------left side
    quad(-8, -13, -3, -10,  -7, 0, -15, 0)
    quad(-8, 13, -3, 10,  -7, 0, -15, 0)
    //---------------------right side
    quad(8, -13, 3, -10,  7, 0, 15, 0)
    quad(8, 13, 3, 10,  7, 0, 15, 0)
    //----------------------center
    circle(0, 0, 9)
    pop();
    
     //-------------back pieces
       //top point
    push();
    fill(160)
    rotate(sin(frameCount * -0.02) * 0.1);
    quad(-20, -15, 0, -30, 0, -98, -50, -40);
    quad(20, -15, 0, -30, 0, -98, 50, -40);
    pop();
    //side pieces top
    push();
    fill(240)
    rotate(sin(frameCount * -0.01) * 0.1);
    quad(-20, -15, -28, 0, -98, 0, -50, -40);
    quad(20, -15, 28, 0, 98, 0, 50, -40);
    pop();
    //side pieces bottom
    push();
    fill(70)
    rotate(sin(frameCount * -0.03) * 0.1);
    quad(-20, 15, -28, 0, -98, 0, -50, 40);
    quad(20, 15, 28, 0, 98, 0, 50, 40);
    pop();
    //bottom point
    push();
    fill(70)
    rotate(sin(frameCount * -0.01) * 0.1);
    quad(-20, 15, 0, 30, 0, 98, -50, 40);
    quad(20, 15, 0, 30, 0, 98, 50, 40);
    pop();
    
    //----------front pieces
    //top point
    push();
    fill(130)
    rotate(sin(frameCount * 0.015) * 0.1);
    quad(-20, -15, 0, -30, 0, -98, -50, -40);
    quad(20, -15, 0, -30, 0, -98, 50, -40);
    pop();
    //side pieces top
    push();
    fill(210)
    rotate(sin(frameCount * 0.01) * 0.1);
    quad(-20, -15, -28, 0, -98, 0, -50, -40);
    quad(20, -15, 28, 0, 98, 0, 50, -40);
    pop();
    //side pieces bottom
    push();
    fill(90)
    rotate(sin(frameCount * 0.03) * 0.1);
    quad(-20, 15, -28, 0, -98, 0, -50, 40);
    quad(20, 15, 28, 0, 98, 0, 50, 40);
    pop();
    //bottom point
    push();
    fill(125)
    rotate(sin(frameCount * 0.01) * 0.1);
    quad(-20, 15, 0, 30, 0, 98, -50, 40);
    quad(20, 15, 0, 30, 0, 98, 50, 40);
    pop();
    
     //bottom triangle
    push();
    rotate(sin(frameCount * 0.01) * 0.1);
    fill(230)
    triangle(0, 99, 15, 85, -15, 85);
    pop();
     //top triangle
    push();
     rotate(sin(frameCount * 0.015) * 0.1);
    triangle(0, -99, 15, -85, -15, -85);
    pop();
    // ⬆️ draw your dancer here ⬆️
    
    
    
    
    // ******** //
    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes()
   
    
    
   // pop();
  }  
  //drawReferenceShapes(){
   // noFill();
   // stroke(255, 0, 0);
   // line(-5, 0, 5, 0);
   // line(0, -5, 0, 5);
   // stroke(255);                       
   // rect(-100, -100, 200, 200);    
   // fill(255);
   // stroke(0);
    
     
 // }
  
  
}





/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmomize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 

*/