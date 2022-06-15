var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var nom = prompt("Entrez un prénom");

  if (tab.indexOf(nom) > -1)
   {
    var indice = tab.indexOf(nom);
    tab.splice(indice, 1);
    tab.push(" ");
    
  } 

  else 
  {
    alert("Le prénom n'est pas trouvé");
    
  }
console.log(tab)