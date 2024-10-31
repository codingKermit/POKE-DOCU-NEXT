import Link from "next/link";
import { Card, CardLink } from "react-bootstrap";
import TypeButton from "./TypeButton";

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

export default async function PokemonCard({url}:{url:string}){
    
    const pokemon = await getPokemon(url);

    const front = pokemon.sprites.front_default;

    const types = pokemon.types;

    const speciesUrl = pokemon.species.url;

    const species = await getSpecies(speciesUrl);
    
    const spec = species.names.filter((spec)=>spec.language.name === 'ko')[0];
    
    const name = spec.name;

    return(
        <div>
            <Card className="mb-3 text-center" >
                <Link href={`/Pokemon/${pokemon.id}`}>
                    <Card.Img src={front} alt={name}/>
                    <Card.Text>{name}</Card.Text>
                    <Card.Text className="mb-3">
                        {types.map((type, index)=><TypeButton key={type+index} type={type.val} text={type.text}/>)}
                    </Card.Text>
                </Link>
            </Card>
        </div>
    )    
}