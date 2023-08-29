import Link from "next/link";

export default function Home() {
  return (
    <main className="home p-5 flex items-center justify-center flex-col gap-10">
      <div className="text-center">
        <h1 
          className="gradient text-6xl font-bold"
        >
          Pokemon Center
        </h1>
      </div>
      <div>
        <Link 
          href="/pokemons"
          className="capitalize hover:bg-zinc-700 text-lg bg-red-500 text-white px-5 py-4 rounded-md"
        >
          get pokemon
        </Link>
      </div>
    </main>
  )
}
