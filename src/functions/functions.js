import axios from 'axios'

const listAllPokemons = async (state) =>{
    const request = await axios.get('https://pokeapi.co/api/v2/pokemon')
    state(request.data.results)
}

const listOnePokemon = async (name, state) =>{
    const request = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    state(request.data)
    console.log(request.data)
}

export{
    listAllPokemons, listOnePokemon
}