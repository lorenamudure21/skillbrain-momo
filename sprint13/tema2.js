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

  participaLaCampionat(pozitiaInCampionat) {
    if (pozitiaInCampionat > 0) {
      console.log(`Am castigat locul ${pozitiaInCampionat} cu ${this.afiseazaProprietati()}`);
    } else {
      console.log(`Nu am castigat niciun premiu cu ${this.afiseazaProprietati()}`);
    }
  }
}

function main() {

  const masina1 = new Masina("VOLVO", "XC-60", "Negru", "234 000");
  const masina2 = new Masina("Mazda", "CX-5", "Verde", "111 000");
  const masina3 = new Masina("Dacia", "BIGGSTER", "Albastru", "20 000");

  masina1.participaLaCampionat(1); 
  masina2.participaLaCampionat(3); 
  masina3.participaLaCampionat(-1); 
}

main();
