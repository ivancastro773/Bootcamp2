const url = "https://fedeperin-harry-potter-api.herokuapp.com"
const perso = "/personajes";
const prueba = fetch((`${url}${perso}`))
	.then((res) => res.json())
	.then((data) => {
		console.log(data)
	})
	.catch((e) => console.log(e))