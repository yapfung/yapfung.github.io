var lights = 'on';

document.getElementById('lightSwitch').onclick = switchLights;
var background = document.getElementById('switchBacking');
var lightsVar = document.getElementById('lights');
var colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

function switchLights() {
    if (lights == 'on') {
        lights = 'off';
        background.style = 'padding:50px; background: black;';
    } else {
        lights = 'on'; 
        background.style = 'padding:50px; background: ' + colours[Math.floor(Math.random()*7)];
    }

    lightsVar.innerHTML = lights;
}