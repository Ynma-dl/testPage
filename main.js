// Sélection des éléments
const button = document.querySelector("button");
const title = document.querySelector("h1");
const card = document.querySelector(".card");

// État du bouton
let clicked = false;

// Action au clic
button.addEventListener("click", () => {
    if (!clicked) {
        title.textContent = "🎉 Merci de ta visite !";
        button.textContent = "Réinitialiser";

        card.style.background = "#4B5AAC";
        card.style.color = "white";

        document.querySelector("p").textContent =
            "Tu viens d'utiliser JavaScript pour modifier la page en temps réel.";

        document.querySelector("p").style.color = "white";

        clicked = true;
    } else {
        title.textContent = "Bienvenue 👋";
        button.textContent = "Découvrir";

        card.style.background = "white";
        card.style.color = "black";

        document.querySelector("p").textContent =
            "Ceci est une petite page réalisée en HTML et CSS. Elle peut servir de base pour tes futurs projets.";

        document.querySelector("p").style.color = "#555";

        clicked = false;
    }
});

// Animation quand la souris entre
card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
});

// Animation quand la souris sort
card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
});