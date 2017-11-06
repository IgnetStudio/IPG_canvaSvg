var distancePerPoint = 1;
var drawFPS = 45;

var orig = document.querySelector('path'),
    length, timer;
orig.addEventListener('mouseover', startDrawingPath, false);
orig.addEventListener('mouseout', stopDrawingPath, false);

function startDrawingPath() {
    length = 0;
    orig.style.stroke = '#5E81AC';
    timer = setInterval(increaseLength, 100 / drawFPS);
}

function increaseLength() {
    var pathLength = orig.getTotalLength();
    length += distancePerPoint;
    orig.style.strokeDasharray = [length, pathLength].join(' ');
    if (length >= pathLength) clearInterval(timer);
}

function stopDrawingPath() {
    clearInterval(timer);
    orig.style.stroke = '';
}