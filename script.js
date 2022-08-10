let form = document.getElementsByName("formulaire")[0];


function validerFormulaire(){

    let isValid = true;
	let list = document.querySelectorAll('input');
    for (let item of list){
		if(item.value === ''){
			isValid = false;
		}
		
	
    }
    if(!isValid || !valider()){

       alert("Veuillez terminez STP!")

    }
}

function terminer(formulaire){
	if(formulaire.check.checked){
		formulaire.inscription.desable=true
	}
	else{
		formulaire.inscription.desable=false
	}
}
function valider(){
	let mail = document.getElementById('mail').value;
	const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	let text = document.getElementById("text");
	if (mail.match(pattern)){
		text.innerHTML='Your E-mail is valid';
		text.style.color = 'green';
		return true;
	} 
	else {
		text.innerHTML='Your E-mail is invalid';
		text.style.color = 'red';
		return false;
	}
}