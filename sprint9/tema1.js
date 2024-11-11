// am creat o functie pentru a crea un obiect de tip reteta, avand 3 parametrii
function creeazaReteta(titlu, portii, ingrediente){
    const reteta = {
 // primul parametru e titlu si anume un sir de caractere, unde avem numele reteti
        titlu,
// aici avem un parametru numar care indica portiile
        portii,
// aici este o lista(arrary) cu ingredientele necesare
        ingrediente
    };
//iar cu console log vom afisa informatii despre reteta
console.log("Titlu: " + reteta.titlu);
console.log("Portii: " + reteta.portii);
console.log("Ingrediente: ");

//iar cu forEach vom parcurge lista de ingrediente
reteta.ingrediente.forEach(function(ingredient) {
//"- " cu ajutorul acestuia vom pune separat fiecare ingredient
    console.log("- " + ingredient);

});
return reteta;

}

//aici am creat o reteta cu 4 portii si o lista de ingrediente
const retetaMea = creeazaReteta("Clatite pufoase", 4, ["lapte", "faina", "oua", "zahar", "sare", "apa minerala" ]);