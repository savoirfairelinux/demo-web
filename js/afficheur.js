/**
 *  @afficheur.js
 *  Javascript for demo-web
 * 
 *  @copyright 2013 Savoir-faire Linux, inc.
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 *  @author David Barbeau <david.barbeau@savoirfairelinux.com>
 *
 */


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