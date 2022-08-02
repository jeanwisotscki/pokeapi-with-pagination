import React from "react";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { NavigationButton } from "./components/NavigationButton";
import { PokemonCard } from "./components/PokemonCard";

export const App = () => {
  const [pokesList, setPokesList] = React.useState([]);
  const [nextPage, setNextPage] = React.useState(null);
  const [prevPage, setPrevPage] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleNextPage = () => {
    if (nextPage) {
      setIsLoading(true);

      fetch(nextPage)
        .then((res) => res.json())
        .then((body) => {
          setIsLoading(false);

          setNextPage(body.next);
          setPrevPage(body.previous);
          setPokesList(body.results);
        });
    }
  };

  const handlePrevPage = () => {
    if (prevPage) {
      setIsLoading(true);

      fetch(prevPage)
        .then((res) => res.json())
        .then((body) => {
          setIsLoading(false);

          setNextPage(body.next);
          setPrevPage(body.previous);
          setPokesList(body.results);
        });
    }
  };

  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
      .then((res) => res.json())
      .then((body) => {
        setPokesList(body.results);
        setNextPage(body.next);
        setPrevPage(body.previous);
      });
  }, []);

  return (
    <div>
      <Header />
      <Main>
        {isLoading ? (
          <h3>Carregando...</h3>
        ) : (
          pokesList &&
          pokesList.map((poke) => (
            <PokemonCard key={poke.name} name={poke.name} />
          ))
        )}

        <NavigationButton onClick={handlePrevPage}>Anterior</NavigationButton>
        <NavigationButton onClick={handleNextPage} floatRight={true}>
          Próxima
        </NavigationButton>
      </Main>
    </div>
  );
};
