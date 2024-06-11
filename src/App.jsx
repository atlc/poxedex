import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Pokemon from "./views/Pokemon";
import PokemonDetails from "./views/PokemonDetails";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />

            <main className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pokemon" element={<Pokemon pokemon={pokemon} />} />
                    <Route path="/pokemon/:id" element={<PokemonDetails />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;
