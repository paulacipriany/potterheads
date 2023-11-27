let apiBaseUrl = 'https://harry-potter-api-en.onrender.com'

let mainPersonagens = document.getElementById('boxpersonagens');

function exibirPersonagensNaTela(){

    fetch(`${apiBaseUrl}/characters`)
    .then(response => response.json())
    .then(response => exibirPersonagens(response));
}

function exibirPersonagens(response){
    

    response.forEach(personagem => {

        let container = document.createElement('div');
        container.className = 'item';
        container.id = personagem.id;

        let containerImage = document.createElement('div');
        containerImage.className = 'boxImage';

        let personagemImage = document.createElement('img');
        personagemImage.className = 'personagemImage';
        personagemImage.src = personagem.image;

        let personagemInfoContainer = document.createElement('div');
        personagemInfoContainer.className = 'personagemInfo';

        let personagemName = document.createElement('h3');
        personagemName.innerText = personagem.character;

        let personagemAtor = document.createElement('p');
        personagemAtor.innerText = `(${personagem.interpretedBy})`;

        let personagemCasa = document.createElement('p');
        personagemCasa.className = 'personagemCasa';
        personagemCasa.innerText = personagem.hogwartsHouse;

        containerImage.append(personagemImage);
        personagemInfoContainer.append(personagemName, personagemAtor, personagemCasa);
        container.append(containerImage, personagemInfoContainer);
        mainPersonagens.append(container);

    });
};

exibirPersonagensNaTela();