const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const card = document.getElementById("card");

// When YES is clicked
yesBtn.addEventListener("click", () => {
    card.innerHTML = `
        <img src="bubududu.gif" class="cute-img">
        <h1>Yay! 💖 I love you! 😘</h1>
        <p>You made me the happiest 💕</p>
    `;
});

// When NO is hovered (moves away)
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
