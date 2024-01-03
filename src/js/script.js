$('.menu-dropdown').prepend('<div id="menu-icon"><span class="primeiro"></span><span class="segundo"></span><span class="terceiro"></span></div>');
	
	$("#menu-icon").on("click", function(){
    $("nav").slideToggle();
    $(this).toggleClass("ativo");
});