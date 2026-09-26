// --- 1. FOND DE PARTICULES CYBER ---
const canvas = document.createElement("canvas");
canvas.id = "cyber-background";
document.body.prepend(canvas);

const ctx = canvas.getContext("2d");

function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
setCanvasSize();

const particles = [];
const particleCount = 60;

for (let i = 0; i < particleCount; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.2
    });
}

function animateBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#8b5cf6";

    particles.forEach(function(particle) {
        particle.y -= particle.speed;

        if (particle.y < 0) {
            particle.y = canvas.height;
            particle.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(animateBackground);
}

animateBackground();

window.addEventListener("resize", setCanvasSize);

// --- 2. CURSEUR PERSONNALISÉ ---
const cursor = document.querySelector(".cursor");

if (cursor) {
    document.addEventListener("mousemove", function(event) {
        cursor.style.left = event.clientX + "px";
        cursor.style.top = event.clientY + "px";
    });

    const hoverElements = document.querySelectorAll("a, .button, .card, .tech-card");

    hoverElements.forEach(function(element) {
        element.addEventListener("mouseenter", function() {
            cursor.style.width = "40px";
            cursor.style.height = "40px";
            cursor.style.backgroundColor = "rgba(139, 92, 246, 0.2)";
        });

        element.addEventListener("mouseleave", function() {
            cursor.style.width = "20px";
            cursor.style.height = "20px";
            cursor.style.backgroundColor = "transparent";
        });
    });
}