// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
// const newImg = document.createElement('img');
// newImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
// container.appendChild(newImg)
let srcPrefix = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
for(let pokeNum = 1; pokeNum<152; pokeNum++){
    const divider = document.createElement('div');
    divider.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${pokeNum}`;
    const newImg = document.createElement('img');
    newImg.src = `${srcPrefix}${pokeNum}.png`;

    container.appendChild(divider);
    divider.appendChild(newImg);
    divider.appendChild(label);
}