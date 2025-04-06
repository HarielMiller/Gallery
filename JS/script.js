const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createParticles(count) {
  particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      speedY: Math.random() * 0.3 + 0.2,
      alpha: Math.random() * 0.5 + 0.2
    });
  }
}
createParticles(100);

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 200, ${p.alpha})`;
    ctx.fill();
    p.y += p.speedY;
    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

const frasesVanGogh = [
  "“O que seria da vida se não tivéssemos coragem de tentar nada?”",
  "“Eu sonho minha pintura e depois pinto meu sonho.”",
  "“A tristeza durará para sempre.”",
  "“Não tenho certeza de nada, mas a visão das estrelas me faz sonhar.”",
  "“A normalidade é uma estrada pavimentada: é confortável para se caminhar, mas nenhuma flor cresce nela.”"
];

let indice = 0;
const quoteElement = document.getElementById("quote-text");

setInterval(() => {
  indice = (indice + 1) % frasesVanGogh.length;
  quoteElement.textContent = frasesVanGogh[indice];
}, 6000);
