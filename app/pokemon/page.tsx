import { Pagination, Row } from "react-bootstrap";
import PokemonContainer from "../../components/pokemonContainer";
import { LIST_URL } from "../utils";



const getPokemons = async () => {
    const offset = 30;
    const limit = 30;
    const queryParam = `?offset=${offset}&limit=${limit}`
    const res = await fetch(LIST_URL+queryParam);
    const json = await res.json();
    return json;
}

export default async function Pokemon(){
    
    const res = await getPokemons();
    const pokemons = res.results;
    const count = res.count;

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
                <Pagination>

                </Pagination>
            </div>
        </div>
    )
}