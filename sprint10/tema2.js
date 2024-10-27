// am definit o funcție numita generateRandomInRange care primeste doua argumente: start si end
function generateRandomInRange(start, end) {

//aici se va calcula diferenta dintre capetele intervalului adica lungimea acestuia prin scăderea lui start din end
let range = end - start;
  
//cu ajutorul functiei Math.random ni se va genera un numar aleatoriu între 0 inclusiv și 1 exclusiv
//apoi am folosit Math.floor pentru a obtine un numar intreg mai mic decât range
let randomInRange = Math.floor(Math.random() * range);
  
//se va aduna start la rezultatul obținut pentru a muta intervalul generat
let randomNumber = start + randomInRange;
  
//acest return va returna numarul aleatoriu generat, care se află acum în intervalul [start, end).
    return randomNumber;
}
 
console.log(generateRandomInRange(19, 30)); 
  
  