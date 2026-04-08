/*
    Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

        Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele

        Passo 2 - identificar o clique no botão
        
        Passo 3 - adicionar a classe "ativo" nos projetos escondidos

    Objetivo 2 - esconder o botão de mostrar mais
        Passo 1 - pegar o botão e esconder ele
*/

// Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

// Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele

const habilidades = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Angular",
    "Bootstrap",
    "Sass"
  ],
  backend: [
    "Java",
    "Spring Boot",
    "API REST",
    "PostgreSQL",
    "RabbitMQ",
    "GitHub",
    "Microsservices"
  ],
  analista: [
    "Power BI",
    "Excel",
    "SQL",
    "Microsoft 365",
    "Power Apps",
    "Power Automate",
    "Dataverse",
    "Graph",
    "SharePoint"
  ]
};

function abrirModal(tipo) {
  const modal = document.getElementById("modal-skills");
  const titulo = document.getElementById("modal-titulo");
  const lista = document.getElementById("modal-lista");

  lista.innerHTML = "";

  if (tipo === "frontend") titulo.textContent = "Habilidades Front-end";
  if (tipo === "backend") titulo.textContent = "Habilidades Back-end";
  if (tipo === "analista") titulo.textContent = "Habilidades Analista / BI";

  habilidades[tipo].forEach(skill => {
    const item = document.createElement("span");
    item.textContent = skill;
    lista.appendChild(item);
  });

  modal.classList.add("ativo");
}

function fecharModal() {
  document.getElementById("modal-skills").classList.remove("ativo");
}

window.addEventListener("click", function (e) {
  const modal = document.getElementById("modal-skills");
  if (e.target === modal) {
    fecharModal();
  }
});

document.addEventListener("mousemove", (e) => {
  document.documentElement.style.setProperty("--x", e.clientX + "px");
  document.documentElement.style.setProperty("--y", e.clientY + "px");
});

const trailContainer = document.querySelector(".trail-container");
const dots = [];
const totalDots = 12;

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

// cria os pontos
for (let i = 0; i < totalDots; i++) {
  const dot = document.createElement("div");
  dot.classList.add("trail-dot");
  trailContainer.appendChild(dot);

  dots.push({
    el: dot,
    x: mouseX,
    y: mouseY
  });
}

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateTrail() {
  let x = mouseX;
  let y = mouseY;

  dots.forEach((dot, index) => {
    dot.x += (x - dot.x) * 0.35;
    dot.y += (y - dot.y) * 0.35;

    const scale = 1 - index / totalDots * 0.75;
    dot.el.style.left = dot.x + "px";
    dot.el.style.top = dot.y + "px";
    dot.el.style.transform = `translate(-50%, -50%) scale(${scale})`;

    x = dot.x;
    y = dot.y;
  });

  requestAnimationFrame(animateTrail);
}

animateTrail();