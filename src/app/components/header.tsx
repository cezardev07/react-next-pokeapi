/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Header(){
  return(
    <header 
      className="sticky top-0 z-20 p-3 bg-red-500 text-white"
    >
      <nav 
        className="flex items-center justify-between gap-2"
      >
        <div>
          <Link 
            href="/" 
          >
            <img
              className="w-28" 
              src={`https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png`} 
              alt="PokeApi"
            />
          </Link>
        </div>
        <ul 
          className="flex gap-2"
        >
          <Link 
            href="/" 
            className="uppercase text-sm px-5 py-3 bg-gray-700 rounded-sm hover:bg-gray-800"
          >
            HOME
          </Link>
          <Link 
            href="/pokemons" 
            className="uppercase text-sm px-5 py-3 bg-gray-700 rounded-sm hover:bg-gray-800"
          >
            POKEMONS
          </Link>
        </ul>
      </nav>
    </header>
  )
}