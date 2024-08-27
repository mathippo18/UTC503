function quatre(){
   console.log("Part 1")
    for (let i = 0; i <= 5; i++){
        console.log(i)
    }
    console.log("Part 2")
     // Initialisation des deux premières valeurs de Fibonacci
let a = 0;
let b = 1;

// Boucle pour générer les 10 premiers nombres de Fibonacci
for (let i = 0; i < 10; i++) {
    // Affiche la valeur actuelle de a
    console.log(a);
    
    // Calculer la prochaine valeur de Fibonacci
    let temp = a + b;
    
    // Mise à jour des valeurs de a et b
    a = b;
    b = temp;
}

    console.log("Part 3")
     // Le nombre secret à deviner
const secret =Math.floor(Math.random() * 10);

// Nombre maximum de tentatives
let attempts = 3;

// Boucle while pour limiter le nombre de tentatives
while (attempts > 0) {
    // Demande à l'utilisateur de deviner un nombre
    let guess = prompt("Devinez le nombre secret entre 1 et 10 :");
    
    // Convertir l'entrée de l'utilisateur en nombre
    guess = parseInt(guess, 10);

    // Vérification si la réponse est correcte
    if (guess === secret) {
        alert("Bravo ! Vous avez deviné le nombre secret.");
        break; // Sortir de la boucle si le nombre est trouvé
    } else {
        attempts--; // Décrémente le nombre de tentatives restantes

        if (attempts > 0) {
            alert("Incorrect. Il vous reste " + attempts + " tentative(s).");
        } else {
            alert("Désolé, vous avez épuisé toutes vos tentatives. Le nombre secret était " + secret + ".");
        }
    }
}

    }