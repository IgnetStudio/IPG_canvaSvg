//
// VARIABLES
//

var svgCircle = document.querySelector("circle");
var canvaSquare = document.querySelector(".canvaSquare").getContext("2d");
var canvaLines = document.querySelector(".canvaLines").getContext("2d");
var canvaTriangle = document.querySelector(".canvaTriangle").getContext("2d");

//
// SVG
//

svgCircle.setAttribute("fill", "#EBCB8B");

//
// CANVAS SQUARE
//

canvaSquare.fillStyle = "#A3BE8C";
canvaSquare.fillRect(105, 10, 90, 90);
canvaSquare.strokeStyle = "#5E81AC";
canvaSquare.lineWidth = 3;
canvaSquare.strokeRect(105, 10, 90, 90);

//
// CANVAS LINES
//

canvaLines.beginPath();
for (var y = 10; y < 100; y += 10) {
  canvaLines.moveTo(105, y);
  canvaLines.lineTo(195, y);
}
canvaLines.stroke();

//
// CANVAS TRIANGLE
//

canvaTriangle.beginPath();
canvaTriangle.moveTo(50, 10);
canvaTriangle.lineTo(10, 70);
canvaTriangle.lineTo(90, 70);
canvaTriangle.fill();