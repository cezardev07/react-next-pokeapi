/* eslint-disable @next/next/no-img-element */
"use client"

import { 
  useEffect,
  useState 
} from "react"

import { TypePokemon } from "../@types/TypePokemon"

import axios from "axios"

export default function Pokemons(){
  const [pokemons, setPokemons] = useState<TypePokemon[]>([])
  const [filterPoke, setFilterPoke] = useState<TypePokemon[]>([])

  useEffect(() => {
    const get = async (size : number) => {
      const endpoint : string | undefined = process.env.endpoint
      if(endpoint){
        try {
          for (let i = 1; i <= size; i++){
            const data = await axios.get(endpoint + i)
            setPokemons(prev => [
              ...prev, {
                id: data?.data?.id,
                name: data?.data?.name,
                img: data?.data?.sprites.other.home.front_default
              }
            ])
          }
        } catch (error) {
          console.log("[ ERROR ] -> " + error)
        }
      }
    }
    get(200)
  },[])

  const handlePokemons = (e: { target: { value: string } }) => {
    const newPokemons = pokemons.filter(filter_elements => {
      if(filter_elements.name.includes(e.target.value)){
        return filter_elements
      }
    })
    setFilterPoke(newPokemons)
  }

  return(
    <main 
      className="relative"
    >
      <div 
        className="sticky top-16 z-10 text-center p-3 bg-slate-700 flex justify-end"
      >
        <input
          onChange={handlePokemons} 
          type="text" 
          placeholder="Buscar pokemon"
          className="p-2 pl-4 outline-none rounded-sm" 
        />
      </div>
      <div 
        className="wrapper p-5 flex gap-2"
      >
        {
          filterPoke.length > 0 ? (
            filterPoke?.map((pokemon) => {
              return(
                <div 
                  key={pokemon.id} 
                  className="cart text-center p-3 hover:bg-blue-50 cursor-pointer">
                  <p 
                    className="capitalize"
                  >
                    {pokemon.name}
                  </p>
                  <img 
                    src={pokemon.img} 
                    alt={`imagem ${pokemon.name}`} 
                    className="object-contain flex items-center justify-center w-[100%] h-[100%] p-3"  
                  />
                </div>
              )
            })
          ) : (
            pokemons?.map((pokemon) => {
              return(
                <div 
                  key={pokemon.id} 
                  className="border-2 border-blue-50 cart text-center p-3 hover:bg-blue-50 cursor-pointer">
                  <p 
                    className="capitalize"
                  >
                    {pokemon.name}
                  </p>
                  <img 
                    src={pokemon.img} 
                    alt={`imagem ${pokemon.name}`} 
                    className="object-contain flex items-center justify-center w-[100%] h-[100%] p-3"  
                  />
                </div>
              )
            })
          )
        }
      </div>
    </main>
  )
}