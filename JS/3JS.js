
function trois(){
    console.log("Part 1")
    let num
    num = prompt("Veuillez choisir un nombre")
    if (num > 10){
        console.log("Grand nombre")
    }
    else{
        console.log("Petit nombre")
    }
    console.log("Part 2")
    let a
    let b
    let c
    a = prompt("Veuillez choisir un 1er nombre")
    b = prompt("Veuillez choisir un 2eme nombre")
    c = prompt("Veuillez choisir un 3eme nombre")
    console.log(a,b,c)
    if (a > b && a > c){
        alert("Le plus grand nombre est " + a)
    }
    else if (b > c) {
        alert("Le plus grand nombre est " + b)
    }
    else {
        alert("Le plus grand nombre est " + c)
    }
    }