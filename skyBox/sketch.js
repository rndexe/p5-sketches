let spaceTex;
let capturer = new CCapture({ framerate: 25, name: 'output', format: 'png' });
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
    texture(spaceTex);
    //rotateY(frameCount * 0.001);
    noStroke()
    push()
    translate(0, 0, -1024)
    plane(2048, 2048);
    pop()
    push()
    translate(-1024, 0, 0)
    rotateY(PI / 2);
    plane(2048, 2048);
    pop()
    push()
    translate(1024, 0, 0)
    rotateY(-PI / 2);
    plane(2048, 2048);
    pop()



    //fill('#ff6a1f')
    normalMaterial();
    sphere(10);
    debugMode(2048, 16, 0, 0, 0, 20, 0, -40, 0);
    stroke(0, 128, 64);
    camera(512 * sin(frameCount * 0.02), -100, 512 * cos(frameCount * 0.02), 0, 0, 0, 0, 1, 0);

    capturer.capture(document.getElementById('defaultCanvas0'));
    console.log(frameCount * 0.01 / TWO_PI)
    if (frameCount * 0.02 / TWO_PI >= 1) {
        capturer.stop();
        capturer.save();
        noLoop();

    }


}

function setEnvironment() {

    //orbitControl();

    background(255);
    ambientLight(200);
    //directionalLight(50,50,50, -1, -1, -1);

}