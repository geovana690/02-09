cclet cena = 0;

function setup() {
  createCanvas(800, 500);
  textAlign(CENTER, CENTER);
  textFont("Arial");
}

function draw() {
  background(30);

  if (cena === 0) {
    inicio();
  }

  if (cena === 1) {
    dependencia();
  }

  if (cena === 2) {
    percepcao();
  }

  if (cena === 3) {
    equilibrio();
  }

  if (cena === 4) {
    finalBom();
  }

  fill(255);
  textSize(16);
  text("Clique para continuar", width / 2, 470);
}

// CENA 1
function inicio() {
  background(30, 40, 70);

  // Pessoa
  fill(80, 160, 255);
  ellipse(300, 220, 80, 80);

  fill(50, 120, 220);
  rect(260, 270, 80, 110, 20);

  // Computador
  fill(50);
  rect(500, 170, 150, 100, 10);

  fill(0, 200, 255);
  ellipse(575, 220, 50, 50);

  fill(255);
  textSize(30);
  text("O começo", 400, 60);

  textSize(18);
  text(
    "Lucas começa a usar a IA para estudar e encontrar informações.",
    400,
    420
  );
}

// CENA 2
function dependencia() {
  background(20, 20, 30);

  // Computadores
  for (let i = 0; i < 6; i++) {
    fill(50);
    rect(100 + i * 120, 100, 80, 60);

    fill(0, 200, 255);
    rect(110 + i * 120, 110, 60, 40);
  }

  // Pessoa
  fill(100, 130, 230);
  ellipse(400, 250, 70, 70);

  fill(80, 100, 200);
  rect(365, 290, 70, 90, 15);

  fill(255);
  textSize(28);
  text("Uso excessivo", 400, 50);

  textSize(18);
  text(
    "Lucas começa a pedir para a IA fazer quase tudo.",
    400,
    420
  );
}

// CENA 3
function percepcao() {
  background(80, 60, 30);

  fill(255, 220, 50);
  ellipse(400, 200, 100, 100);

  fill(255);
  textSize(35);
  text("!", 400, 200);

  textSize(28);
  text("Lucas percebe o problema", 400, 60);

  textSize(18);
  text(
    "Ele percebe que está deixando de pensar por conta própria.",
    400,
    420
  );
}

// CENA 4
function equilibrio() {
  background(30, 90, 70);

  // Pessoa
  fill(80, 170, 255);
  ellipse(280, 220, 80, 80);

  fill(50, 130, 220);
  rect(240, 270, 80, 110, 20);

  // IA
  fill(50);
  rect(500, 180, 140, 100, 15);

  fill(0, 220, 255);
  ellipse(570, 230, 50, 50);

  // Conexão
  stroke(255);
  strokeWeight(3);
  line(320, 230, 500, 230);
  noStroke();

  fill(255);
  textSize(28);
  text("Humano + IA", 400, 60);

  textSize(18);
  text(
    "Lucas decide usar a IA como ajuda, sem deixar de pensar.",
    400,
    420
  );
}

// CENA 5
function finalBom() {
  background(70, 170, 100);

  // Sol
  fill(255, 220, 50);
  ellipse(680, 90, 100, 100);

  // Pessoa
  fill(80, 170, 255);
  ellipse(400, 200, 80, 80);

  fill(50, 130, 220);
  rect(360, 250, 80, 120, 20);

  // Livro
  fill(255);
  rect(230, 280, 110, 70);

  // IA
  fill(50);
  rect(470, 280, 110, 70);

  fill(0, 220, 255);
  ellipse(525, 315, 35, 35);

  fill(255);
  textSize(32);
  text("FINAL BOM", 400, 60);

  textSize(18);
  text(
    "Lucas aprendeu a usar a IA sem depender dela.",
    400,
    410
  );

  text(
    "Ele pensa, cria, pesquisa e usa a IA apenas como ferramenta.",
    400,
    440
  );
}

// Passar para a próxima cena
function mousePressed() {
  cena++;

  if (cena > 4) {
    cena = 0;
  }
}
