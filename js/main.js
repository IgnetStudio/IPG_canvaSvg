//
// SVG
//

var svgCircle = document.querySelector("circle");

svgCircle.setAttribute("fill", "#EBCB8B");

//
// CANVAS
//

var cx = document.querySelector("canvas").getContext("2d");

cx.fillStyle = "#A3BE8C";
cx.fillRect(105, 10, 90, 90);
cx.strokeStyle = "#5E81AC";
cx.lineWidth = 3;
cx.strokeRect(105, 10, 90, 90);