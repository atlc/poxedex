import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then((res) => res.json())
            .then((data) => setPokemon(data.results));
    }, []);

    return (
        <div className="row justify-content-center">
            <h1 className="text-center display-1 mt-5">Pokemon.jsx lmao</h1>

            {pokemon.map((pk) => {
                const id = pk.url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
                return (
                    <div key={`pokemon-card-${pk.name}`} className="col-12 col-md-6 col-lg-3 my-2">
                        <div className="card p-2 shadow">
                            <div className="rounded-2 p-2 text-center card-title bg-danger text-white">{pk.name}</div>
                            <div className="card-body">
                                <Link className="btn btn-danger my-2" to={`/pokemon/${id}`}>
                                    See #{id}'s details
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Pokemon;
