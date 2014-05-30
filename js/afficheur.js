
jQuery().ready(function(){
	
	$(".page").click(function() {
		
		var $pageClik = $(this).html();
		
		var $resolution = $(this).parents(".submenu").children(".resolution").html();
		
		console.log($resolution);
		
		$(".afficheur").html("Résolution : "+$resolution).show("fast");
		
	});
	
	$(".ascenseur").click(function() {
		
		$(".afficheur").html("Sélectionner une page").show("slow");
		
		/*if($(".afficheur").html() == "Sélectionner un appareil") 
			{ 
				$(".afficheur").html("Sélectionner une page").show("fast");
			}				
		else
		{
			if($(".afficheur").html() == "Sélectionner une page") 
			{	 
				$(".afficheur").html("Sélectionner un appareil").show("fast");
			}				
			else
			{			
				if($(".afficheur").html() != "Sélectionner une page" && "Sélectionner un appareil") 
					{	 
						$(".afficheur").html("Sélectionner un appareil").show("fast");
					}			
			}
		}*/
		
	});
	
	
		
});