import { Row } from "react-bootstrap";
import PokemonContainer from "../../components/pokemonContainer";
import { LIST_URL } from "../utils";



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
                <Row xs={4} sm={4} md={6}>
                    {pokemons.map((pokemon)=>{
                        return(
                            <PokemonContainer key={pokemon.name} url={pokemon.url}/>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}