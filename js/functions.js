let listPlanet = "", listPeoples = "", listSpecies = "", listStarships = "", listVehicles = "", listFilm = "";
let urlPlanet = "", urlPeople = "", urlSpecies = "", urlStarships = "", urlVehicles = "";

async function getData(url){
    try {
        const response = await fetch(url);
        const data = await response.json();

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

        for(let i=0; i<data.results.length; i++){

            console.log(data.results[i].residents);
            let teste = data.results[i].residents.toString().replace("", " ");
            console.log(teste);

            listPlanet += `<div class="card">
                                <div class="card-container">
                                    <p><b>Nome:</b> ${data.results[i].name}</p>
                                    <p><b>Período de rotação:</b> ${data.results[i].rotation_period}</p>
                                    <p><b>Período orbital:</b> ${data.results[i].orbital_period}</p>
                                    <p><b>Diametro:</b> ${data.results[i].diameter}</p>
                                    <p><b>Clima:</b> ${data.results[i].climate}</p>
                                    <p><b>Gravidade:</b> ${data.results[i].gravity}</p>
                                    <p><b>Terreno:</b> ${data.results[i].terrain}</p>
                                    <p><b>Água da superfície:</b> ${data.results[i].surface_water}</p>
                                    <p><b>Populacao:</b> ${data.results[i].population}</p>
                                    <p><b>Residentes:</b> ${data.results[i].residents}</p>
                                    <p><b>Filmes:</b> ${data.results[i].films}</p>
                                </div>
                            </div>`;
        }
        
    document.getElementById("show-planets").innerHTML = listPlanet;
    urlPlanet = `${data.next}`;
}

async function getPeople(url){

    if(url == undefined){
        url = urlPeople;
    }

    const data = await getData(url);

        for(let i=0; i<data.results.length; i++){

            listPeoples += `<div class="card">
                                <div class="card-container">
                                    <p><b>Nome:</b> ${data.results[i].name}</p>
                                    <p><b>Altura:</b> ${data.results[i].height} cm</p>
                                    <p><b>Peso:</b> ${data.results[i].mass} Kg</p>
                                    <p><b>Cabelo:</b> ${data.results[i].hair_color}</p>
                                    <p><b>Pele:</b> ${data.results[i].skin_color}</p>
                                    <p><b>Olho:</b> ${data.results[i].eye_color}</p>
                                    <p><b>Nascimento:</b> ${data.results[i].birth_year}</p>
                                    <p><b>Genero:</b> ${data.results[i].gender}</p>
                                    <p><b>Planeta Natal:</b> ${data.results[i].homeworld.replace("https://swapi.dev/api/", " ")}</p>
                                    <p><b>Filmes:</b> ${data.results[i].films}</p>
                                    <p><b>Especies:</b> ${data.results[i].species}</p>
                                    <p><b>Veiculos:</b> ${data.results[i].vehicles}</p>
                                    <p><b>Naves:</b> ${data.results[i].starships}</p>
                                </div>
                            </div>`;
        }

    document.getElementById("show-people").innerHTML = listPeoples;
    urlPeople = `${data.next}`;
}

async function getFilm(url){

    const data = await getData(url);

        for(let i=0; i<data.results.length; i++){
            listFilm += `<div class="card">
                                <div class="card-container">
                                    <p><b>Titulo:</b> ${data.results[i].title}</p>
                                    <p><b>Episodio:</b> ${data.results[i].episode_id}</p>
                                    <p><b>Resumo:</b> ${data.results[i].opening_crawl}</p>
                                    <p><b>Diretor:</b> ${data.results[i].director}</p>
                                    <p><b>Produtor:</b> ${data.results[i].producer}</p>
                                    <p><b>Lançamento:</b> ${data.results[i].release_date}</p>
                                    <p><b>Personagens:</b> ${data.results[i].characters}</p>
                                    <p><b>Planetas:</b> ${data.results[i].planets}</p>
                                    <p><b>Naves estelares:</b> ${data.results[i].starships}</p>
                                    <p><b>Veículos:</b> ${data.results[i].vehicles}</p>
                                    <p><b>Species:</b> ${data.results[i].species}</p>
                                </div>
                            </div>`;
        }

    document.getElementById("show-films").innerHTML = listFilm;
}

async function getStarships(url){

    if(url == undefined){
        url = urlStarships;
    }

    const data = await getData(url);

        for(let i=0; i<data.results.length; i++){
            listStarships += `<div class="card">
                                <div class="card-container">
                                    <p><b>Nome:</b> ${data.results[i].name}</p>
                                    <p><b>Modelo:</b> ${data.results[i].model}</p>
                                    <p><b>Fabricante:</b> ${data.results[i].manufacturer}</p>
                                    <p><b>Valor:</b> ${data.results[i].cost_in_credits}</p>
                                    <p><b>Tamanho:</b> ${data.results[i].length}</p>
                                    <p><b>Velocidade:</b> ${data.results[i].max_atmosphering_speed}</p>
                                    <p><b>Equipe Tecnica:</b> ${data.results[i].crew}</p>
                                    <p><b>Passageiros:</b> ${data.results[i].passengers}</p>
                                    <p><b>Capacidade de carga:</b> ${data.results[i].cargo_capacity}</p>
                                    <p><b>Consumíveis:</b> ${data.results[i].consumables}</p>
                                    <p><b>Rating:</b> ${data.results[i].hyperdrive_rating}</p>
                                    <p><b>MGLT:</b> ${data.results[i].MGLT}</p>
                                    <p><b>Classe:</b> ${data.results[i].starship_class}</p>
                                    <p><b>Pilotos:</b> ${data.results[i].pilots}</p>
                                    <p><b>Filmes:</b> ${data.results[i].films}</p>
                                </div>
                            </div>`;
        }

    document.getElementById("show-starships").innerHTML = listStarships;
    urlStarships = `${data.next}`;
}

async function getVehicles(url){

    if(url == undefined){
        url = urlVehicles;
    }

    const data = await getData(url);

        for(let i=0; i<data.results.length; i++){
            listVehicles += `<div class="card">
                                <div class="card-container">
                                <p><b>Nome:</b> ${data.results[i].name}</p>
                                <p><b>Modelo:</b> ${data.results[i].model}</p>
                                <p><b>Fabricante:</b> ${data.results[i].manufacturer}</p>
                                <p><b>Valor:</b> ${data.results[i].cost_in_credits}</p>
                                <p><b>Tamanho:</b> ${data.results[i].length}</p>
                                <p><b>Velocidade:</b> ${data.results[i].max_atmosphering_speed}</p>
                                <p><b>Equipe Tecnica:</b> ${data.results[i].crew}</p>
                                <p><b>Passageiros:</b> ${data.results[i].passengers}</p>
                                <p><b>Capacidade de carga:</b> ${data.results[i].cargo_capacity}</p>
                                <p><b>Consumíveis:</b> ${data.results[i].consumables}</p>
                                <p><b>Classe:</b> ${data.results[i].vehicle_class}</p>
                                <p><b>Pilotos:</b> ${data.results[i].pilots}</p>
                                <p><b>Filmes:</b> ${data.results[i].films}</p>
                                </div>
                            </div>`;
        }

    document.getElementById("show-vehicles").innerHTML = listVehicles;
    urlVehicles = `${data.next}`;
}

async function getSpecies(url){

    if(url == undefined){
        url = urlVehicles;
    }

    const data = await getData(url);

        for(let i=0; i<data.results.length; i++){
            listSpecies += `<div class="card">
                                <div class="card-container">
                                    <p><b>Nome:</b> ${data.results[i].name}</p>
                                    <p><b>Classificação:</b> ${data.results[i].classification}</p>
                                    <p><b>Designação:</b> ${data.results[i].designation}</p>
                                    <p><b>Altura média:</b> ${data.results[i].average_height}</p>
                                    <p><b>Pele:</b> ${data.results[i].skin_colors}</p>
                                    <p><b>Cabelo:</b> ${data.results[i].hair_colors}</p>
                                    <p><b>Olhos:</b> ${data.results[i].eye_colors}</p>
                                    <p><b>Vida média:</b> ${data.results[i].average_lifespan}</p>
                                    <p><b>Planeta natal:</b> ${data.results[i].homeworld}</p>
                                    <p><b>Idioma:</b> ${data.results[i].language}</p>
                                    <p><b>Pessoas:</b> ${data.results[i].people}</p>
                                    <p><b>Filmes:</b> ${data.results[i].films}</p>
                                </div>
                            </div>`;
        }

    document.getElementById("show-species").innerHTML = listSpecies;
    urlVehicles = `${data.next}`;
}