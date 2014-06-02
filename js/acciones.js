// JavaScript Document
var panel='<div data-role="panel" id="mipanel" data-theme="a" data-display="push">        <div class="panel-content" align="center"><img src="narco.jpg" width="200" height="200">        <div data-role="controlgroup"> <a data-role="button" href="#narcos" id="Boton1">INTRODUCCION</a>       <a data-role="button" href="#narcos1" id="Boton1">NARCOS</a>        <a data-role="button" href="#page3" id="Boton2">ZETAS</a> <a data-role="button" href="#page4" id="Boton1">SICARIOS</a>        </div>        </div>        </div>';
	$(document).on('pagebeforecreate','[data-role=page]',
	 function(){
		if ($(this).find('[data-role=panel]').length===0)
		{$('[data-role=header]').before(panel);}
	});//before create
$(document).ready (function(e){
	
});//ready


$(document).ready(function(e) {
 document.addEventListener("deviceready",function(){
  $('#narcos').tap(function(){
    navigator.notification.vibrate(500);
	 
 
  });
  
 },false); //deviceready
}); //document ready


$(document).ready(function(e) {
 document.addEventListener("deviceready",function(){
  $('#zetas').tap(function(){
    navigator.notification.Beep(1);
	 
 
  });
  
 },false); //deviceready
}); //document ready

