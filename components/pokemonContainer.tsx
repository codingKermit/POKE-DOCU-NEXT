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

const getType = async(url)=>{
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

export default async function PokemonContainer({url}:{url:string}){
    const pokemon = await getPokemon(url);

    const speciesUrl = pokemon.species.url;

    const species = await getSpecies(speciesUrl);

    const typesData = pokemon.types;

    const types = [];

    for(const type of typesData){

        const url = type.type.url;

        const typeInfo = await getType(url);

        const filteredTypeData = typeInfo.data.names.filter((d)=>d.language.name === 'ko');

        const typeItem = {
            text : filteredTypeData[0].name,
            val : typeInfo.data.name
        }

        types.push(typeItem);
    }

    return (
        <PokemonCard pokemon={pokemon} species={species} types={types}/>
    )
}