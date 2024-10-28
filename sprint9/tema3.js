// aici este o lista de obicte carti
const carti = [
    { titlu: "Hobbitul", autor: "J.R.R. Tolkien", esteCitită: true },
    { titlu: "Morometi", autor: "Marin Preda", esteCitită: false },
    { titlu: "Ion", autor: "Liviu Rebreanu", esteCitită: true },
    { titlu: "Baltagul", autor: "Mihail Sadoveanu", esteCitită: false }
  ];
  
      
  //aici am creat o functie care itereaza si afiseaza mesajul in functie de statutul cartii
  function afiseazaCarti(carti) {
    carti.forEach(function(carte) {
      if (carte.esteCitită) {
        console.log(`Ai citit deja "${carte.titlu}" de ${carte.autor}.`);
      } else {
        console.log(`Trebuie să citesti "${carte.titlu}" de ${carte.autor}.`);
      }
    });
  }
  
  // Apelam funcaia pentru a afisa mesajele
  afiseazaCarti(carti);
  