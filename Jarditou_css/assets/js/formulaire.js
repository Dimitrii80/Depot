var formValid = document.getElementById('bouton_envoi');
            var prenom = document.getElementById('Prenom');
            var missPrenom = document.getElementById('missPrenom');
            var prenomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
            var nom = document.getElementById("nom");
            var missnom = document.getElementById("missnom");
            var nomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
            var postal = document.getElementById("postal");
            var misspostal = document.getElementById("misspostal");
            var postalValid = /^[0-9]*$/
            var Email = document.getElementById("Email");
            var missmail = document.getElementById("missmail");
            var EmailValid = /^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$/
            var date = document.getElementById("date");
            var missdate = document.getElementById("missdate");
            var dateValid = /^[0-9]+\/[0-9]+\/[0-9]+$/
            var Question = document.getElementById("Question");
            var missQuestion = document.getElementById("missQuestion");
            var QuestionValid = /^[0-9A-Za-z]+$/ 
            
            
            formValid.addEventListener('click', validation);
            formValid.addEventListener('click', verif_formulaire);
            
            // Validation champ Prenom
            function validation(event){
                //Si le champ est vide
                if (prenom.validity.valueMissing){
                    event.preventDefault();
                    missPrenom.textContent = 'Prénom manquant';
                    missPrenom.style.color = 'red';
                //Si le format de données est incorrect
                }else if (prenomValid.test(prenom.value) == false){
                    event.preventDefault();
                    missPrenom.textContent = 'Format incorrect';
                    missPrenom.style.color = 'red';
                }else{
                    missPrenom.textContent = " ";
                }
                
                
            // Validation champ Nom   
                if (nom.validity.valueMissing){
                    event.preventDefault();
                    missnom.textContent = 'Nom manquant';
                    missnom.style.color = 'red';
                //Si le format de données est incorrect
                }else if (nomValid.test(nom.value) == false){
                    event.preventDefault();
                    missnom.textContent = 'Format incorrect';
                    missnom.style.color = 'red';
                }else{ 
                    missnom.textContent = ' ';
                
                }
            // Validation champ code postal   
                if (postal.validity.valueMissing){
                    event.preventDefault();
                    misspostal.textContent = 'Code postal manquant';
                    misspostal.style.color = 'red';
                //Si le format de données est incorrect
                }else if (postalValid.test(postal.value) == false){
                    event.preventDefault();
                    misspostal.textContent = 'Format incorrect';
                    misspostal.style.color = 'red';
                }else{ 
                    misspostal.textContent = ' ';
                
                }
            // Validation champ mail
                if (Email.validity.valueMissing){
                    event.preventDefault();
                    missmail.textContent = 'Mail manquant';
                    missmail.style.color = 'red';
                //Si le format de données est incorrect
                }else if (EmailValid.test(Email.value) == false){
                    event.preventDefault();
                    missmail.textContent = 'Format incorrect';
                    missmail.style.color = 'red';
                }else{ 
                    missmail.textContent = ' ';
                
                }
        
            // Validation champ sexe
                if (date.validity.valueMissing){
                    event.preventDefault();
                    missdate.textContent = 'Date manquante';
                    missdate.style.color = 'red';
                //Si le format de données est incorrect
                }else if (dateValid.test(date.value) == false){
                    event.preventDefault();
                    missdate.textContent = 'Format incorrect';
                    missdate.style.color = 'red';
                }else{ 
                    missdate.textContent = ' ';
                
                }
            
                if (Question.validity.valueMissing){
                    event.preventDefault();
                    missQuestion.textContent = 'Veuillez entrez votre question';
                    missQuestion.style.color = 'red';
                //Si le format de données est incorrect
                }else if (QuestionValid.test(Question.value) == false){
                    event.preventDefault();
                    missQuestion.textContent = 'Format incorrect';
                    missQuestion.style.color = 'red';
                }else{ 
                    missQuestion.textContent = ' ';
                
                }
            
                function verif_formulaire()
                {
                 if(document.getElementById("sel1").value == "")  {
                   alert("Veuillez selectionner une ville!");
                   return false;
                  }
                }
            
            
            
            
            }