import { useState } from "react";
import { AddCategory, GifGridItems } from "./components";

const popularAnimes = [
  "Demon Slayer",
  "One Punch Man",
  "Fullmetal Alchemist",
  "Gintama",
  "Hunter X Hunter",
];

export function GifSearchApp() {
  const [searchList, setSearchList] = useState([]);

  const onAddSearchedValue = (newSearchingKey) => {
    /*
    // Busqueda estática Op.1
    setSearchList([...searchList, "Hey Hello"]);

    // Busqueda estática Op.2 mediante el callback
    setSearchList((s) => [...s, "Hey Hello"]);
    */

    // console.log(newSearchingKey);
    // Si lo que he buscado ya existe en la pantalla (grid), que no haga nada
    if (searchList.includes(newSearchingKey)) return;

    setSearchList([newSearchingKey, ...searchList]);
  };

  return (
    <>
      {/* Title App */}
      <i>
        <h1>Search Your Fav Gifs</h1>
      </i>

      {/* Input para hacer el Search */}
      {/* Le paso mi funcion como prop para que me devuleva el campo de busqueda como argumento/evento */}
      <AddCategory onNewSearchingGif={onAddSearchedValue} />
      {/* <AddCategory onNewSearchingGif={onAddSearchedValue} /> */}

      {/* Lista de los resultados consultados */}
      {searchList.map((searchItems) => (
        <GifGridItems key={searchItems} searchItems={searchItems} />
      ))}
    </>
  );
}
