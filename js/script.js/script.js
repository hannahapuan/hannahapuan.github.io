var quadrantItems = document.querySelectorAll('.quadrant__item');
var svgs = document.querySelectorAll('svg');
var cube = document.querySelector('.cube');
var closeButton = document.querySelector('.quadrant__item__content--close');
var isInside = false;

var tl = new TimelineLite({paused: true});
tl.timeScale(1.6);

tl.to('.cube', 0.4, {rotation: 45, width: '120px', height: '120px', ease: Expo.easeOut}, 'first');
tl.to('.plus .plus-vertical', 0.3, {height: '0', backgroundColor: '#de2779', ease: Power1.easeIn}, 'first');
tl.to('.plus .plus-horizontal', 0.3, {width: '0', backgroundColor: '#de2779', ease: Power1.easeIn}, 'first');
tl.to('.cube', 0, {backgroundColor: 'transparent'});
tl.to(quadrantItems[0], 0.15, {x: -5, y: -5}, 'seperate');
tl.to('.arrow-up', 0.2, {opacity: 1, y: 0}, 'seperate+=0.2');
tl.to(quadrantItems[1], 0.15, {x: 5, y: -5}, 'seperate');
tl.to('.arrow-right', 0.2, {opacity: 1, x: 0}, 'seperate+=0.2');
tl.to(quadrantItems[3], 0.15, {x: 5, y: 5}, 'seperate');
tl.to('.arrow-down', 0.2, {opacity: 1, y: 0}, 'seperate+=0.2');
tl.to(quadrantItems[2], 0.15, {x: -5, y: 5}, 'seperate');
tl.to('.arrow-left', 0.2, {opacity: 1, x: 0}, 'seperate+=0.2');

cube.addEventListener('mouseenter', playTimeline);
cube.addEventListener('mouseleave', reverseTimeline);

function playTimeline(e) {
  e.stopPropagation();
  tl.play();
}

function reverseTimeline(e) {
  e.stopPropagation();
  tl.timeScale(1.8);
  tl.reverse();
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() { 
  strokeWeight(1);
  stroke('#c7a5a1');
  fill('#eac5b7');

  function vortex(count) {
    for (var i = 0; i < count; i++) {
      triangle(i*width/count,0,(i+1)*width/count,0,mouseX,mouseY);
      triangle(0,i*height/count,0,(i+1)*height/count,mouseX,mouseY);
      triangle(i*width/count,height,(i+1)*width/count,height,mouseX,mouseY);
      triangle(width,i*height/count,width,(i+1)*height/count,mouseX,mouseY);
    }
  }
  
  vortex(100);
}

var latestKnownScrollY = 0,
    ticking = false;

function onScroll() {
	latestKnownScrollY = window.scrollY;
  requestTick();
}
function requestTick() {
	if(!ticking) {
		requestAnimationFrame(update);
	}
	ticking = true;
}

function update() {
  ticking = false;
  var currentScrollY = latestKnownScrollY;
  console.log(currentScrollY);
  $('#shape1').css('transform','translate(0, -' + ( currentScrollY * 0.8 ) + 'px)');
  $('#shape2').css('transform','translate(0, -' + ( currentScrollY * 0.5 ) + 'px)');
  $('#shape3').css('transform','translate(0, -' + ( currentScrollY * 0.7 ) + 'px)');
  
	
}

window.addEventListener('scroll', onScroll, false);