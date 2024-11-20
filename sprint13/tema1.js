// Definim clasa Masina
class Masina {
    // Constructorul clasei pentru inițializarea proprietăților
    constructor(marca, model, culoare, kilometraj) {
      this.marca = marca;       // Marca mașinii
      this.model = model;       // Modelul mașinii
      this.culoare = culoare;   // Culoarea mașinii
      this.kilometraj = kilometraj; // Kilometrajul mașinii
    }
  
    // Metoda pentru afișarea proprietăților mașinii
    afiseazaProprietati() {
      return `Masina[marca=${this.marca}, model=${this.model}, culoare=${this.culoare}, kilometraj=${this.kilometraj}]`;
    }
  }
  
  // Funcția principală
  function main() {
    // Creăm mașini folosind clasa Masina
    const masina1 = new Masina("VOLVO", "XC-60", "Negru", "234 000");
    const masina2 = new Masina("Mazda", "CX-5", "Verde", "111 000");
    const masina3 = new Masina("Dacia", "BIGGSTER", "Albastru", "20 000");
  
    // Afișăm proprietățile fiecărei mașini
    console.log(masina1.afiseazaProprietati());
    console.log(masina2.afiseazaProprietati());
    console.log(masina3.afiseazaProprietati());
  }
  
  // Apelăm funcția main pentru a rula programul
  main();
  