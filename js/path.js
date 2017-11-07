var path = document.querySelector('.svgFire path');
var length = path.getTotalLength();

path.style.strokeDasharray = length + ' ' + length;
path.style.strokeDashoffset = length;

path.getBoundingClientRect();
path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 4s ease-in-out';
path.style.strokeDashoffset = '5';