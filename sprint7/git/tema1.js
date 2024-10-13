// cream o functie in care avem un singur parametru si anume numar, fiind o variabila care contine valoarea numerica pe care o putem introduce
function div_zece(numar){
    //cu ajutorul functiei if unde avem si conditia daca numar este divizibil cu 10 avem true, iar daca nu false
    if(numar % 10 === 0){
        //trecand prin conditie, daca aceasta este adevarata ne va returna true numarul boolean
        return true;
    } else{
        // iar daca aceasta nu indeplineste conditia ne returneaza false
       return false;
    }
}
 // aici am introdus numerele cu ajutorul functiei de mai sus si am ales 2 numere, dar se mai pot adauga, iar cu ajutorul consol.log am afisat raspunsul
console.log("numarul introdus: 100, este divizibil cu 10?" + "  "  + div_zece(100));
console.log("numarul introdus: 89, este divizibil cu 10?" + "  "  + div_zece(89));