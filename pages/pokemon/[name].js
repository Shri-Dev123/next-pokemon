import React from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'

const PokemonPage = ({pokemon}) => {

    const pokemonIndex= '#' + ('00'+ pokemon.id).slice(-3);
    console.log(pokemon);

    const renderTypes= () => (
        pokemon.types.map((pokemon)=> 
         <li key={pokemon.type.slot} className= "px-2 py-1 bg-slate-700 rounded">
         {pokemon.type.name}
         </li>
        )
    )

    const renderStats= () => (
        pokemon.stats.map((stat, index)=> 
            <div key= {index} className= "bg-slate-700 my-2 rounded p-1">
                <div className="bg-slate-900 rounded" style= {{width: `${stat.base_stat}%`}}>{stat.base_stat}</div>
            </div>
        )
    )

  return (
    <Layout title= {`${pokemon.name}`}>
        <div className= "flex flex-col justify-center items-center">
            <span className= "absolute text-[400px] font-bold text-slate-500 select-none">{pokemonIndex}</span>
            <Image src= {`${pokemon.sprites.other["official-artwork"].front_default}`} width= {400} height= {400} layout= 'intrinsic' alt= 'pokemon'/>
        </div>
        <div className= "bg-slate-900 rounded p-5 flex flex-col justify-center gap-5">
            <ul className= "flex gap-5">
                {renderTypes()}
                {/* {pokemon.types.map((pokemon)=> 
                <li key={pokemon.type.slot}>{pokemon.type.name}</li>
                )} */}
            </ul>
            <div>{renderStats()}</div>
        </div>
        {/* <div className= "bg-slate-700"> */}
        {/* </div> */}


    </Layout>
  )
}

export default PokemonPage

export async function getServerSideProps(context) {

    const res=  await fetch(`https://pokeapi.co/api/v2/pokemon/${context.query.name}`)
    const pokemon = await res.json();
  
    return {
      props: {pokemon}, 
    }
  }