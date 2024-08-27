function cinq(){
    console.log("Part 1")
        // Déclaration du tableau numbers
        const numbers = [1, 2, 3, 4, 5];

        // Parcourt le tableau à l'aide d'une boucle for
        for (let i = 0; i < numbers.length; i++) {
            // Si le nombre est 3, sortir de la boucle
            if (numbers[i] === 3) {
                break;
            }

            // Sinon, affiche le nombre dans la console
            console.log(numbers[i]);
        }       

     console.log("Part 2")
 // Boucle principale pour continuer à exécuter la calculatrice jusqu'à ce que l'utilisateur veuille quitter
while (true) {
    // Demander à l'utilisateur d'entrer le premier nombre
    let num1 = prompt("Entrez le premier nombre (ou 'q' pour quitter) :");

    // Vérifier si l'utilisateur veut quitter
    if (num1.toLowerCase() === "q") {
        console.log("Merci d'avoir utilisé la calculatrice. Au revoir!");
        break; // Sortir de la boucle pour terminer le programme
    }

    // Convertir l'entrée en nombre
    num1 = parseFloat(num1);

    // Demander à l'utilisateur d'entrer le deuxième nombre
    let num2 = prompt("Entrez le deuxième nombre :");
    num2 = parseFloat(num2);

    // Demander à l'utilisateur de choisir une opération
    let operation = prompt("Entrez l'opération à effectuer (+, -, *, /) :");

    // Initialiser une variable pour stocker le résultat
    let result;

    // Effectuer l'opération en fonction de l'entrée de l'utilisateur
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            // Gestion de la division par zéro
            if (num2 === 0) {
                console.log("Erreur : Division par zéro impossible.");
                continue; // Recommencer la boucle si division par zéro
            } else {
                result = num1 / num2;
            }
            break;
        default:
            console.log("Opération invalide. Veuillez entrer une opération valide.");
            continue; // Recommencer la boucle si l'opération est invalide
    }

    // Afficher le résultat de l'opération
    console.log(`Résultat : ${num1} ${operation} ${num2} = ${result}`);
}

 
     }