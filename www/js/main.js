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

var logros_inicio=["img/logros/ficha1_nave.png","img/logros/ficha2_nave.png","img/logros/ficha3_nave.png","img/logros/ficha4_nave.png"
,"img/logros/ficha5_nave.png","img/logros/ficha6_nave.png","img/logros/ficha7_nave.png","img/logros/nave_completa.png"];

var gifs=["img/gifs/gif1.gif","img/gifs/gif2.gif","img/gifs/gif3.gif","img/gifs/gif4.gif","img/gifs/gif5.gif","img/gifs/gif6.gif",
"img/gifs/gif7.gif","img/gifs/gif8.gif"];

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
var cont_logros_estado;


function init()
{
	
	cargarInicio();
	$('#btn_empezar_inicio').off().on('click',empezar_inicio);

	$('#nino').off().on('click',seleccionarSexo);
	$('#nina').off().on('click',seleccionarSexo);
	$('#btn_siguiente_avatar_nino').off().on('click',cambiar_avatar);
	$('#btn_volver_avatar_nino').off().on('click',cambiar_avatar);
	$('#btn_siguiente_avatar_nina').off().on('click',cambiar_avatar);
	$('#btn_volver_avatar_nina').off().on('click',cambiar_avatar);

	$('#btn_empezar_nino').off().on('click',empezar);
	$('#btn_empezar_nina').off().on('click',empezar);

	$('#btn_inicio_menu').off().on('click',inicio);
	$('#btn_logros_menu').off().on('click',logros_seccion);

	$('#btn_inicio_logros').off().on('click',inicio);

	$('#btn_logro_siguiente').off().on('click',galaxias_logros);
	$('#btn_logro_volver').off().on('click',galaxias_logros);

	$('#galaxia1').off().on('click',galaxia1);
	$('#galaxia2').off().on('click',galaxia2);
	$('#galaxia3').off().on('click',galaxia3);

	$('#btn_inicio_galaxia1').off().on('click',inicio);
	$('#btn_logros_galaxia1').off().on('click',logros_seccion);
	$('#empezar_galaxia1').off().on('click',mapaGalaxia1);


	$('#planeta_nivel1').off().on('click',empezarNivel1);
	$('#planeta_nivel2').off().on('click',empezarNivel2);
	$('#planeta_nivel3').off().on('click',empezarNivel3);
	$('#planeta_nivel4').off().on('click',empezarNivel4);
	$('#planeta_nivel5').off().on('click',empezarNivel5);
	$('#planeta_nivel6').off().on('click',empezarNivel6);
	$('#planeta_nivel7').off().on('click',empezarNivel7);
	$('#planeta_nivel8').off().on('click',empezarNivel8);

	
	$('#btn_gif').off().on('click',llamarConteo);
	$('#btn_inicio_gif').off().on('click',inicio);
	$('#btn_logros_gif').off().on('click',logros_seccion);
	$('#btn_inicio_perdido').off().on('click',inicio);
	$('#btn_logros_perdido').off().on('click',logros_seccion);
	$('#btn_inicio_ganar').off().on('click',inicio);
	$('#btn_logros_ganar').off().on('click',logros_seccion);


	var numBtn_ini = $('.btn_inicio').length
	for (var i = 1; i <= numBtn_ini; i++) {
		$('#btn_inicio_lvl'+i).off().on('click',inicio);
	}
	for (var i = 1; i <=numBtn_ini; i++) {
		$('#btn_inicio_mapa'+i).off().on('click',inicio);
	}

	
}

