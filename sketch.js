//background and coverpill rgb values
let br = 255
let bg = 217
let bb = 213

let winW;
let winH;
let cnv;

let posX, posY;
let tileSize = 100;
let tileCountY;


function setup() {
  if (windowWidth > windowHeight) {
    winW = window.innerWidth;
    winH = window.innerHeight;
    tileSize = windowWidth/20;
    cnv = createCanvas(winW-15, winW);
  } else {
    // tileSize = window.innerWidth/10;
    // winW = window.innerWidth;
    // winH = (window.innerHeight*3);
    // var cnv = createCanvas(winW, winH);
  }
  cnv.position(0,0);
  background(br, bg, bb);
}


function windowResized() {
  if (windowWidth > windowHeight) {
    winW = window.innerWidth;
    winH = window.innerHeight;
    tileSize = windowWidth/20;
    cnv = createCanvas(winW-15, winW);
  } else {
    // tileSize = window.innerWidth/10;
    // winW = window.innerWidth;
    // winH = (window.innerHeight*3);
    // var cnv = createCanvas(winW, winH);
  }
  cnv.position(0,0);
  background(br, bg, bb);
}


function draw() {


if (window.innerWidth>window.innerHeight) {
    strokeWeight(12);
    let rng = random(20);
    r = random(200,255);
    g = random(150,220);
    b = random(150,220);
    let d = random(20);

  //decide what to draw
    //do nothing
    if (rng < 10) {   
      }
    else if (rng < 17) {
      //cover pill
        drawPill(br,bg,bb,posX,posY,tileSize,1,1)
        drawPill(br,bg,bb,posX,posY,tileSize,6,1)
      }
    else {
      //cover pill and place a new one
        drawPill(br,bg,bb,posX,posY,tileSize,1,1)
        drawPill(br,bg,bb,posX,posY,tileSize,6,1)
        drawPill(r,g,b,posX,posY,tileSize,d,0)
    }

  //random location 
    let skipX = floor(random(20));
    let skipY = floor(random(20));
    posY = tileSize*skipY;
    posX = tileSize*skipX;

  } else {

  //     strokeWeight(12);
  //   let rng = random(20);
  //   r = random(200,255);
  //   g = random(150,220);
  //   b = random(150,220);
  //   let d = random(20);

  // //decide what to draw
  //   //do nothing
  //   if (rng < 10) {   
  //     }
  //   else if (rng < 17) {
  //     //cover pill
  //       drawPill(br,bg,bb,posX,posY,tileSize,1,1)
  //       drawPill(br,bg,bb,posX,posY,tileSize,6,1)
  //     }
  //   else {
  //     //cover pill and place a new one
  //       drawPill(br,bg,bb,posX,posY,tileSize,1,1)
  //       drawPill(br,bg,bb,posX,posY,tileSize,6,1)
  //       drawPill(r,g,b,posX,posY,tileSize,d,0)
  //   }

  // //random location 
  //   tileCountY = round(winH/tileSize);


  //   let skipX = floor(random(10));
  //   let skipY = floor(random(tileCountY));
  //   posY = tileSize*skipY;
  //   posX = tileSize*skipX;

  }
}

function drawPill(r,g,b,x,y,tile,d,c){
  
  let shape = (tileSize/3);

       strokeWeight(shape + c);
       stroke(r,g,b);
      if (d>5) {
        line(x+shape, y+tile-shape, x+tile-shape, y+shape);
      }
      else {
        line(x+shape, y+shape, x+tile-shape, y+tile-shape);
      }
 
}