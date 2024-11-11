// am definit o functie numita countLetter care primeste cele doua argumente
function countLetter(str, letter) {
    // aici am initializat variabila count la 0 pentru a tine evidenta numarului de aparitii
    let count = 0;
    
    for (let i = 0; i < str.length; i++) { 
        if (str[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
} 
console.log(countLetter("Ana are mere", "e"));
