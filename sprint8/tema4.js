// cream o functie pentru numararea vocalelor
function numaraVocale(sir){
    //aici am facut definirea vocalelor
    const vocale = "aeiouAEIOU";
    //am initializat si contorul cu 0 pt numararea vocalelor
    let count = 0;

    // iar cu ajutorul unui for care va itera prin fiecare sir din caracter
    for (let i = 0; i < sir.length; i++) {
    // iar cu ajutorul unui if vom verifica daca caracterul curent este o vocala 
    if (vocale.includes(sir[i])) { 
        //aici incrementez contorul si daca caracterul va fi o vocala acesta se incrementeaza cu 1
        count++; 
    }
}
    //cu acest return se returneaza numarul de vocale
    return count;
}
// aici am sa pun un text din care se va lua vocalele
const text = "Într-o dimineață însorită, Maria a decis să facă o plimbare prin parc. Aerul proaspăt și sunetele păsărilor o făceau să se simtă bine. Pe aleile parcului, a întâlnit mulți alți oameni care se bucurau de vremea frumoasă. Unii alergau, alții se relaxau pe bănci, iar copiii se jucau cu mingea. "
console.log("Numarul de vocale din sir este:" + "", numaraVocale(text));