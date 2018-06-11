'use strict';
(function(d) {
	d.addEventListener('DOMContentLoaded', function(){
		//Recoge el formulario que estamos usando y lo valida
		let inputs = d.querySelectorAll('[type="submit"]');
		let forms = d.forms;
		let nelements = 0;
		//el pattern lo he pillado de internet por hacer la validación rapida, pero es bastante mas sencilla
		let regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		let fields = [];
		let ids = [];
		let keys = [];
		let errores1 = { 'email': '', 'password': '' };
		let errores2 = { 'nombre': '', 'apellidos': '', 'email': '', 'password': '', 'password2': ''
	};

	inputs.forEach(function(index){
		switch (index.getAttribute('id')) {
			case "isubmit": index.addEventListener('click', function(e){
				e.preventDefault();
				validar__FORM__crearCuenta(forms[0]);
			}, true); break;
			case "rsubmit": index.addEventListener('click', function(e){
				e.preventDefault();
				validar__FORM__registrarse(forms[1]);
			}, true); break;
			default: break;
		}
	});

	function clavarErrores(err){
		for(let i = 0; i < ids.length; i++){
			let perrores = d.getElementById(ids[i]).nextElementSibling;
			perrores.innerHTML = '';
			let dynamicText = perrores.appendChild(d.createTextNode(err[keys[i]])); 
			//errores1[keys[i]] = '';
		}
	}

	function recogerCampos(f){
		for (let i = 0; i < f.elements.length - 2; i++) {
			fields[i] = f.elements[i]; 
			ids[i] = fields[i].getAttribute('id');
			keys[i] = ids[i].substring(1);
		}
	}

	// >>> VALIDACIÓN DE FORMULARIO 1 <<<
	function validar__FORM__crearCuenta(f){ 			
		recogerCampos(f);
		valCamposVacios(fields, errores1);
		clavarErrores(errores1);
		let email = d.getElementById('iemail').value;
		if(!valEmail(email, regexp) && (email.trim()) != ''){
			errores1['email'] = 'Introduce un correo electrónico válido';
			clavarErrores(errores1);
		}
	}

	// >>> VALIDACIÓN DE FORMULARIO 1 <<<
	function validar__FORM__registrarse(f){
		recogerCampos(f);
		valCamposVacios(fields, errores2);
		clavarErrores(errores2);
		valTextos( [document.getElementById('rnombre').value,document.getElementById('rapellidos').value], keys);
		clavarErrores(errores2);
		let email = d.getElementById('remail').value;
		if(!valEmail(email, regexp) && (email.trim()) != ''){
			errores2['email'] = 'Introduce un correo electrónico válido';
			clavarErrores(errores2);
		}else{
			errores2['email'] = '';
		}
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

	function valTextos(vs, key){
		let ncaracteres = 3;
		for(let i=0;i<2;i++){
			if( (vs[i].trim() != '') && (vs[i].trim().length >= ncaracteres)){
				errores2[keys[i]] = '';
			}else{
				errores2[key[i]] = 'El campo debe contener al menos '+ncaracteres+' letras';
			}
			ncaracteres++;
		}
	}

	function valEmail(email, regexp) {
		return regexp.test(email);
	}

	function valPass(allpass){
			//Aqui TODO la función de validar las 2 passwords.
			//Los errores se acumulan en el objeto errores2 que está definido arriba
		}
	}, true);
})(document); // Los objetos globales son pasados a la función anónima