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

var logros=["img/logros/superado1.png","img/logros/superado2.png","img/logros/superado3.png","img/logros/superado4.png",
			"img/logros/superado5.png","img/logros/superado6.png","img/logros/superado7.png","img/logros/superado8.png"];

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
var cont_niveles=0;


function init()
{
	
	//cargarInicio();
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

	$('#btn_inicio_galaxia1').on('click',inicio);
	$('#btn_logros_galaxia1').on('click',logros);
	$('#empezar_galaxia1').on('click',mapaGalaxia1);


	$('#planeta_nivel1').on('click',empezarNivel1);
	$('#planeta_nivel2').on('click',empezarNivel2);
	$('#planeta_nivel3').on('click',empezarNivel3);
	$('#planeta_nivel4').on('click',empezarNivel4);
	$('#planeta_nivel5').on('click',empezarNivel5);
	$('#planeta_nivel6').on('click',empezarNivel6);
	$('#planeta_nivel7').on('click',empezarNivel7);
	$('#planeta_nivel8').on('click',empezarNivel8);


	$('#btn_inicio_perdido').on('click',inicio);
	$('#btn_logros_perdido').on('click',logros);


	var numBtn_ini = $('.btn_inicio').length
	for (var i = 1; i <= 4; i++) {
		$('#btn_inicio_lvl'+i).on('click',inicio);
	}
	for (var i = 1; i <=8; i++) {
		$('#btn_inicio_mapa'+i).on('click',inicio);
	}

	cargarDnDlvl1();
	cargarDnDlvl2();
}

function cargarDnDlvl1(){
	/*Drag and drop nivel 1*/
	 	$( "#nave_lvl1" ).draggable({
		  revert: true,
		  scroll: false
		});
	    $( "#planeta_lvl1" ).droppable({
	      drop: function( event, ui ) {
	        var ensayo=event.target.parentElement.id;
	       
	        if (event.toElement.id=="nave_lvl1") {
	          	//$( "#"+event.toElement.id).draggable( "option", "revert", true );
	           	$('#'+ensayo).hide();
	           	var a=cont_niveles+1;
	           	logro(a);
				//$('#seccion_mapa'+a+'_galaxia1').show();

	        }else{
	          $( "#"+event.toElement.id).draggable( "option", "revert", true );
	        }
	      }
	    });
}

var cont_perder_lvl2=0;
var cont_ganar_lvl2=0;
function cargarDnDlvl2(){
	var ensayo;
		var seccion_actual;

		$( "#nave_lvl2" ).draggable({
		  revert: true,
		  scroll: false
		});
		$( "#marciano_lvl2" ).draggable({
		  revert: true,
		  scroll: false
		});
		$( "#planeta_lvl2" ).draggable({
		  revert: true,
		  scroll: false
		});

	    $( "#nave2_lvl2" ).droppable({
	      drop: function( event, ui ) {
	      	seccion_actual=event.target.parentElement.id;
	        if (event.toElement.id=="marciano_lvl2") {
	         	 $( "#marciano_lvl2" ).hide();
	        	cont_ganar_lvl2++;
	        	verificarlvl2(cont_ganar_lvl2,cont_perder_lvl2,seccion_actual);
	        }else{
	        	cont_perder_lvl2++;
	        	verificarlvl2(cont_ganar_lvl2,cont_perder_lvl2,seccion_actual);
	          	$( "#"+event.toElement.id).draggable( "option", "revert", true );
	        }
	      }
	    });

	    $( "#maciano2_lvl2" ).droppable({
	      drop: function( event, ui ) {
	       seccion_actual=event.target.parentElement.id;
	        if (event.toElement.id=="planeta_lvl2") {
	          	 $( "#planeta_lvl2" ).hide();
	        	cont_ganar_lvl2++;
	        	verificarlvl2(cont_ganar_lvl2,cont_perder_lvl2,seccion_actual);
	        }else{
	        	cont_perder_lvl2++;
	        	verificarlvl2(cont_ganar_lvl2,cont_perder_lvl2,seccion_actual);
	          $( "#"+event.toElement.id).draggable( "option", "revert", true );
	        }
	      }
	    });

	    $( "#nino_lvl2" ).droppable({
	      drop: function( event, ui ) {
	       seccion_actual=event.target.parentElement.id;
	        if (event.toElement.id=="nave_lvl2") {
	          	 $( "#nave_lvl2" ).hide();
	        	cont_ganar_lvl2++;
	        	verificarlvl2(cont_ganar_lvl2,cont_perder_lvl2,seccion_actual);
	        }else{
	        	cont_perder_lvl2++;
	        	verificarlvl2(cont_ganar_lvl2,cont_perder_lvl2,seccion_actual);
	          $( "#"+event.toElement.id).draggable( "option", "revert", true );
	        }
	      }
	    });


}

function verificarlvl2(cont,cont_perder,seccion_actual){

	    if (cont==3) {
	    	$( "#"+seccion_actual).hide();
	    	var a=cont_niveles+1;
	     	logro(a);
	     	 $( "#marciano_lvl2" ).show();
			 $( "#planeta_lvl2" ).show();
			$( "#nave_lvl2" ).show();
			cont_ganar_lvl2=0;
	   	   cont_perder_lvl2=0;
	    }
	    if (cont_perder==3) {
	    	$( "#"+seccion_actual).hide();
	    	perder(a,seccion_actual);
	    	cont_ganar_lvl2=0;
	    	cont_perder_lvl2=0;
	    }


}


