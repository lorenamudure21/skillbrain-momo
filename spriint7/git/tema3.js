//cream o functie cu zilele saptmani iar ca si parametru va fi numarul zilei
function zilele_saptamani(nrZile){
    //cu ajutorul lui let am putut fac ce un string care sa ne afiseze zilele dorite
    let numeZi;
    // am folosit switch case pentru a putea alege zilele dorite, de exemplu daca se va alege numarul 7 caesta va intra in case 7 si va afisa ziua descrisa in acel caz apoi va iesi din switch, adica se astepta alegerea cazului
    switch (nrZile) {
        case 1:
            numeZi = "Luni";
            break;
        case 2:
            numeZi = "Marti";
            break;
        case 3:
            numeZi = "Miercuri";
            break;
        case 4:
            numeZi = "Joi";
            break;
        case 5:
            numeZi = "Vineri";
            break;
        case 6:
            numeZi = "Sâmbătă";
            break;
        case 7:
            numeZi = "Duminică";
            break;
        // am creat un default care daca utilizatorul alege un numar peste 7 atunci in timpul rularii nu se va gasi la niciunuk dintre cazuri si ne va arata mesajul ca daca dorim sa ne apara numele unei zile trebuie sa alegem nr intre 1 si 7
        default: 
            numeZi = "Numar incorect! Doar numerele intre 1 si 7 vor putea fi introduse";
        }
    return numeZi;
}

//iar cu ajutorul console.log am afisat cazurile care au fost selectate
console.log(zilele_saptamani(4));
console.log(zilele_saptamani(7));
console.log(zilele_saptamani(1));
console.log(zilele_saptamani(9));