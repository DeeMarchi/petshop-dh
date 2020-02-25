const http = require("http");
const url = require('url');
const petshop = require("./petshop");

const server = http.createServer((req, res) => {
	res.writeHead(200, {"Content-Type": "text/plain; charset=UTF-8"});
	let urlCompleta = url.parse(req.url, true);
	let queryString = urlCompleta.query;
	let rota = urlCompleta.pathname;

	console.log(urlCompleta);

	switch (rota) {

	case "/add":
		let novoPet = queryString;

		if (petshop.adicionarPet(novoPet)) {
			res.write(`${novoPet.nome} foi cadastrado com sucesso!`);
			console.log(petshop.pets);
		} else {
			res.write("Ops, algo deu errado!");
		}
		break;

	case "/buscar":
		let petsEncontrados = petshop.buscarPet(queryString.nome);

		if (petsEncontrados.length > 0) {
			res.write(`Encontramos ${petsEncontrados.length} pet(s) com o nome ${queryString.nome}`)
		} else {
			res.write("Ops, não encontramos nenhum pet com esse nome!");
		}
		break;

	default:
		res.write("** Bem vindos ao Petshop **");

		const pets = petshop.listarPets();

		pets.length > 0
				? res.write(pets) 
				: res.write("Nenhum pet cadastrado :(");
		break;
	}
	res.end();
}).listen(3000, "localhost", () => {
	console.log("Servidor está ouvindo na porta 3000!");
});
