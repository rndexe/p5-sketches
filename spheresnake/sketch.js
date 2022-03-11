let spaceTex;
let capturer = new CCapture( { framerate: 60 , name: 'output', format: 'png' } );

function preload() {
  spaceTex = loadImage('../assets/Purple Nebula 2.png');
}

function setup() {
    createCanvas(600, 600, WEBGL);
    camera(0, 0, 512, 0, 0, 0, 0, 1, 0);
}
  
function draw() {
    
    if (frameCount == 1)
      capturer.start();
    
    setEnvironment();
    
    drawSpaceBox(2048);
    normalMaterial();
    sphere(10);
    debugMode(2048, 16, 0, 0, 0, 20, 0, -40, 0);
    stroke(0,128,64);
    camera(512*sin(frameCount*0.02), -100, 512*cos(frameCount*0.02), 0, 0, 0, 0, 1, 0);

    capturer.capture(document.getElementById('defaultCanvas0'));

    if(frameCount*0.02/TWO_PI >=1) {
        capturer.stop();
        capturer.save();
        noLoop();
    } 
}

function drawSpaceBox(size) {
  texture(spaceTex);
  noStroke();
  push();
  translate(0,0,-size/2);
  plane(size,size);
  pop();
  push();
  translate(-size/2,0,0)
  rotateY(PI/2);
  plane(size,size);
  pop();
  push();
  translate(size/2,0,0);
  rotateY(-PI/2);
  plane(size,size);
  pop();
}
function setEnvironment() {
  background(255);
  ambientLight(200);
}