var cont_ganar_lvl6=0;
var cont_perder_lvl6=0;
function cargarDnDlvl6(){
	var seccion_actual;

		$( "#banderaN6" ).draggable({
		  revert: true,
		  scroll: false
		});
		$( "#cascoN6" ).draggable({
		  revert: true,
		  scroll: false
		});
		$( "#marciano1N6" ).draggable({
		  revert: true,
		  scroll: false
		});
		$( "#marciano2N6" ).draggable({
		  revert: true,
		  scroll: false
		});
		$( "#marciano3N6" ).draggable({
		  revert: true,
		  scroll: false
		});
		$( "#naveN6" ).draggable({
		  revert: true,
		  scroll: false
		});

	    $( "#cuevaN6" ).droppable({
	      drop: function( event, ui ) {
	      	seccion_actual=event.target.parentElement.id;
	        if (event.toElement.id=="marciano1N6" || event.toElement.id=="marciano2N6" || event.toElement.id=="marciano3N6") {
	         	$('#'+event.toElement.id).hide()
	        	cont_ganar_lvl6++;
	        	verificarlvl6(cont_ganar_lvl6,cont_perder_lvl6,seccion_actual);
	        }else{
	        	cont_perder_lvl6++;
	        	verificarlvl6(cont_ganar_lvl6,cont_perder_lvl6,seccion_actual);
	          	$( "#"+event.toElement.id).draggable( "option", "revert", true );
	        }
	      }
	    });

	    $( "#cofreN6" ).droppable({
	      drop: function( event, ui ) {
	       seccion_actual=event.target.parentElement.id;
	        if (event.toElement.id=="banderaN6" || event.toElement.id=="cascoN6" || event.toElement.id=="naveN6") {
	          	$('#'+event.toElement.id).hide()
	        	cont_ganar_lvl6++;
	        	verificarlvl6(cont_ganar_lvl6,cont_perder_lvl6,seccion_actual);
	        }else{
	        	cont_perder_lvl6++;
	        	verificarlvl6(cont_ganar_lvl6,cont_perder_lvl6,seccion_actual);
	          $( "#"+event.toElement.id).draggable( "option", "revert", true );
	        }
	      }
	    });
}
function verificarlvl6(cont,cont_perder,seccion_actual){
	if (cont==6) {
		$( "#"+seccion_actual).hide();
    	var a=cont_niveles+1;
     	logro(a);
     	cont_ganar_lvl6=0;
	   	cont_perder_lvl6=0;
	   	mostrarImglvl6();
	}
	if (cont_perder==4) {
		$( "#"+seccion_actual).hide();
    	perder(seccion_actual);
    	cont_ganar_lvl6=0;
    	cont_perder_lvl6=0;
    	mostrarImglvl6();
	}
}
function mostrarImglvl6(){
	$( "#banderaN6" ).show();
		$( "#cascoN6" ).show();
		$( "#marciano1N6" ).show();
		$( "#marciano2N6" ).show();
		$( "#marciano3N6" ).show();
		$( "#naveN6" ).show();
}

function cargarlvl7(){
	$('#numero7N7').off().on('click',verificarlvl7);
	$('.malo_lvl7').off().on('click',verificarlvl7);
}
var cont_perder_lvl7=0;
function verificarlvl7(evt){
	var seccion_actual=event.target.parentElement.id;
	var seleccion = evt.target.id;
	if (seleccion=="numero7N7") {
		$( "#"+seccion_actual).hide();
		var a=cont_niveles+1;
		logro(a);
	   	cont_perder_lvl7=0;
	}else{
		cont_perder_lvl7++;
	}
	if (cont_perder_lvl7==5) {
		$( "#"+seccion_actual).hide();
    	perder(seccion_actual);
    	cont_perder_lvl7=0;
	}
}


function cargarlvl8(){

	$('#cofre2N8').off().on('click',verificarlvl8);
	$('#cofre3N8').off().on('click',verificarlvl8);
	$('#cofre6N8').off().on('click',verificarlvl8);
	$('#cofre7N8').off().on('click',verificarlvl8);

	$('.malo_lvl8').off().on('click',verificarlvl8);
}
var cont_perder_lvl8=0;
var cont_ganar_lvl8=0;
function verificarlvl8(evt){
	var seccion_actual=event.target.parentElement.id;
	var seleccion = evt.target.id;
	if (seleccion=="cofre2N8" || seleccion=="cofre3N8" ||seleccion=="cofre6N8" ||seleccion=="cofre7N8") {
		$( "#"+seleccion).hide();
		cont_ganar_lvl8++;
	}else{
		cont_perder_lvl8++;
	}
	if (cont_ganar_lvl8==4) {
		$( "#"+seccion_actual).hide();
		var a=cont_niveles+1;
		logro(a);
	   	cont_perder_lvl8=0;
	   	cont_ganar_lvl8=0;
	   	cargarImglvl8();
	}
	if (cont_perder_lvl8==4) {
		$( "#"+seccion_actual).hide();
    	perder(seccion_actual);
    	cont_perder_lvl8=0;
    	cont_ganar_lvl8=0;
    	cargarImglvl8();
	}
}
function cargarImglvl8(){
	$( "#cofre2N8").show();
	$( "#cofre3N8").show();
	$( "#cofre6N8").show();
	$( "#cofre7N8").show();
}

