import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json())
            .then((data) => setPokemon(data));
    }, [id]);

    if (!pokemon) return <></>;

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-md-8">
                <div className="card mt-5 p-2 shadow-lg">
                    <img
                        className="card-img-top"
                        style={{ maxHeight: "33vh", maxWidth: "25vw", alignSelf: "center" }}
                        src={pokemon.sprites.front_default}
                    />
                    <div className="card-title bg-danger text-white rounded-2 p-2 text-center">{pokemon.name}</div>
                    <div className="card-body">
                        <p>Height: {pokemon.height / 10} m</p>
                        <p>Weight: {pokemon.weight / 10} kg</p>
                        <br />
                        <p>Moves:</p>
                        <ul>
                            {pokemon.moves.map((mv) => (
                                <li>{mv.move.name}</li>
                            ))}
                        </ul>
                        <br />
                        <p>Abilities:</p>
                        <ul>
                            {pokemon.abilities.map((ab) => (
                                <li>{ab.ability.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetails;
