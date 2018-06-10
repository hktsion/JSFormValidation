'use strict';
document.addEventListener('DOMContentLoaded', function(){
	let hide = 'hide';
	let show = 'show';
	let states = ['show', 'hide'];

	//Cambiar de formulario
	let alinks = document.querySelectorAll('[class^="cambiar"]');
	let _2forms = document.querySelectorAll('section.sform');

	console.log(alinks);
	console.log(_2forms);

	/**
	* @PROCEDIMIENTO
	* Recoger el evento click sobre el enlace para cambiar de formulario
	**/

	alinks.forEach(function(index, el){
		index.addEventListener('click', function(){
			let aclass = index.classList[0].slice(-1);

			// >> Si tiene la clase hide, la quitamos y le ponemos la show
			cambiarDformulario(_2forms, states);
			
		}, true);
	});

}, true);



function cambiarDformulario(forms, css){
	//Formulario "Iniciar sesion"
	forms[0].classList.toggle(css[0]);
	forms[0].classList.toggle(css[1]);

	//Formulario1 "Registrarse" 
	forms[1].classList.toggle(css[0]);
	forms[1].classList.toggle(css[1]);
}