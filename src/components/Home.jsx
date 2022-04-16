import React, { useEffect, useState } from 'react'
import { listAllPokemons} from '../functions/functions'

const Home = () => {
  const [pokemons, setPokemons] = useState(null)
  useEffect(() => {
    listAllPokemons(setPokemons)
  }, [])

  return (
    <>
      <div><h2>Pokemons</h2></div>
      {pokemons != null ? (
        pokemons.map(pokemon => (
          <div key={pokemon.name}>
            <a href={`/pokemon/${pokemon.name}`}>{pokemon.name}</a>
            
          </div>
        ))
      ) : ('No hay pokemones')}
    </>
  )
}

export default Home