let pets = [
	{
		nome: "Batman",
		tipo: "cão",
		raca: "labrador",
		idade: 5,
		genero: "M",
		vacinado: false,
		servicos: ["banho", "tosa"]
	},
	{
		nome: "Costelinha",
		tipo: "cão",
		raca: "vira-lata",
		idade: 10,
		genero: "M",
		vacinado: true,
		servicos: ["banho"]
	},
	{
		nome: "Scooby Doo",
		tipo: "cão",
		raca: "Dogue Alemão",
		idade: 9,
		genero: "M",
		vacinado: false,
		servicos: ["banho", "tosa"]
	},
	{
		nome: "Tom",
		tipo: "gato",
		raca: "poodle",
		idade: 5,
		genero: "M",
		vacinado: false,
		servicos: ["corte de unha"]
	},
	{
		nome: "Ada",
		tipo: "iguana",
		raca: "albina",
		idade: 5,
		genero: "F",
		vacinado: true,
		servicos: ["banho"]
	},
];

const tratarPropPet = (pet, prop) => {
	let conteudo = '';

	switch (prop) {

	case "vacinado":
		conteudo += `<p>${prop}: ${(pet[prop] ? "sim" : "não")}</p>`;
		break;

	case "genero":
		conteudo += `<p>${prop}: ${(pet[prop] === "M" ? "macho" : "fêmea")}</p>`;
		break;

	case "idade":
		conteudo += `<p>${prop}: ${pet[prop]} anos</p>`;
		break;

	default:
		conteudo += `<p>${prop}: ${pet[prop]}</p>`;
	}

	return conteudo;
};

const listarPets = () => {
	let conteudo = "";

	if (pets.length > 0) {
		conteudo += "<ul>";
		for (const pet of pets) {
			conteudo += "<li>"
			for (prop in pet) {
				conteudo += tratarPropPet(pet, prop);
			}
			conteudo += "</li>"
		}
		conteudo += "</ul>";
	}
	return conteudo;
};

const buscarPet = query => {
	const petsParaProcurar = pets.filter((pet) => {
		return pet.nome.toUpperCase() === query.toUpperCase();
	});
	return petsParaProcurar;
};

const temProp = (obj, listaDeProps) => {
	let propExiste = false;

	for (const prop of listaDeProps) {
		propExiste = obj.hasOwnProperty(prop);
		if (!propExiste) { break; }
	}

	return propExiste;
};

const validarPet = pet => {
	const propsParaValidar = ["nome", "tipo", "raca", "idade", "genero", "vacinado",];

	return temProp(pet, propsParaValidar);
};

const vacinarPet = pet => {
	if (!pet.vacinado) {
		pet.vacinado = true;
		return true;
	} else {
		return false;
	}
};

const adicionarPet = novoPet => {
	if (validarPet(novoPet)) {
		pets.push(novoPet);
		return true;
	} else {
		return false;
	}
};

module.exports = {listarPets, adicionarPet, buscarPet, vacinarPet};