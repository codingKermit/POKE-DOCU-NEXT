'use client'

import Link from "next/link";
import { Card } from "react-bootstrap";
import TypeButton from "./TypeButton";

export default async function PokemonCard({pokemon, species}){

    const imgUrl = pokemon.sprites.front_default;

    const types = pokemon.types;
    
    const spec = species.names.filter((spec)=>spec.language.name === 'ko')[0];
    
    const name = spec.name;

    return(
        <div>
            <Card className="mb-3 text-center" >
                <Link href={`/Pokemon/${pokemon.id}`}>
                    <Card.Img src={imgUrl} alt={name}/>
                    <Card.Text>{name}</Card.Text>
                    <Card.Text className="mb-3">
                        {types.map((type, index)=><TypeButton key={type+index} type={type.val} text={type.text}/>)}
                    </Card.Text>
                </Link>
            </Card>
        </div>
    )    
}