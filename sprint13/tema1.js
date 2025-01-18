class Masina {
    constructor(marca, model, culoare, kilometraj) {
      this.marca = marca;       
      this.model = model;       
      this.culoare = culoare;   
      this.kilometraj = kilometraj; 
    }

    afiseazaProprietati() {
      return `Masina[marca=${this.marca}, model=${this.model}, culoare=${this.culoare}, kilometraj=${this.kilometraj}]`;
    }
}

function main() {
    const masina1 = new Masina("VOLVO", "XC-60", "Negru", "234 000");
    const masina2 = new Masina("Mazda", "CX-5", "Verde", "111 000");
    const masina3 = new Masina("Dacia", "BIGGSTER", "Albastru", "20 000");
  
    console.log(masina1.afiseazaProprietati());
    console.log(masina2.afiseazaProprietati());
    console.log(masina3.afiseazaProprietati());
}
  
main();
  