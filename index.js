const http = require("http");
const url = require('url');
const petshop = require("./petshop");

const server = http.createServer((req, res) => {
	res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
	let urlCompleta = url.parse(req.url, true);
	let queryString = urlCompleta.query;
	let rota = urlCompleta.pathname;

	console.log(urlCompleta);

	switch (rota) {

	case "/add":
		let novoPet = JSON.parse(JSON.stringify(queryString));

		if (petshop.adicionarPet(novoPet)) {
			res.write(`<p>${novoPet.nome} foi cadastrado com sucesso!</p>`);
			console.log(petshop.pets);
		} else {
			res.write("<p>Ops, algo deu errado!</p>");
		}
		break;

	case "/buscar":
		if (!queryString.nome) {
			res.write("<p>Por favor informe o nome do pet que deseja procurar!</p>");
			break;
		}
		let petsEncontrados = petshop.buscarPet(queryString.nome);

		if (petsEncontrados.length > 0) {
			res.write(`<p>Encontramos ${petsEncontrados.length} pet(s) com o nome ${queryString.nome}</p>`);
		} else {
			res.write("<p>Ops, não encontramos nenhum pet com esse nome!</p>");
		}
		break;

	case "/vacinar":
		if (!queryString.nome) {
			res.write("<p>Por favor informe o nome do pet que deseja vacinar!</p>");
			break;
		}
		let petParaVacinar = petshop.buscarPet(queryString.nome);

		if (petParaVacinar) {
			if (petshop.vacinarPet(petParaVacinar[0])) {
				res.write(`<p>O pet ${queryString.nome} foi vacinado!</p>`);
			} else {
				res.write(`<p>O pet ${queryString.nome} já ESTÁ vacinado</p>`);
			}
		} else {
			res.write("pet não encontrado");
		}
		break;

	default:
		res.write("<h1>** Bem vindos ao Petshop **</h1>");
		res.write("<h2>** Lista de Pets **</h2>");

		const pets = petshop.listarPets();
		pets.length > 0
				? res.write(pets) 
				: res.write("<p>Nenhum pet cadastrado :(</p>");
	}
	res.end();
}).listen(3000, "localhost", () => {
	console.log("Servidor está ouvindo na porta 3000!");
});
