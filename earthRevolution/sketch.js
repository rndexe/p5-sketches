let loop = {
    ctr : 0,
    increment: 0.006,
    t: () => loop.ctr,
}
let num_circles = 4;
let circles = [];
let size_circle = 25;
let sunTex, spaceTex, earthTex;
let capturer = new CCapture({ name: 'output', format: 'png' });


function preload() {
    sunTex = loadImage('../assets/2k_sun.jpg');
    spaceTex = loadImage('../assets/2k_stars_milky_way.jpg');
    earthTex = loadImage('../assets/2k_earth_daymap.jpg')
}

function setup() {
    createCanvas(600, 600, WEBGL);
    camera(0, -100, 150, 0, 0, 0, 0, 1, 0);
}

function draw() {
    if (loop.ctr == 0) {
        capturer.start();
    }
    setEnvironment();

    drawGalaxy(2);
    drawSun(4);
    for (let i = 0; i < 8; i++) {
        drawEarth(color(255, 147, 41), PI / 4 * i);
    }
    capturer.capture(document.getElementById('defaultCanvas0'));

    if(loop.ctr >= 2*PI) {
        capturer.stop();
        capturer.save();
        noLoop();
    }

    console.log(loop.ctr);
    loop.ctr += loop.increment;
}

function setEnvironment() {
    noStroke();
    //orbitControl();
    ambientLight(255);
}

function drawEarth(clr, phase) {
    push();
    {
        noLights();
        ambientLight(128);
        pointLight(clr, 0, 0, 0);
        lightFalloff(0.1, 0, 0);

        translate(50 * (cos(loop.t() + phase) + cos(6 * loop.t() + phase) / 3 + sin(14 * loop.t() + phase) / 4),
            10 * sin(loop.t() + phase),
            50 * (sin(loop.t() + phase) + sin(6 * loop.t() + phase) / 3 + cos(14 * loop.t() + phase) / 4));
        rotateY(50 * loop.t());
        texture(earthTex);
        sphere(3);
    }
    pop();
}

function drawGalaxy(speed) {
    push();
    {
        rotateX(loop.t() * speed);
        texture(spaceTex);
        sphere(4000);
        pop();
    }
}


function drawSun(speed) {
    push();
    {
        rotateY(loop.t() * speed);
        rotateX(PI/2);
        texture(sunTex);
        sphere(20);
        pop();
    }
}