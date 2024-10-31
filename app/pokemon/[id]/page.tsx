import { Col, Container, Image, Row, Table } from "react-bootstrap";
import { LIST_URL } from "../page"
import { typeRelation } from "../../../utils/TypeRelation";
import TypeButton from "../../../components/TypeButton";

const getPokemon = async(url) => {
    const res = await fetch(url);
    const json = res.json();
    return json;
}

const getSpecies = async(url)=>{
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

export default async function PokemonDetail({id}:{id:string}){
    
    const url = `${LIST_URL}/${id}`;
    
    const pokemon = await getPokemon(url);

    const types = pokemon.types.map((type)=>type.type.name);

    const typeEffectiveness = await typeRelation(types);

    const imgUrl = pokemon.sprites.front_default;

    const speciesUrl = pokemon.species.url;

    const species = await getSpecies(speciesUrl);
    
    const spec = species.names.filter((spec)=>spec.language.name === 'ko')[0];
    
    const name = spec.name;

    const stats = pokemon.stats;

    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <Image src={imgUrl} rounded thumbnail/>
                    </Col>
                    <Col>
                        <h2>{name}</h2>
                        <Table>
                            <thead>
                                <tr>
                                    <th>HP</th>
                                    <th>공</th>
                                    <th>방</th>
                                    <th>특공</th>
                                    <th>특방</th>
                                    <th>스피드</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {stats.map((stat)=><td>{stat}</td>)}
                                </tr>
                            </tbody>
                        </Table>
                        <Table>
                            <thead>
                                <tr>
                                    <th>4배</th>
                                    <th>2배</th>
                                    <th>1배</th>
                                    <th>0.5배</th>
                                    <th>0.25배</th>
                                    <th>0배</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                    {typeEffectiveness[0].map((type)=>{
                                        return(
                                                <TypeButton key={type.key} text={type.text} type={type.key}/>
                                            )
                                        })}
                                    </td>
                                    <td>
                                    {typeEffectiveness[0.25].map((type)=>{
                                        return(
                                                <TypeButton key={type.key} text={type.text} type={type.key}/>
                                            )
                                        })}
                                    </td>
                                    <td>
                                    {typeEffectiveness[0.5].map((type)=>{
                                        return(
                                                <TypeButton key={type.key} text={type.text} type={type.key}/>
                                            )
                                        })}
                                    </td>
                                    <td>
                                    {typeEffectiveness[1].map((type)=>{
                                        return(
                                                <TypeButton key={type.key} text={type.text} type={type.key}/>
                                            )
                                        })}
                                    </td>
                                    <td>
                                    {typeEffectiveness[2].map((type)=>{
                                        return(
                                                <TypeButton key={type.key} text={type.text} type={type.key}/>
                                            )
                                        })}
                                    </td>
                                    <td>
                                    {typeEffectiveness[4].map((type)=>{
                                        return(
                                                <TypeButton key={type.key} text={type.text} type={type.key}/>
                                            )
                                        })}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}