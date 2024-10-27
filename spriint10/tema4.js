// aici am definit funcția addNumber care primeste un numar nelimitat de argumente
function addNumber(...numbers) {
// am folosit metoda reduce pentru a calcula suma tuturor numerelor din sirul de numere
        return numbers.reduce((sum, current) => sum + current, 0);
}      
console.log(addNumber(1, 2, 3, 4, 5)); 
console.log(addNumber(10, 20, 30));     
console.log(addNumber()); 