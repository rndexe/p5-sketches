let gui;
var boxSize = 100;
var Key_Hue = 0;
var Key_HueMax = 360;
var Key_Saturation = 100;
var Key_Brightness = 100;
var Fill_Hue = 120;
var Fill_HueMax = 360;
var Fill_Saturation = 100;
var Fill_Brightness = 50;
var boxX = 100;
var boxZ = 0;
var Key_Z = 250;
var Key_ZMax = 500;
var Key_Y = 250;
var Key_YMax = 500;
var Fill_X = 250;
var Fill_XMax = 500;
var Fill_Y = 250;
var Fill_YMax = 500;

function setup() {

    setAttributes('antialias', true);
    createCanvas(windowWidth, windowHeight, WEBGL);
    gui = createGui('Lighting');

    gui.addGlobals('Key_Y', 'Key_Z',
        'Key_Hue', 'Key_Saturation', 'Key_Brightness',
        'Fill_X', 'Fill_Y',
        'Fill_Hue', 'Fill_Saturation', 'Fill_Brightness');
    colorMode(HSB)
    // give it an orthographic projection
    ortho(-width / 2, width / 2, -height / 2, height / 2, -width, width);
    camera(200, -200, 200, 0, 0, 0, 0, 1, 0);
    noLoop();

}

function draw() {
    background(255);
    lightFalloff(0.75, 0, 0);

    pointLight(color(Key_Hue, Key_Saturation, Key_Brightness), 0, -Key_Y, Key_Z);
    pointLight(color(Fill_Hue, Fill_Saturation, Fill_Brightness), Fill_X, -Fill_Y, 0);
    push();
    translate(0, -Key_Y, Key_Z);
    noStroke();
    emissiveMaterial(color(Key_Hue, Key_Saturation, Key_Brightness));
    sphere(10);
    pop();
    push();
    translate(Fill_X, -Fill_Y, 0);
    noStroke();
    emissiveMaterial(color(Fill_Hue, Fill_Saturation, Fill_Brightness));
    sphere(10);
    pop();

    box(500, 20, 500);
    translate(boxX, -boxSize, boxZ);
    box(boxSize);
}
