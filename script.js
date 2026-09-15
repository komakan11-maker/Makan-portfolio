const canvas = document.createElement("canvas");

canvas.id = "cyber-background";

document.body.prepend(canvas);

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

for (let i = 0; i < 60; i++) {
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
        }

        ctx.beginPath();

        ctx.arc(
            particle.x,
            particle.y,
            particle.size,
            0,
            Math.PI * 2
        );

        ctx.fill();
    });

    requestAnimationFrame(animateBackground);
}

animateBackground();

window.addEventListener("resize", function() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});


const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function(event) {
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
});

const links = document.querySelectorAll("a");

links.forEach(function(link) {
    link.addEventListener("mouseenter", function() {
        cursor.style.width = "40px";
        cursor.style.height = "40px";
    });

    link.addEventListener("mouseleave", function() {
        cursor.style.width = "20px";
        cursor.style.height = "20px";
    });
});

