let listPeoples = "";
let urlPlanet, urlPeople, urlSpecies, urlStarships, urlVehicles = "";

async function getData(url){
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results);

        if (data.detail == "Not found") {
            throw new Error('Page not found');
        }

        return data;

    } catch(erro) {
        console.log("[ERROR] " + erro.message);
    }
}

async function getPlanet(url){

    if(url == undefined){
        url = urlPlanet;
    }

    const data = await getData(url);
    console.log(data);

        for(let i=0; i<data.results.length; i++){
            listPeoples += `<div class="card">
                                <div class="card-container">
                                    <p>Nome: ${data.results[i].name}</p>
                                    <p>Período de rotação: ${data.results[i].rotation_period}</p>
                                    <p>Período orbital: ${data.results[i].orbital_period}</p>
                                    <p>Diametro: ${data.results[i].diameter}</p>
                                    <p>Clima: ${data.results[i].climate}</p>
                                    <p>Gravidade: ${data.results[i].gravity}</p>
                                    <p>Terreno: ${data.results[i].terrain}</p>
                                    <p>Água da superfície: ${data.results[i].surface_water}</p>
                                    <p>Populacao: ${data.results[i].population}</p>
                                    <p>Residentes: ${data.results[i].residents}</p>
                                    <p>Filmes: ${data.results[i].films}</p>
                                </div>
                            </div>`;
        }

    document.getElementById("show-planets").innerHTML = listPeoples;
    urlPlanet = `${data.next}`;
}

async function getPeople(url){

    if(url == undefined){
        url = urlPeople;
    }

    const data = await getData(url);
    console.log(data.results);

        for(let i=0; i<data.results.length; i++){
            listPeoples += `<div class="card">
                                <div class="card-container">
                                    <p>Nome: ${data.results[i].name}</p>
                                    <p>Altura: ${data.results[i].height} cm</p>
                                    <p>Peso: ${data.results[i].mass} Kg</p>
                                    <p>Cabelo: ${data.results[i].hair_color}</p>
                                    <p>Skin: ${data.results[i].skin_color}</p>
                                    <p>Olho: ${data.results[i].eye_color}</p>
                                    <p>Nascimento: ${data.results[i].birth_year}</p>
                                    <p>Genero: ${data.results[i].gender}</p>
                                    <p>Planeta Natal: ${data.results[i].homeworld}</p>
                                    <p>Filmes: ${data.results[i].films}</p>
                                    <p>Especies: ${data.results[i].species}</p>
                                    <p>Veiculos: ${data.results[i].vehicles}</p>
                                    <p>Naves: ${data.results[i].starships}</p>
                                </div>
                            </div>`;
        }

    document.getElementById("show-people").innerHTML = listPeoples;
    urlPeople = `${data.next}`;
}

async function getFilm(url){

    const data = await getData(url);
    console.log(data);

        for(let i=0; i<data.results.length; i++){
            listPeoples += `<div class="card">
                                <div class="card-container">
                                    <p>Titulo: ${data.results[i].title}</p>
                                    <p>Episodio: ${data.results[i].episode_id}</p>
                                    <p>Resumo: ${data.results[i].opening_crawl}</p>
                                    <p>Diretor: ${data.results[i].director}</p>
                                    <p>Produtor: ${data.results[i].producer}</p>
                                    <p>Lançamento: ${data.results[i].release_date}</p>
                                    <p>Personagens: ${data.results[i].characters}</p>
                                    <p>Planetas: ${data.results[i].planets}</p>
                                    <p>Naves estelares: ${data.results[i].starships}</p>
                                    <p>Veículos: ${data.results[i].vehicles}</p>
                                    <p>Species: ${data.results[i].species}</p>
                                </div>
                            </div>`;
        }

    document.getElementById("show-films").innerHTML = listPeoples;
}

