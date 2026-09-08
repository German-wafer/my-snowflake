const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");


const messages = [
  "you are someone's favourite person to sit next to.",
  "the thing you are building counts, even half finished.",
  "you are allowed to be a beginner for as long as you need.",
  "someone is going to love what you make with this.",
  "hot chocolate tastes better after a hard day. you've earned one.",
  "you ask good questions. that is the whole skill.",
  "the vibe shifts for the better when you walk into a room",
  "your future self is so grateful for the kindness you're showing yourself today",
  "Someone recently smiled just thinking about a funny thing you said",
  "you don't have to have it all figured out right now to be doing ok",
  "you dont have to have it all figured out to start",
  "a cozy blanket and your favourite song are waitung for you whenever youneed them",
  "every expert started by making a lot of messy mistakes",
  "your creativity doesn't have to be productive to be valuble",
  "a quiet moment of doing nothing is time well spent",
  "your kindness leaves a trace wherever you go",
  "allow yourself to enjoy the little things",
  "even on slow days, you are still moving forward"
];

button.addEventListener("click", () => {
    
  globe.classList.add("shaking");
  setTimeout(() => globe.classList.remove("shaking"), 600);
 
  const pick = Math.floor(Math.random() * messages.length);
  message.textContent = messages[pick];
});

function createSnowflakes(count = 20) {
    const existingFlakes = document.querySelectorAll(".snowflake");
    existingFlakes.forEach(flake => flake.remove())
    for (let i = 0; i < count; i++){
        const flake = document.createElement("div");
        flake.classList.add("snowflake");

        flake.style.left = `${Math.random() * 80 + 10}%`;
        flake.style.animationDuration = `${2+ Math.random() * 3}s`;
        flake.style.animationDelay = `${Math.random()*2}s`;
        flake.style.opacity = Math.random();

        const shapes = ["•", "❄", "✦", "✧"];
        flake.textContent = shapes[Math.floor(Math.random()* shapes.length)];

        document.body.appendChild(flake);
    }
}

createSnowflakes(50);