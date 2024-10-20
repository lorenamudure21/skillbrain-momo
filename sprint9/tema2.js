function removeProperty(obj, prop) {
    // aici clonez obiectul initial pentru a nu-l modifica pe cel original
    let newObj = { ...obj };
    
    //aici se va sterge proprietatea specificata
    delete newObj[prop];
    
    //iar aici se va returna noul obiect fara proprietatea respectiva
    return newObj;
  }
  
 // aici se defineste un obiect care are si 3 proprietati , name, age si city
  const originalObj = { name: "Ionut", age: 25, city: "Oradea" };
//aici apelam functia de remove si specific de proprietate doresc sa elimin
  const updatedObj = removeProperty(originalObj, "age");
  
  console.log(updatedObj);
  console.log(originalObj); 
  