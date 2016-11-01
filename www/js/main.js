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

var naves_logros_nada=["img/logros/nave1.png","img/logros/nave2.png","img/logros/nave3.png"];

window.onload = init;
var seleccion;
var cont;
var avatar;
var sexo;
var sex;
var roca;
var cont_logros=0;
var cont_galaxia1=0;
var cont_galaxia2=0;

function init()
{
	$('#seccion_personajes').hide();
	$('#seccion_nino').hide();
	$('#seccion_nina').hide();
	$('#seccion_menu').hide();
	$('#seccion_logros').hide();
	$('#seccion_galaxia1').hide();

	$('#btn_empezar_inicio').on('click',empezar_inicio);

	$('#nino').on('click',seleccionarSexo);
	$('#nina').on('click',seleccionarSexo);

	$('#btn_siguiente_avatar_nino').on('click',cambiar_avatar);
	$('#btn_volver_avatar_nino').on('click',cambiar_avatar);
	$('#btn_siguiente_avatar_nina').on('click',cambiar_avatar);
	$('#btn_volver_avatar_nina').on('click',cambiar_avatar);

	$('#btn_empezar_nino').on('click',empezar);
	$('#btn_empezar_nina').on('click',empezar);

	$('#btn_inicio_menu').on('click',inicio);
	$('#btn_logros_menu').on('click',logros);

	$('#btn_inicio_logros').on('click',inicio);

	$('#btn_logro_siguiente').on('click',galaxias_logros);
	$('#btn_logro_volver').on('click',galaxias_logros);

	$('#galaxia1').on('click',galaxia1);
	$('#galaxia2').on('click',galaxia2);
	$('#galaxia3').on('click',galaxia3);
}
function empezar_inicio(){
	$('#seccion_inicio').hide();
	$('#seccion_personajes').show();
}
function seleccionarSexo(evt){
	seleccion = evt.target.id;
	$('#seccion_personajes').hide();
	$('#seccion_'+seleccion).show();
	avatar=seleccion=="nino";
	cont=0;
	if (avatar) {
		sexo=ninos;
		roca=roca_ninos;
		sex="nino";	
	}else{
		sexo=ninas;
		roca=roca_ninas;
		sex="nina";
	}
}

function cambiar_avatar(evt){
	seleccion = evt.target.id;
	if (seleccion=="btn_siguiente_avatar_nino") {
		aumentoavatar();
	}
	if (seleccion=="btn_volver_avatar_nino") {
		disminuyoavatar();
	}	
	if (seleccion=="btn_siguiente_avatar_nina") {
		aumentoavatar();
	}
	if (seleccion=="btn_volver_avatar_nina") {
		disminuyoavatar();
	}	
}

function aumentoavatar(){
	if (cont==sexo.length-1) {
		cont=0;
		cambiarImagen(cont,sexo);
	}else{
		cont++;
		cambiarImagen(cont,sexo);
	}
}
function disminuyoavatar(){
	if (cont==0) {
		cont=sexo.length-1;
		cambiarImagen(cont,sexo);
	}else{
		cont--;
		cambiarImagen(cont,sexo);
	}
}


function cambiarImagen(cont,sexo){
	var imagen=sexo[cont];
	$('#avatar_'+sex).attr("src",imagen);
}

function empezar(evt){
	seleccion=evt.target.id;
	if (seleccion=="btn_empezar_nino") {
		$("#nin_roca").attr("src",roca[cont]);
	}else{
		$("#nin_roca").attr("src",roca[cont]);
	}
	$('#seccion_menu').show();
	$('#seccion_'+sex).hide();

}


function inicio(evt){
	var seccion_actual=evt.target.parentNode.id;
	$('#'+seccion_actual).hide();
	$('#seccion_menu').show();
}
function logros(evt){
	var seccion_actual=evt.target.parentNode.id;
	$('#'+seccion_actual).hide();
	$('#seccion_logros').show();
}

function galaxias_logros(evt){
	var btn=evt.target.id;
	if (btn=="btn_logro_siguiente") {
		if (cont_logros==naves_logros_nada.length-1) {
			cont_logros=0;
			cambiarImagenNave(cont_logros);
		}else{
			cont_logros++;
			cambiarImagenNave(cont_logros);
		}
	}else{

		if (cont_logros==0) {
			cont_logros=naves_logros_nada.length-1;
			cambiarImagenNave(cont_logros);
		}else{
			cont_logros--;
			cambiarImagenNave(cont_logros);
		}
	}
}

function cambiarImagenNave(cont_logros){
	var imagen=naves_logros_nada[cont_logros];
	$('#img_logro').attr("src",imagen);
}


function galaxia1(evt){
	var seccion_actual=evt.target.parentNode.id;
	$('#'+seccion_actual).hide();
	$('#seccion_galaxia1').show();
}
function galaxia2(){
	if (!cont_galaxia1!=10) {
		console.log("Complete Galaxia Neptuniana");
	}
}
function galaxia3(){
	if (cont_galaxia2!=10) {
		console.log("Complete Galaxia Jupiter");
	}
}