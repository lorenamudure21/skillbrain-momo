//cream o functie pentru inversarea sirului apoi v-oi folosi metoda reverse
function inverseazaSir(sir){
    return sir.reverse();
}

//initializam un sir de numere
const numere = [20, 21, 22, 23, 24, 25];

//aici am apelat functia si stoarea lor s-a facut in numereInversate
const numereInversate = inverseazaSir(numere);

console.log("Sirul initial este:" + "", numere);
console.log("Sirul inversat este:" + "", numereInversate);