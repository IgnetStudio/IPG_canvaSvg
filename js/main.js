//
// SVG
//

var svgCircle = document.querySelector("circle");

svgCircle.setAttribute("fill", "#EBCB8B");

//
// CANVAS
//

var canvaSquare = document.querySelector(".canvaSquare").getContext("2d");
var canvaLines = document.querySelector(".canvaLines").getContext("2d");

canvaSquare.fillStyle = "#A3BE8C";
canvaSquare.fillRect(105, 10, 90, 90);
canvaSquare.strokeStyle = "#5E81AC";
canvaSquare.lineWidth = 3;
canvaSquare.strokeRect(105, 10, 90, 90);

canvaLines.beginPath();
for (var y = 10; y < 100; y += 10) {
  canvaLines.moveTo(105, y);
  canvaLines.lineTo(195, y);
}
canvaLines.stroke();