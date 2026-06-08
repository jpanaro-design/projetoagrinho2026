let produtividade = 50;
let meioAmbiente = 50;
let dinheiro = 100;
let turno = 1;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220, 240, 220); // Fundo verde claro sustentável
  
  // Interface de Texto
  textAlign(LEFT);
  textSize(18);
  fill(50);
  text("EcoFarming: Equilíbrio Sustentável", 20, 40);
  textSize(14);
  text("Turno: " + turno, 20, 70);
  text("Créditos: $" + dinheiro, 20, 90);
  
  // Barra de Produtividade (Azul/Dinheiro)
  fill(200);
  rect(400, 40, 150, 20);
  fill(50, 150, 250);
  rect(400, 40, map(produtividade, 0, 100, 0, 150), 20);
  fill(0);
  text("Produção: " + produtividade + "%", 400, 35);
  
  // Barra de Meio Ambiente (Verde)
  fill(200);
  rect(400, 100, 150, 20);
  fill(50, 200, 100);
  rect(400, 100, map(meioAmbiente, 0, 100, 0, 150), 20);
  fill(0);
  text("Meio Ambiente: " + meioAmbiente + "%", 400, 95);
  
  desenharBotao(50, 200, 220, 50, "1. Expandir Lavoura (Agro)");
  desenharBotao(50, 270, 220, 50, "2. Plantar Árvores (Eco)");
  desenharBotao(50, 340, 220, 50, "3. Tecnologia BioTech");
  
  verificarFimDeJogo();
}

// Função auxiliar para desenhar os botões
function desenharBotao(x, y, l, a, texto) {
  fill(255);
  stroke(100);
  rect(x, y, l, a, 5);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  text(texto, x + l/2, y + a/2);
}

// Lógica do Clique do Mouse para as Decisões
function mousePressed() {
  // Botão 1: Expandir Lavoura
  if (mouseX > 50 && mouseX < 270 && mouseY > 200 && mouseY < 250) {
    produtividade += 15;
    meioAmbiente -= 20; // Prejudica a natureza
    dinheiro += 50;
    turno++;
  }
  
  // Botão 2: Plantar Árvores / Reflorestar
  if (mouseX > 50 && mouseX < 270 && mouseY > 270 && mouseY < 320) {
    if (dinheiro >= 30) {
      produtividade -= 5;
      meioAmbiente += 25; // Melhora a natureza
      dinheiro -= 30;
      turno++;
    }
  }
  
  if (mouseX > 50 && mouseX < 270 && mouseY > 340 && mouseY < 390) {
    if (dinheiro >= 60) {
      produtividade += 10;
      meioAmbiente += 10; // Avanço sustentável
      dinheiro -= 60;
      turno++;
    }
  }
  
  produtividade = constrain(produtividade, 0, 100);
  meioAmbiente = constrain(meioAmbiente, 0, 100);
}

function verificarFimDeJogo() {
  if (meioAmbiente <= 0) {
    telaFinal("GAME OVER\nO ecossistema colapsou!");
  } else if (produtividade <= 0) {
    telaFinal("GAME OVER\nA fazenda foi à falência!");
  } else if (turno > 15) {
    telaFinal("VITÓRIA!\nVocê alcançou o futuro sustentável!");
  }
}

function telaFinal(mensagem) {
  fill(0, 0, 0, 200);
  rect(0, 0, width, height);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(24);
  text(mensagem, width/2, height/2);
  noLoop(); // Para o jogo
}