function cargarlvl5(){
	$('#astronautaN5').off().on('click',verificarlvl5);
	$('.malo_lvl5').off().on('click',verificarlvl5);
}

var cont_perder_lvl5=0;
function verificarlvl5(evt){
	var seccion_actual=event.target.parentElement.id;
	var seleccion = evt.target.id;
	if (seleccion=="astronautaN5") {
		$( "#"+seccion_actual).hide();
		var a=cont_niveles+1;
		logro(a);
	   	cont_perder_lvl5=0;
	}else{
		cont_perder_lvl5++;
	}

	if (cont_perder_lvl5==3) {
		$( "#"+seccion_actual).hide();
    	perder(seccion_actual);
    	cont_perder_lvl5=0;
	}
}



function cargarDnDlvl1(){
	 	$( "#nave_lvl1" ).draggable({
		  revert: true,
		  scroll: false
		});
	    $( "#planeta_lvl1" ).droppable({
	      drop: function( event, ui ) {
	        var ensayo=event.target.parentElement.id;
	       
	        if (event.toElement.id=="nave_lvl1") {
	           	$('#'+ensayo).hide();
	           	var a=cont_niveles+1;
	           	logro(a);
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


var  cont_ganar_lvl3=0;
var cont_perder_lvl3=0;

function cargarDnDlvl3(){
		var seccion_actual;
		var startPos1,startPos2;

		$( "#arboles_lvl3" ).draggable({
		  revert: true,
		  scroll: false,

		});
		$( "#edificio_lvl3" ).draggable({
		  revert: true,
		  scroll: false,

		});
		$( "#marciano_lvl3" ).draggable({
		  revert: true,
		  scroll: false
		});
		$( "#marciano2_lvl3" ).draggable({
		  revert: true,
		  scroll: false
		});

	    $( "#sombra_arboleslvl3" ).droppable({
	      drop: function( event, ui ) {
	      	seccion_actual=event.target.parentElement.id;
	        if (event.toElement.id=="arboles_lvl3") {
	         	$('#arboles_lvl3').hide();
	        	cont_ganar_lvl3++;
	        	verificarlvl3(cont_ganar_lvl3,cont_perder_lvl3,seccion_actual);
	        }else{
	        	cont_perder_lvl3++;
	        	verificarlvl3(cont_ganar_lvl3,cont_perder_lvl3,seccion_actual);
	          	$( "#"+event.toElement.id).draggable( "option", "revert", true );
	        }
	      }
	    });

	    $( "#sombra_edificiolvl3" ).droppable({
	      drop: function( event, ui ) {
	       seccion_actual=event.target.parentElement.id;
	        if (event.toElement.id=="edificio_lvl3") {
	          	$('#edificio_lvl3').hide( );
	        	cont_ganar_lvl3++;
	        	verificarlvl3(cont_ganar_lvl3,cont_perder_lvl3,seccion_actual);
	        }else{
	        	cont_perder_lvl3++;
	        	verificarlvl3(cont_ganar_lvl3,cont_perder_lvl3,seccion_actual);
	          $( "#"+event.toElement.id).draggable( "option", "revert", true );
	        }
	      }
	    });
}

var  cont_ganar_lvl4=0;
var cont_perder_lvl4=0;

function cargarDnDlvl4(){
		var seccion_actual;

		$( "#marciano1_lvl4" ).draggable({
		  revert: true,
		  scroll: false
		});
		$( "#marciano2_lvl4" ).draggable({
		  revert: true,
		  scroll: false
		});
		$( "#marciano3_lvl4" ).draggable({
		  revert: true,
		  scroll: false
		});
		$( "#marciano4_lvl4" ).draggable({
		  revert: true,
		  scroll: false
		});

	    $( "#cuadro1" ).droppable({
	      drop: function( event, ui ) {
	      	seccion_actual=event.target.parentElement.id;
	        if (event.toElement.id=="marciano1_lvl4") {
	         $('#marciano1_lvl4').hide();

	        	cont_ganar_lvl4++;
	        	verificarlvl4(cont_ganar_lvl4,cont_perder_lvl4,seccion_actual);
	        }else{
	        	cont_perder_lvl4++;
	        	verificarlvl4(cont_ganar_lvl4,cont_perder_lvl4,seccion_actual);
	          	$( "#"+event.toElement.id).draggable( "option", "revert", true );
	        }
	      }
	    });

	    $( "#cuadro2" ).droppable({
	      drop: function( event, ui ) {
	       seccion_actual=event.target.parentElement.id;
	        if (event.toElement.id=="marciano2_lvl4") {
	          	$('#marciano2_lvl4').hide();
	        	cont_ganar_lvl4++;
	        	verificarlvl4(cont_ganar_lvl4,cont_perder_lvl4,seccion_actual);
	        }else{
	        	cont_perder_lvl4++;
	        	verificarlvl4(cont_ganar_lvl3,cont_perder_lvl4,seccion_actual);
	          $( "#"+event.toElement.id).draggable( "option", "revert", true );
	        }
	      }
	    });


}

function verificarlvl4(cont,cont_perder,seccion_actual){

	if (cont==2) {
		$( "#"+seccion_actual).hide();
    	var a=cont_niveles+1;
     	logro(a);
     	cont_ganar_lvl4=0;
	   	cont_perder_lvl4=0;
	   	$('#marciano1_lvl4').show();
		$('#marciano2_lvl4').show();

	}
	if (cont_perder==2) {
		$( "#"+seccion_actual).hide();
    	perder(seccion_actual);
    	cont_ganar_lvl4=0;
    	cont_perder_lvl4=0;
    	$('#marciano1_lvl4').show();
		$('#marciano2_lvl4').show();
	}
	
	
} 

function verificarlvl3(cont,cont_perder,seccion_actual){

	if (cont==2) {
		$( "#"+seccion_actual).hide();
    	var a=cont_niveles+1;
     	logro(a);
     	cont_ganar_lvl3=0;
	   	cont_perder_lvl3=0;
	   	$('#edificio_lvl3').show( );
		$('#arboles_lvl3').show( );

	}
	if (cont_perder==2) {
		$( "#"+seccion_actual).hide();
    	perder(seccion_actual);
    	cont_ganar_lvl3=0;
    	cont_perder_lvl3=0;
    	$('#edificio_lvl3').show( );
		$('#arboles_lvl3').show( );
	}
	
	
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
	    	perder(seccion_actual);
	    	$( "#marciano_lvl2" ).show();
			 $( "#planeta_lvl2" ).show();
			$( "#nave_lvl2" ).show();
	    	cont_ganar_lvl2=0;
	    	cont_perder_lvl2=0;
	    }
}


function logro(a){
	window.plugins.NativeAudio.play( 'ganar' );
	$('#SuperLogro').attr("src",logros[a-2]);
	$('#Logro').show();

	$('#btn_siguiente_superado').off().on('click',function(){
		botonClick();
		$('#Logro').hide();
		if (a==9) {
			$('#seccion_menu').show();
			$('#galaxia2').attr("src","img/galaxias/galaxia2.png");
		}else{
			$('#seccion_mapa'+a+'_galaxia1').show();
		}	
	});

	cambiarLogroSeccion(a);
	cont_niveles++;
}

function cambiarLogroSeccion(a){
	$('#img_logro').attr("src",logros_inicio[a-2]);
	cont_logros_estado=a-2;
	if (cont_logros_estado==7) {
		$('#msg_logro').attr("src","img/mensajes/mensaje_logrado.png");
	}
}


function perder(seccion_actual) {
	window.plugins.NativeAudio.play( 'perder' );
	$('#seccion_perdido').show();
	$('#btn_reintentar').off().on('click',function(){
		botonClick();
		$('#seccion_perdido').hide();
		$('#'+seccion_actual).show();
	});
}

function empezar_inicio(){

	window.plugins.NativeAudio.stop( 'empezar' );
	window.plugins.NativeAudio.loop( 'fondo' );
	botonClick();
	$('#seccion_inicio').hide();
	$('#seccion_personajes').show();
	window.plugins.NativeAudio.unload( 'empezar' );
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

var clicks=0;
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
	reiniciarNiveles();
}
function logros_seccion(evt){
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
	if (cont_logros==0) {
		if ( typeof cont_logros_estado==="undefined" )  {
			$('#img_logro').attr("src",imagen);
		}else{
			$('#img_logro').attr("src",logros_inicio[cont_logros_estado]);
			if (cont_logros_estado==7) {
				$('#msg_logro').attr("src","img/mensajes/mensaje_logrado.png");
			}
		}
	}else{
		$('#img_logro').attr("src",imagen);
		$('#msg_logro').attr("src","img/mensajes/mensaje_sin_lograr.png");
	}
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
	var a=cont_niveles;
	if (a==9) {
		$('#seccion_mapa8_galaxia1').show();
	}else{
		if (a==0) {
			$('#seccion_mapa1_galaxia1').show();
		}else{
			$('#seccion_mapa'+a+'_galaxia1').show();
		}
		
	}
	
}
function empezarNivel1(evt){
	botonClick();
	var seccion_actual=evt.target.parentNode.id;
	$('#'+seccion_actual).hide();
	cont_niveles=1;
	mostrarGif(cont_niveles);
	cargarDnDlvl1();
}
function empezarNivel2(evt){
	botonClick();
	var seccion_actual=evt.target.parentNode.id;
	$('#'+seccion_actual).hide();
	cont_niveles=2;
	mostrarGif(cont_niveles);
	cargarDnDlvl2();

}
function empezarNivel3(evt){
	botonClick();
	var seccion_actual=evt.target.parentNode.id;
	$('#'+seccion_actual).hide();
	cont_niveles=3;
	mostrarGif(cont_niveles);
	cargarDnDlvl3();
}
function empezarNivel4(evt){
	botonClick();
	var seccion_actual=evt.target.parentNode.id;
	$('#'+seccion_actual).hide();
	cont_niveles=4;
	mostrarGif(cont_niveles);
	cargarDnDlvl4();

}
function empezarNivel5(evt){
	botonClick();
	var seccion_actual=evt.target.parentNode.id;
	$('#'+seccion_actual).hide();
	cont_niveles=5;
	mostrarGif(cont_niveles);
	cargarlvl5();
	
}
function empezarNivel6(evt){
	botonClick();
	var seccion_actual=evt.target.parentNode.id;
	$('#'+seccion_actual).hide();
	cont_niveles=6;
	mostrarGif(cont_niveles);
	cargarDnDlvl6();

}
function empezarNivel7(evt){
	botonClick();
	var seccion_actual=evt.target.parentNode.id;
	$('#'+seccion_actual).hide();
	cont_niveles=7;
	mostrarGif(cont_niveles);
	cargarlvl7();

}
function empezarNivel8(evt){
	botonClick();
	var seccion_actual=evt.target.parentNode.id;
	$('#'+seccion_actual).hide();
	cont_niveles=8;
	mostrarGif(cont_niveles);
	cargarlvl8();
}



function botonClick(){
	window.plugins.NativeAudio.play( 'click' );
}
function cargarInicio(){
	window.setTimeout( function(){
       window.plugins.NativeAudio.loop( 'empezar' );
    }, 1500 );
}

function mostrarGif(cont){
	$('#gif_lvls').attr("src",gifs[cont-1]);
	$('#gif').show();

}
function llamarConteo(cont){
	botonClick();
	$('#gif').hide();
	conteo(cont_niveles);
}

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

function reiniciarNiveles(){
	$( "#marciano_lvl2" ).show();
	$( "#planeta_lvl2" ).show();
	$( "#nave_lvl2" ).show();
	cont_ganar_lvl2=0;
	cont_perder_lvl2=0;

	cont_ganar_lvl6=0;
	cont_perder_lvl6=0;
	mostrarImglvl6();

	cont_perder_lvl7=0;
	cont_perder_lvl8=0;
	cont_ganar_lvl8=0;
	cargarImglvl8();
	cont_perder_lvl5=0;
	cont_ganar_lvl3=0;
	cont_perder_lvl3=0;
	cont_ganar_lvl4=0;
	cont_perder_lvl4=0;

	$('#marciano1_lvl4').show();
	$('#marciano2_lvl4').show();
	$('#edificio_lvl3').show( );
	$('#arboles_lvl3').show( );

	$('#cofre2N8').show();
	$('#cofre3N8').show();
	$('#cofre6N8').show();
	$('#cofre7N8').show();

}
