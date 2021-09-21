function setup() {
  createCanvas(610, 670);
}

function draw() {
  rect( 100, 200, 2, 300)
  rect( 50, 370, 110, 400)
  rect( 200, 500, 80, 200)
  rect( 150, 575, 70, 100)
  rect( 20, 470, 80, 250)
  rect( 0 , 565, 60, 150)
  rect( 310, 420, 100, 350)
  rect( 255 , 555, 80, 150)
  rect( 200, 605, 60, 200)
  rect( 400, 475, 100, 200)
  rect( 530, 460, 80, 300)
  rect ( 470, 570, 80, 200)

  translate(530, 200);
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 40, 20, 80);
    rotate(PI/5);
  }
}
