// am definit o functie numita countLetter care primeste cele doua argumente
function countLetter(str, letter) {

// aici am initializat variabila count la 0 pentru a tine evidenaa numarului de aparitii
let count = 0;
  
// aici am folosit acest for pentru parcurgerea fiecarui caracter din sir
    for (let i = 0; i < str.length; i++) { 

// se va verifica cu ajutorului acestui if dacă caracterul str[i] este egal cu litera căutată
      if (str[i] === letter) {
        
// iar daca litera este gasita se va incrementa count ul cu 1.
        count++;
      }
    }
  
// iar cu ajutorul return ului vom afla care este valoarea finala a lui count el reprezentand numarul de aparitii ale literei in sir
    return count;
}

  console.log(countLetter("Ana are mere", "a")); 
  
  