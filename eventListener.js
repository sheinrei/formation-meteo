function addCity() {
    const input = document.getElementById("input_city").value;
    const local_array = JSON.parse(localStorage.getItem("city")) //duplique un new array
    local_array.unshift(firstUppercase(input));//ajoute l'input dans le new array
    localStorage.clear()// clear tout pour remettre dans un seul array
    localStorage.setItem("city", JSON.stringify(local_array))// set le new localStorage
    setDom(input_city.value);// ok rajoute la new div 
    document.getElementById("input_city").value = ""//ok clear l'input
}


// element pour ajouter une nouvelle ville aux favoris
submit.addEventListener("click", addCity);



// event pour chercher si quand on clic on selectionne bien l'element pour deleat
document.querySelector("body").addEventListener("click", function (event) {
    const target_id = event.target.id;
    let checked_deleat = getId(target_id);

    if (checked_deleat[0] == "deleat") {
        deleatFavori(checked_deleat)

        const element = document.getElementById(`container_meteo_city_${checked_deleat[3]}`)
        element.style.display = "none";
    }
})

//function pour retirer une ville de localStorage

function deleatFavori(ville) {
    console.log("deleat city to localStorage")
    const name_city = firstUppercase(ville);

    const new_local = JSON.parse(localStorage.getItem("city"));
    const index = new_local.indexOf(name_city);

    new_local.splice(index, 1);
    localStorage.clear();
    localStorage.setItem("city", JSON.stringify(new_local));
}