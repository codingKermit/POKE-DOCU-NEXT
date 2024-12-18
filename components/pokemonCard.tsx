'use client'

import Link from "next/link";
import { Card } from "react-bootstrap";
import TypeButton from "./TypeButton";

export default function PokemonCard({pokemon, species, types}){

    const imgUrl = pokemon.sprites.front_default;
    
    const spec = species.names.filter((spec)=>spec.language.name === 'ko')[0];
    
    const name = spec.name;

    return(
        <div>
            <Card className="mb-3 text-center" >
                <Link prefetch href={`/pokemon/${pokemon.id}`}>
                    <Card.Img src={imgUrl} alt={name}/>
                    <Card.Body>
                        <Card.Text>{name}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex">
                        {types.map((type, index)=><TypeButton key={type+index} type={type.val} text={type.text}/>)}
                    </Card.Footer>
                </Link>
            </Card>
        </div>
    )    
}