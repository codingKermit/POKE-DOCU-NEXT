import PokemonCard from "../../components/pokemonCard";

export const LIST_URL = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemons = async () => {
    const res = await fetch(LIST_URL);
    const json = await res.json();
    return json;
}

export default async function Pokemon(){
    
    const res = await getPokemons();
    const pokemons = res.results;

    return(
        <div>
            <div>
                {pokemons.map((pokemon)=>{
                    return(
                        <div key={pokemon.name}>
                            <PokemonCard url={pokemon.url}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}