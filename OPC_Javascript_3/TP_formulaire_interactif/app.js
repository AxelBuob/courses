var form = document.getElementById('form'),
	sexe = document.getElementsByName('sexe'),
	nom = document.getElementById('nom'),
	prenom = document.getElementById('prenom'),
	age = document.getElementById('age'),
	pseudo = document.getElementById('pseudo'),
	password = document.getElementById('password'),
	confirm = document.getElementById('confirm'),
	pays = document.getElementById('pays');

function insertAfter(reference, node) {
	reference.parentNode.appendChild(node);
}

function validate(element,test,message) {
    if(element.nextElementSibling) {
        var error = element.nextElementSibling;
    }
    if(test) {
        if(!error){
            var error = document.createElement('span');
            error.textContent = message;
            error.className = "error";
            insertAfter(element,error);
        }
        return false;
    } else {
        if(error && error.className == 'error') {
            error.parentNode.removeChild(error);         
        }
        return true;
    }
}

function validateInputFields() {
    nom.addEventListener('change',function(e) {
        var test = this.value.length < 2,
            message = 'Pas moins de 2 caractères';
        validate(this,test,message);
    });

    prenom.addEventListener('change',function(e) {
        var test = this.value.length < 2,
            message = 'Pas moins de 2 caractères';
        validate(this,test,message);
    });

    age.addEventListener('change',function(e){
        var number = parseInt(this.value),
            test = number < 5 || number > 140,
            message = 'Un nombre compris entre 5 et 140';
        validate(this,test,message);
    });

    pseudo.addEventListener('change',function(e) {
        var test = this.value.length < 4,
            message = 'Pas moins de 4 caractères';
        validate(this,test,message);
    });

    password.addEventListener('change',function(e) {
        var test = this.value.length < 6,
            message = 'Pas moins de 6 caractères';
        validate(this,test,message);
    });

    confirm.addEventListener('change',function(e) {
        var test = this.value !== password.value,
            message = 'Doit être identique au premier mot de passe';
        validate(this,test,message);
    });
}


form.addEventListener('submit',function(e) {
    e.preventDefault();
    validateInputFields();
    var test = !sexe[0].checked && !sexe[1].checked,
        message = 'Un sexe doit être sélectionné';
    validate(sexe[1],test,message);

});

validateInputFields();






