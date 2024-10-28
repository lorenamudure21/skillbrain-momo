// pentru inceput definesc un sir de numere
const numere = [12,36,85,90,2,5,6,23];

//pnetru calcularea sumei o sa folosesc un for si initializez suma cu 0
let suma = 0

//am creat un for unde conditia i < numere.length face bucla sa ruleze pana cand i este egal cu unul din numere, deci va rula cat timp i este mai mic decat numerele puse de mine in sir
for(i=0; i < numere.length; i++){
    //aici se adauga fiecare numar la suma 
    suma += numere[i];
}

console.log("Suma numerelor din sir este:" + "", suma);