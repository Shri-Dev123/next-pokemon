import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Pokemon = ({pokemon}) => {
  
  const pokeIndex = '#'+ ('00'+ pokemon.id).slice(-3);

  return (
    <Link legacyBehavior href= {`/pokemon/${pokemon.name}`}>
      <a>
        <div key= {pokemon.name} className= "bg-red-300 p-5 pt-10 rounded  flex flex-col justify-center items-center relative">
            <div className= "absolute text-4xl top-1 right-3 text-sky-400/100 font-bold"> {pokeIndex}</div>
            <Image src= {`${pokemon.sprites.other["official-artwork"].front_default}`} width= {150} height= {150} layout= 'intrinsic' alt= 'pokemon'/>
            <div className= "capitalize text-lg tracking-wide">{pokemon.name}</div>
        </div>
      </a>
    </Link>
  )
}

export default Pokemon;
