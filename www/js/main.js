var ninos=["img/avatars/nino/1.png","img/avatars/nino/2.png","img/avatars/nino/3.png"
		  ,"img/avatars/nino/4.png","img/avatars/nino/5.png","img/avatars/nino/6.png"
		  ,"img/avatars/nino/7.png","img/avatars/nino/8.png","img/avatars/nino/9.png"];

var ninas=["img/avatars/nina/10.png","img/avatars/nina/11.png","img/avatars/nina/12.png"
		  ,"img/avatars/nina/13.png","img/avatars/nina/14.png","img/avatars/nina/15.png"
		  ,"img/avatars/nina/16.png","img/avatars/nina/17.png","img/avatars/nina/18.png"
		  ,"img/avatars/nina/19.png","img/avatars/nina/20.png","img/avatars/nina/21.png"
		  ,"img/avatars/nina/22.png","img/avatars/nina/23.png"];

var roca_ninas=["img/avatars/roca_nina/10.png","img/avatars/roca_nina/11.png","img/avatars/roca_nina/12.png"
		 	 ,"img/avatars/roca_nina/13.png","img/avatars/roca_nina/14.png","img/avatars/roca_nina/15.png"
		 	 ,"img/avatars/roca_nina/16.png","img/avatars/roca_nina/17.png","img/avatars/roca_nina/18.png"
		  	,"img/avatars/roca_nina/19.png","img/avatars/roca_nina/20.png","img/avatars/roca_nina/21.png"
		  	,"img/avatars/roca_nina/22.png","img/avatars/roca_nina/23.png"];

var roca_ninos=["img/avatars/roca_nino/1.png","img/avatars/roca_nino/2.png","img/avatars/roca_nino/3.png"
		  	,"img/avatars/roca_nino/4.png","img/avatars/roca_nino/5.png","img/avatars/roca_nino/6.png"
		  	,"img/avatars/roca_nino/7.png","img/avatars/roca_nino/8.png","img/avatars/roca_nino/9.png"];


window.onload = init;
var seleccion;
var cont;
var avatar;

function init()
{
	$('#seccion_personajes').hide();
	$('#seccion_nino').hide();
	$('#seccion_nina').hide();
	$('#seccion_menu').hide();


	$('#btn_empezar_inicio').on('click',empezar_inicio);

	$('#nino').on('click',seleccionarSexo);
	$('#nina').on('click',seleccionarSexo);

	$('#btn_siguiente_avatar_nino').on('click',cambiar_avatar);
	$('#btn_volver_avatar_nino').on('click',cambiar_avatar);

	$('#btn_siguiente_avatar_nina').on('click',siguiente_avatar_nina);
	$('#btn_volver_avatar_nina').on('click',volver_avatar_nina);
	$('#btn_empezar_nino').on('click',empezar_nino);
	$('#btn_empezar_nina').on('click',empezar_nina);

}
function empezar_inicio(){
	$('#seccion_inicio').hide();
	$('#seccion_personajes').show();
}
function seleccionarSexo(evt){
	seleccion = evt.target.id;
	$('#seccion_personajes').hide();
	$('#seccion_'+seleccion).show();
	cont=0;
	avatar=seleccion=="nino";
}

function cambiar_avatar(evt){
	seleccion = evt.target.id;
	if (seleccion=="btn_siguiente_avatar_nino") {
		if (cont==ninos.length-1) {
			cont=0;
			cambiarImagen(cont);
		}else{
			cont++;
			cambiarImagen(cont);
		}
	}else{
		if (cont==0) {
			cont=ninos.length-1;
			cambiarImagen(cont);
		}else{
			cont--;
			cambiarImagen(cont);
		}
	}	
}
function cambiarImagen(cont){
	var imagen=ninos[cont];
	$('#avatar_nino').attr("src",imagen);
}



function siguiente_avatar_nina(){
	if (cont==ninas.length-1) {
		cont=0;
		var imagen=ninas[cont];
		$('#avatar_nina').attr("src",imagen);

	}else{
		cont++;
		var imagen=ninas[cont];
		$('#avatar_nina').attr("src",imagen);
	}
}
function volver_avatar_nina(){
	if (cont==0) {
		cont=ninas.length-1;
		var imagen=ninas[cont];
		$('#avatar_nina').attr("src",imagen);

	}else{
		cont--;
		var imagen=ninas[cont];
		$('#avatar_nina').attr("src",imagen);
	}
}

function empezar_nino(){
	$('#seccion_menu').show();
	$('#seccion_nino').hide();
	console.log("nino");

}

function empezar_nina(){
	$('#seccion_menu').show();
	$('#seccion_nina').hide();
	console.log("nina");
	
}