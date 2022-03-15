let capturer = new CCapture({ name: 'output', format: 'png' });
let cam;
function preload() {
}

function setup() {
    createCanvas(900, 900, WEBGL);
    ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 900);
    cam = createCamera();
    cam.setPosition(400,-200,400);
    cam.lookAt(0,0,0);
    // give it an orthographic projection
    cam.ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 500);
}

function draw() {
    //orbitControl();
    background(255);
    lights();
    ortho();
    //rotateX(-PI/8);
    rotateY(millis()/1000);
    box(300,20,300);
    translate(0,-30,0);
    cylinder(20,40);
    debugMode();
}

function setEnvironment() {
   
}
