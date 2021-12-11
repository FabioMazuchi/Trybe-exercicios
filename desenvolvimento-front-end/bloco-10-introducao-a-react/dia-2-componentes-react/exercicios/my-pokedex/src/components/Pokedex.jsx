import React from "react";
import "./Pokedex.css";

class Pokedex extends React.Component {
  render() {
    const pokemon = this.props.pokemon;

    return (
      <section key={pokemon.id}>
        <div>
          <p className="name-poke">{pokemon.name}</p>
          <p>{pokemon.type}</p>
          <p>
            Average Weight: {pokemon.averageWeight.value}{" "}
            {pokemon.averageWeight.measurementUnit}
          </p>
        </div>
        <img src={pokemon.image} alt={pokemon.moreInfo} />
      </section>
    );
  }
}

export default Pokedex;
