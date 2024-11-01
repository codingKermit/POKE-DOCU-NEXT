'use client'

import Link from "next/link";
import { Card } from "react-bootstrap";
import TypeButton from "./TypeButton";
import { typeRelation } from "../utils/TypeRelation";

export default function PokemonCard({pokemon, species}){

    const imgUrl = pokemon.sprites.front_default;

    let types = pokemon.types;

    types = typeRelation(types);
    
    const spec = species.names.filter((spec)=>spec.language.name === 'ko')[0];
    
    const name = spec.name;

    console.log(types);


    return(
        <div>
            <Card className="mb-3 text-center" >
                <Link href={`/pokemon/${pokemon.id}`}>
                    <Card.Img src={imgUrl} alt={name}/>
                    <Card.Body>
                        <Card.Text>{name}</Card.Text>
                        {types.map((type, index)=><TypeButton key={type+index} type={type.val} text={type.text}/>)}
                    </Card.Body>
                </Link>
            </Card>
        </div>
    )    
}