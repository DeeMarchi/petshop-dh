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
		idade: 51,
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
	{
		nome: "Ada",
	},
	{
		nome: "Ada",
	},
	{
		nome: "Ada",
	},
];

const listarPets = () => {
	let conteudo = "";

	for (const pet of pets) {
		conteudo += `
		--------------
		${pet.nome}
		--------------`;
	}
	return conteudo;
};

const buscarPet = query => {
	const petsParaProcurar = pets.filter((pet) => {
		pet.nome.toLocaleLowerCase() === query.toLocaleLowerCase()
	});

	return petsParaProcurar;
};

const validarPet = novoPet => {
	const propriedades = Object.keys(pets);




};

const adicionarPet = novoPet => {

	return pets.push(novoPet);
};

module.exports = {listarPets, adicionarPet, buscarPet};