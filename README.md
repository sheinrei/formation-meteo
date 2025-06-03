<!-- 
Tache à faire :

-pour la description de la meteo regarder j'ai un code .weather[0].icon : "04d"
pour ça il faut mettre image avec cet url=>  var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";


-Il est possible d’avoir une erreur sur certains navigateurs à propos de ta fonction getLocation(); geolocation-on-start

-L’accessibilité du web, fonte trop petite. font-size

-!!! deleat ville suprime la derniere ville du localStorage porblème de l'index dans l'array

{ passive: false });




Taches effectuées:
-Tri fait dans le html je n'ai conservé que main_container où je vais add les new cities

-niveau js j'ai aussi dégagé le main container que je faisais maintenant je créé directement container_meteo_city_

-Nouvel id fait tout ce qui est add porte l'id container_meteo_city_+Date.now();

-gestion de deleat: get ville depuis le text de #name_city_id et remove au lieu de display none 
(element.closest(container_meteo_city_id)) pas eu besoin en dur en prenant juste number_id

-Reparation slide =>remarche bien après toute les modiff et add deleat avec slide de droite à gauche;

-verification de double ville alert si jamais ville déjà présente;

-ajout d'une limite au slide actuellement W*0.5;

-Ajout protection contre les villes qui n'existent pas avec Try{}catch{} et Alert pour signaler

-Ajout de meta données description + author

-->
