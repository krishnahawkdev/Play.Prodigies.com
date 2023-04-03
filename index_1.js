var Cclicked=false;var Dclicked=false;var Eclicked=false;var Fclicked=false;var Gclicked=false;var Aclicked=false;var Bclicked=false;var HCclicked=false;var Cplay=false;var Dplay=false;var Eplay=false;var Fplay=false;var Gplay=false;var Aplay=false;var Bplay=false;var HCplay=false;var use_touch_buffer=true;var touch_buffer=[];var managing_touch_buffer=false;var use_key_buffer=true;var key_pres_buffer=[];var managing_key_buffer=false;$(document).ready(function(){var supportsTouch='ontouchstart'in window||navigator.msMaxTouchPoints;var eventType=supportsTouch?'ontouchstart':'click';if(!supportsTouch){console.log("using key press rather than touch interface");$('#c').mousedown(function(){Cclicked=true;});$('#c').mouseup(function(){Cclicked=false;});$('#d').mousedown(function(){Dclicked=true;});$('#d').mouseup(function(){Dclicked=false;});$('#e').mousedown(function(){Eclicked=true;});$('#e').mouseup(function(){Eclicked=false;});$('#f').mousedown(function(){Fclicked=true;});$('#f').mouseup(function(){Fclicked=false;});$('#g').mousedown(function(){Gclicked=true;});$('#g').mouseup(function(){Gclicked=false;});$('#a').mousedown(function(){Aclicked=true;});$('#a').mouseup(function(){Aclicked=false;});$('#b').mousedown(function(){Bclicked=true;});$('#b').mouseup(function(){Bclicked=false;});$('#hic').mousedown(function(){HCclicked=true;});$('#hic').mouseup(function(){HCclicked=false;});$('#stop').mousedown(function(){parts_player.crossfade_audio.stop();});$('#stopall').mousedown(function(){stop_all_kaboom();});$('#stopevery').mousedown(function(){stop_every();});$('#wowza').mousedown(function(){wowzaChord();getActiveBells();play();});$('#instrument').mousedown(function(){getActiveBells();play();if(live_nodes>=16){stop_all_kaboom();}});$('#instrument').mouseup(function(){hide_inactive_bells();resetPresses();});}});(function($){var bellId;$('.box').each(function(){$(this).on('touchstart',function(event){var $bell=$(this);bellId=$bell.attr('id');if(bellId==="c"){Cclicked=true;}else if(bellId==="d"){Dclicked=true;}else if(bellId==="e"){Eclicked=true;}else if(bellId==="f"){Fclicked=true;}else if(bellId==="g"){Gclicked=true;}else if(bellId==="a"){Aclicked=true;}else if(bellId==="b"){Bclicked=true;}else if(bellId==="hic"){HCclicked=true;}else if(bellId==="stop"){parts_player.crossfade_audio.stop();}else if(bellId==="stopall"){stop_all_kaboom();}else if(bellId==="wowza"){wowzaChord();}else if(bellId==="stopevery"){stop_every();}
getActiveBells();play();}).on('touchmove',function(event){}).on('touchend',function(){$('.box').removeClass('active_bell');});});})(jQuery);$(document).on('keypress',function(e){if(e.which==49){Cclicked=true;}
if(e.which==50){Dclicked=true;}
if(e.which==51){Eclicked=true;}
if(e.which==52){Fclicked=true;}
if(e.which==53){Gclicked=true;}
if(e.which==54){Aclicked=true;}
if(e.which==55){Bclicked=true;}
if(e.which==56){HCclicked=true;}
var d=new Date();var n=d.getTime();key_pres_buffer.push(n);getActiveBells();if(use_key_buffer){setTimeout(function(){manage_key_buffer();},5);}else{play();}});function manage_key_buffer(){if(managing_key_buffer){if(key_pres_buffer.length>0){setTimeout(function(){manage_key_buffer();},5);}
return;}else{managing_key_buffer=true;}
var event_threshold=5;var first_one=null;var diff=-1;var greatest_difference=0;for(var key_press in key_pres_buffer){if(first_one===null){first_one=key_press;}
diff=key_press-first_one;if(diff>greatest_difference){greatest_difference=diff;}}
if(key_pres_buffer.length>0&&greatest_difference<=event_threshold){key_pres_buffer=[];managing_key_buffer=false;play();}else{}
managing_key_buffer=false;}
$(document).on('keyup',function(e){if(e.which==49||e.which==97){Cclicked=false;}
if(e.which==50||e.which==98){Dclicked=false;}
if(e.which==51||e.which==99){Eclicked=false;}
if(e.which==52||e.which==100){Fclicked=false;}
if(e.which==53||e.which==101){Gclicked=false;}
if(e.which==54||e.which==102){Aclicked=false;}
if(e.which==55||e.which==103){Bclicked=false;}
if(e.which==56||e.which==104){HCclicked=false;}
hide_inactive_bells();});function show_active_bell(bell_id){$('#'+bell_id).addClass('active_bell');}
function show_active_bells(){$('#debug').html("");$('#debug').append(" [ ");
if(Cclicked==true){$('#c').addClass('active_bell2');$('#debug').append(" C,");}
if(Dclicked==true){$('#d').addClass('active_bell2');$('#debug').append(" D,");}
if(Eclicked==true){$('#e').addClass('active_bell2');$('#debug').append(" E,");}
if(Fclicked==true){$('#f').addClass('active_bell2');$('#debug').append(" F,");}
if(Gclicked==true){$('#g').addClass('active_bell2');$('#debug').append(" G,");}
if(Aclicked==true){$('#a').addClass('active_bell2');$('#debug').append(" A,");}
if(Bclicked==true){$('#b').addClass('active_bell2');$('#debug').append(" B,");}
if(HCclicked==true){$('#hic').addClass('active_bell2');$('#debug').append(" HC,");}
$('#debug').append(" ] ");}
function hide_inactive_bells(){
/*if(Cclicked!=true){$('#c').removeClass('active_bell');}
if(Dclicked!=true){$('#d').removeClass('active_bell');}
if(Eclicked!=true){$('#e').removeClass('active_bell');}
if(Fclicked!=true){$('#f').removeClass('active_bell');}
if(Gclicked!=true){$('#g').removeClass('active_bell');}
if(Aclicked!=true){$('#a').removeClass('active_bell');}
if(Bclicked!=true){$('#b').removeClass('active_bell');}
if(HCclicked!=true){$('#hic').removeClass('active_bell');}*/
}
function log_active_plays(){if(Cplay==true){}
if(Dplay==true){}
if(Eplay==true){}
if(Fplay==true){}
if(Gplay==true){}
if(Aplay==true){}
if(Bplay==true){}
if(HCplay==true){}}
function log_active_bells(){if(Cclicked==true){}
if(Dclicked==true){}
if(Eclicked==true){}
if(Fclicked==true){}
if(Gclicked==true){}
if(Aclicked==true){}
if(Bclicked==true){}
if(HCclicked==true){}}
function getActiveBells(){Cplay=Cclicked;Dplay=Dclicked;Eplay=Eclicked;Fplay=Fclicked;Gplay=Gclicked;Aplay=Aclicked;Bplay=Bclicked;HCplay=HCclicked;}
function resetPresses(){Cclicked=false;Dclicked=false;Eclicked=false;Fclicked=false;Gclicked=false;Aclicked=false;Bclicked=false;HCclicked=false;}
function wowzaChord(){Cclicked=true;Dclicked=true;Eclicked=true;Fclicked=true;Gclicked=true;Aclicked=true;Bclicked=true;HCclicked=true;}
function play(){parts_player.play_button();console.log("There are "+live_nodes+" live nodes");$("#debug").html("There are "+live_nodes+" live nodes");if(live_nodes>=16){stop_all_kaboom();}
show_active_bells();setTimeout(function(){resetPresses();hide_inactive_bells();},9);}
function manage_touch_buffer(){if(managing_touch_buffer){if(touch_buffer.length>0){setTimeout(function(){manage_touch_buffer();},5);}
return;}else{managing_touch_buffer=true;}
var event_threshold=5;var first_one=null;var diff=-1;var greatest_difference=0;for(var key_press in touch_buffer){if(first_one===null){first_one=key_press;}
diff=key_press-first_one;if(diff>greatest_difference){greatest_difference=diff;}}
if(touch_buffer.length>0&&greatest_difference<=event_threshold){touch_buffer=[];managing_touch_buffer=false;play();}else{}
managing_touch_buffer=false;}