function logro(a){
	$('#SuperLogro').attr("src",logros[a-2]);
	$('#Logro').show();
	setTimeout(function(){ 
		$('#Logro').hide();
		$('#seccion_mapa'+a+'_galaxia1').show();
	}, 3000);
}
function perder(a,seccion_actual) {
	$('#seccion_perdido').show();
	setTimeout(function(){ 
		$('#seccion_perdido').hide();
		$('#'+seccion_actual).show();
	}, 3000);
}


function empezar_inicio(){

	//window.plugins.NativeAudio.stop( 'empezar' );
	//window.plugins.NativeAudio.loop( 'fondo' );
	botonClick();
	$('#seccion_inicio').hide();
	$('#seccion_personajes').show();
	//window.plugins.NativeAudio.unload( 'empezar' );
}
function seleccionarSexo(evt){

	botonClick();
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
	botonClick();
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
	botonClick();
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
	botonClick();
	var seccion_actual=evt.target.parentNode.id;
	$('#'+seccion_actual).hide();
	$('#seccion_menu').show();
}
function logros(evt){
	botonClick();
	var seccion_actual=evt.target.parentNode.id;
	$('#'+seccion_actual).hide();
	$('#seccion_logros').show();
}

function galaxias_logros(evt){
	botonClick();
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
	botonClick();
	var seccion_actual=evt.target.parentNode.id;
	$('#'+seccion_actual).hide();
	$('#seccion_galaxia1').show();
}
function galaxia2(){
	botonClick();
	if (!cont_galaxia1!=10) {
		console.log("Complete Galaxia Neptuniana");
	}
}
function galaxia3(){
	botonClick();
	if (cont_galaxia2!=10) {
		console.log("Complete Galaxia Jupiter");
	}
}


//-------------Inicio MARULANDA

function mapaGalaxia1(evt){
	botonClick();
	var seccion_actual=evt.target.parentNode.id;
	$('#'+seccion_actual).hide();
	$('#seccion_mapa1_galaxia1').show();
}
function empezarNivel1(evt){
	botonClick();
	var seccion_actual=evt.target.parentNode.id;
	$('#'+seccion_actual).hide();
	cont_niveles=1;
	conteo(cont_niveles);

}
function empezarNivel2(evt){
	botonClick();
	var seccion_actual=evt.target.parentNode.id;
	$('#'+seccion_actual).hide();
	cont_niveles=2;
	conteo(cont_niveles);
}
function empezarNivel3(evt){
	botonClick();
	var seccion_actual=evt.target.parentNode.id;
	$('#'+seccion_actual).hide();
	cont_niveles=3;
	conteo(cont_niveles);
}
function empezarNivel4(evt){
	botonClick();
	var seccion_actual=evt.target.parentNode.id;
	$('#'+seccion_actual).hide();
	cont_niveles=4;
	conteo(cont_niveles);
}
function empezarNivel5(evt){
	botonClick();
	var seccion_actual=evt.target.parentNode.id;
	$('#'+seccion_actual).hide();
	$('#seccion_nivel5').show();
}
function empezarNivel6(evt){
	botonClick();
	var seccion_actual=evt.target.parentNode.id;
	$('#'+seccion_actual).hide();
	$('#seccion_mapa7_galaxia1').show();
}
function empezarNivel7(evt){
	botonClick();
	var seccion_actual=evt.target.parentNode.id;
	$('#'+seccion_actual).hide();
	$('#seccion_mapa8_galaxia1').show();
}
function empezarNivel8(evt){
	botonClick();
	var seccion_actual=evt.target.parentNode.id;
	$('#'+seccion_actual).hide();
	$('#seccion_perdido').show();
}



function botonClick(){
	//window.plugins.NativeAudio.play( 'click' );
}/*
function cargarInicio(){
	window.setTimeout( function(){
       window.plugins.NativeAudio.loop( 'empezar' );
    }, 1500 );
}*/


function conteo(cont){

	$('#seccion_321').show();
	cambiarImgConteo(cont);	
	
}

function cambiarImgConteo(cont){
	setTimeout(function(){ $('#numero1').addClass('numeros animated zoomOut');}, 1000);
	setTimeout(function(){ $('#numero2').addClass('numeros animated zoomOut');}, 2000);
	setTimeout(function(){ $('#numero3').addClass('numeros animated zoomOut');$('#ya').show();}, 3000);
	setTimeout(function(){ 
		$('#ya').addClass('animated zoomOut');
		$('#seccion_321').hide();
		$('#seccion_nivel'+cont).show();
	}, 4000);
	removerClasesConteo();
}

function removerClasesConteo(){
	$('#numero1').removeClass('animated zoomOut');
	$('#numero2').removeClass('animated zoomOut');
	$('#numero3').removeClass('animated zoomOut');
	$('#ya').removeClass('animated zoomOut');
	$('#ya').hide();
}