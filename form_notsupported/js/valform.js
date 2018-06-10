'use strict';
(function(document) {

	document.addEventListener('DOMContentLoaded', function(){

		//Recoge el formulario que estamos usando y lo valida
		let inputs = document.querySelectorAll('[type="submit"]');
		let forms = document.forms;
		let nelements = 0;
		let regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		let fields = [];
		let ids = [];
		let keys = [];
		let errores = {
			'email': '',
			'password': ''
		};

		inputs.forEach(function(index){
			switch (index.getAttribute('id')) {
				case "isubmit": index.addEventListener('click', function(e){
					e.preventDefault();
					validarIform(forms[0]);
				}, true); break;
				case "rsubmit": index.addEventListener('click', function(e){
					e.preventDefault();
					validarRform(forms[1]);
				}, true); break;
				default: break;
			}
		});


		// >>> VALIDACIÓN DE FORMULARIOS <<<
		function validarIform(f){ 			
			for (let i = 0; i < f.elements.length - 2; i++) {
				fields[i] = f.elements[i]; 
				ids[i] = fields[i].getAttribute('id');
				keys[i] = ids[i].substring(1);
			}

			//console.log(keys);

			//validacion de campos vacíos;
			valCamposVacios(fields, errores);
			for(let i = 0; i < ids.length; i++){
				let perrores = document.getElementById(ids[i]).nextElementSibling;
				let dynamicText = perrores.appendChild(document.createTextNode(errores[keys[i]])); 
				 //dynamicText.nodeValue = "the updated text";
				 errores[keys[i]] = '';
				}
				//console.log(errores);
			let email = document.getElementById('iemail').nextElementSibling.nodeValue;
			console.log(email);
			//validación de email;
			if(!valEmail()){

			}



			



		}

		function validarRform(f){
			
		}


		// >>> FUNCIONES DE VALIDACIÓN DE FORMULARIOS <<<
		function valCamposVacios(fld,e){
			for (let i = 0; i < fld.length; i++) {
				if((fld[i].value.trim()).length == 0){
					e[keys[i]] = 'El campo no puede quedar vacío';
				}
			}
			return e;
		}


		function valEmail(email, regexp) {
			return regexp.test(email);
		}


		function valNombre(nombre){}
		function valPass(password){}






	}, true);




/*	function validarForm(form){
		let form = document.forms;
		console.log(form);
	}
	*/
})(document); // Los objetos globales son pasados a la función anónima