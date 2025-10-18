let angle;        // angolo di ramificazione
let baseLength = 130; // lunghezza iniziale del ramo principale
let growth = 0;
let growthSpeed = 0.5; // pixel per frame

function setup() {
  createCanvas(600, 600);
  stroke(255);
  noFill();
  frameRate(15);
}

function draw() {
  background(150, 185, 190);
  if (growth < baseLength) {
    growth += growthSpeed;
  }

  translate(width / 2, height);
  branch(growth);
}

function branch(len) {
  // disegna il ramo corrente
  strokeWeight(map(len, 9, baseLength, 1, 8)); // più spesso alla base
  line(0, 0, 0, -len);
  translate(0, -len); // sposta verso l’alto la “punta” del ramo

  // se il ramo è ancora lungo, genera due sotto-rami
  if (len > 10) {
    push();
    // leggero angolo random positivo
    rotate(random(PI / 8, PI / 5));
    branch(len * random(0.6, 0.8)); // lunghezza minore e random
    pop();

    push();
    // leggero angolo random negativo
    rotate(random(-PI / 8, -PI / 5));
    branch(len * random(0.6, 0.8));
    pop();
  } else {
    // piccole "foglie" terminali
    fill(random(60, 100), random(120, 200), random(60, 100));
    noStroke();
    ellipse(0, 0, random(10, 8), random(12, 12));
    noFill();
    stroke(random(80, 100), random(50, 60), random(30, 50));
  }
}