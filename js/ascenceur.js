jQuery().ready(function () {
    var that = this;
    
	$(".ascenseur").next("div").hide();
	$(".open").next("div").show();
    
//  For open and close subMenu
	$(".ascenseur").click(function() {
		var thisSubMenu = $(this).next("div");
        
//      Close all other submenu openned
        $(".submenu").slideUp("slow");
        
		if(thisSubMenu.is(":hidden")){            
			$(".ascenceur").next("div:visible").slideUp("slow");
			thisSubMenu.slideDown("fast");
		}else if(thisSubMenu.is(":visible")){
			$(".ascenceur").next("div:hidden").slideDown("fast");
			thisSubMenu.slideUp("slow");
        }
	});
    
//  Close Opened subMenu when event 'click' on the page
    $('#iframe_magic').load(function(){
        $(this).contents().find("body").click(function(event) { 
            $(that).find(".ascenseur").next("div").slideUp("slow");; 
        });
    });
	

	$(".menu-panel ul.menu-toc li").click(function(e) {
  		$(".menu-toc-current").removeClass("menu-toc-current");
  		$(this).addClass("menu-toc-current");
		
	});


	var $menu = $(".menu-panel"),
		$iframe = $("#iframe_magic");

	$("#tblcontents").click(function(){
		/* Si le menu possede la class closed => il est fermé !! */
		if ($menu.hasClass("closed")) {
			/* je retire la classe closed pour l'ouvrir */
			$menu.removeClass("closed");
			 /*je retire la class closed du bouton lui-même */
			$(this).removeClass("closed");

			$iframe.removeClass("closed");
		}else{
			/* j'insere la class closed pour le fermer */
			$menu.addClass("closed");
			/* j'insere la class closed dans le bouton lui-même */
			$(this).addClass("closed");
			$iframe.addClass("closed");
		}
	});


	var $menu = $(".menu-panel"),
		$bouton = $("#tblcontents");

	$(".menu-toc").click(function(){
	   $menu.addClass("closed");
	   $bouton.addClass("closed");
	   $iframe.addClass("closed");
	
	});
});