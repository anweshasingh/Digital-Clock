function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);
  
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  strokeWeight(6);
  stroke(255, 100, 150);
  noFill();
  let sec = map(sc, 0, 60, 0, 360);
  //arc(0, 0, 300, 300, 0, sec);
  
  push()
  rotate(sec);
  stroke(255, 100, 150);
  line(0, 0, 100, 0);
  pop();
  
  stroke(150, 100, 255);
  let min = map(mn, 0, 60, 0, 360);
  //arc(0, 0, 280, 280, 0, min);
  
  push()
  rotate(min);
  stroke(150, 100, 255);
  line(0, 0, 80, 0);
  pop();
  
  stroke(255, 255, 100);
  let hro = map(hr % 12, 0, 12, 0, 360);
  //arc(0, 0, 260, 260, 0, hro);
  
  push()
  rotate(hro);
  stroke(255, 255, 100);
  line(0, 0, 40, 0);
  pop();
  
  
  fill(255);
  noStroke();
  text(hr + ':' + mn + ':' + sc, 80, 100);
  
  
}