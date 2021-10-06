let listPeoples = "";

async function getPeople(){

    let url = "https://swapi.dev/api/people/1";
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(Object.keys(data)[1]);
        console.log(Object.values(data)[1]);

        if(true){
            console.log(data);
        }

        listPeoples += `<div class="card">
                            <div class="card-container">
                                <p class="text14px textName">Nome: ${data.name}</p>
                                <p class="text12px textDescription">Altura: ${data.height}cm</p>
                                <p class="text12px textOldPrice">Peso: ${data.mass}Kg</p>
                                <p class="text16px textPrice">Cabelo: ${data.hair_color}</p>
                            </div>
                        </div>`
    

        document.getElementById("show-people").innerHTML = listPeoples;

        if (data.detail == "Not found") {
            throw new Error('Page not found');
        }
    } catch(erro) {
        console.log("[ERROR] " + erro.message);
    }
}

