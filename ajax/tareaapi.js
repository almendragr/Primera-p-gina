//function buscarSinonimo(){
  //  palabraIntroducida = $("#txt-busqueda").val()

    //fetch("http://sesat.fdi.ucm.es:8080/servicios/rest/sinonimos/json/palabraIntroducida" + palabraIntroducida)
    //.then(respuesta => respuesta.json())
    //.then(datos => {

    //  nueva_etiqueta = `
    //        <img src="${datos.sprites.front_default}">
    //    `
    //    $("#btn-buscar").after(nueva_etiqueta)
  //  })
  //  .catch(error => console.log(error))
//}

fetch("https://currency-exchange.p.rapidapi.com/exchange?to=MYR&from=SGD&q=1.0", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "135b802582mshc06e1c2cfe168d6p13a057jsn8d2335e3bfae",
		"x-rapidapi-host": "currency-exchange.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});