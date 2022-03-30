

const htmlModel = (data) => {
    const li = document.createElement('li')
    const types = data.types.map(typeInfo => typeInfo.type.name)
    li.classList.add(`card`, `${types[0]}`)
    li.innerHTML = `
                <img class="card-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png">
                <h2 class="card-title"> ${data.id}. ${data.name} </h2>
                <p class="card-subtitle">${types.join(' | ')} </p> 
                    `
    return document.querySelector('[data-js="pokedex"]').appendChild(li)
}


const fetchPokemons = () => {
    
    const listaPokemonPromises = []

    for (let i = 1; i <= 150; i++){
        listaPokemonPromises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(response => response.json()))
    }

    Promise.all(listaPokemonPromises)
        .then(data => {
            data.filter(htmlModel, data)
        })
}

fetchPokemons()

        
        
        