async function getStarships(url){

    if(url == undefined){
        url = urlStarships;
    }

    const data = await getData(url);
    console.log(data);

        for(let i=0; i<data.results.length; i++){
            listPeoples += `<div class="card">
                                <div class="card-container">
                                    <p>Nome: ${data.results[i].name}</p>
                                    <p>Modelo: ${data.results[i].model}</p>
                                    <p>Fabricante: ${data.results[i].manufacturer}</p>
                                    <p>Valor: ${data.results[i].cost_in_credits}</p>
                                    <p>Tamanho: ${data.results[i].length}</p>
                                    <p>Velocidade: ${data.results[i].max_atmosphering_speed}</p>
                                    <p>Equipe Tecnica: ${data.results[i].crew}</p>
                                    <p>Passageiros: ${data.results[i].passengers}</p>
                                    <p>Capacidade de carga: ${data.results[i].cargo_capacity}</p>
                                    <p>Consumíveis: ${data.results[i].consumables}</p>
                                    <p>Rating: ${data.results[i].hyperdrive_rating}</p>
                                    <p>MGLT: ${data.results[i].MGLT}</p>
                                    <p>Classe: ${data.results[i].starship_class}</p>
                                    <p>Pilotos: ${data.results[i].pilots}</p>
                                    <p>Filmes: ${data.results[i].films}</p>
                                </div>
                            </div>`;
        }

    document.getElementById("show-starships").innerHTML = listPeoples;
    urlStarships = `${data.next}`;
}

async function getVehicles(url){

    if(url == undefined){
        url = urlVehicles;
    }

    const data = await getData(url);
    console.log(data);

        for(let i=0; i<data.results.length; i++){
            listPeoples += `<div class="card">
                                <div class="card-container">
                                <p>Nome: ${data.results[i].name}</p>
                                <p>Modelo: ${data.results[i].model}</p>
                                <p>Fabricante: ${data.results[i].manufacturer}</p>
                                <p>Valor: ${data.results[i].cost_in_credits}</p>
                                <p>Tamanho: ${data.results[i].length}</p>
                                <p>Velocidade: ${data.results[i].max_atmosphering_speed}</p>
                                <p>Equipe Tecnica: ${data.results[i].crew}</p>
                                <p>Passageiros: ${data.results[i].passengers}</p>
                                <p>Capacidade de carga: ${data.results[i].cargo_capacity}</p>
                                <p>Consumíveis: ${data.results[i].consumables}</p>
                                <p>Classe: ${data.results[i].vehicle_class}</p>
                                <p>Pilotos: ${data.results[i].pilots}</p>
                                <p>Filmes: ${data.results[i].films}</p>
                                </div>
                            </div>`;
        }

    document.getElementById("show-vehicles").innerHTML = listPeoples;
    urlVehicles = `${data.next}`;
}

async function getSpecies(url){

    if(url == undefined){
        url = urlVehicles;
    }

    const data = await getData(url);
    console.log(data);

        for(let i=0; i<data.results.length; i++){
            listPeoples += `<div class="card">
                                <div class="card-container">
                                    <p>Nome: ${data.results[i].name}</p>
                                    <p>Classificação: ${data.results[i].classification}</p>
                                    <p>Designação: ${data.results[i].designation}</p>
                                    <p>Altura média: ${data.results[i].average_height}</p>
                                    <p>skin_colors: ${data.results[i].skin_colors}</p>
                                    <p>Cabelo: ${data.results[i].hair_colors}</p>
                                    <p>Olhos: ${data.results[i].eye_colors}</p>
                                    <p>Vida média: ${data.results[i].average_lifespan}</p>
                                    <p>Planeta natal: ${data.results[i].homeworld}</p>
                                    <p>Idioma: ${data.results[i].language}</p>
                                    <p>Pessoas: ${data.results[i].people}</p>
                                    <p>Filmes: ${data.results[i].films}</p>
                                </div>
                            </div>`;
        }

    document.getElementById("show-species").innerHTML = listPeoples;
    urlVehicles = `${data.next}`;
}