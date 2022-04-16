import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { listOnePokemon } from '../functions/functions'
const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null)

  const params = useParams()
  useEffect(() => {
    listOnePokemon(params.id, setPokemon)
  }, [])

  return (
    <>
      {pokemon != null ? (
        <div>
          <h1><b> {params.id}</b></h1>
          <img src={pokemon.sprites.front_default} alt="" height={'240px'}/>
        </div>
      ) : ('Lo sentimos!, en este momento no hay Pokemons')}
    </>
  )
}

export default Pokemon