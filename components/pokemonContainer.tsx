import PokemonCard from "./pokemonCard";

const getPokemon = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

const getSpecies = async(url)=>{
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

export default async function PokemonContainer({url}:{url:string}){
    const pokemon = await getPokemon(url);

    const speciesUrl = pokemon.species.url;

    const species = await getSpecies(speciesUrl);

    return (
        <PokemonCard pokemon={pokemon} species={species}/>
    )
}