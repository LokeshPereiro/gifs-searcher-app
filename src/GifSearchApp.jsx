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
  const [searchKey, setSearchKey] = useState([]);

  const onAddSearchedValue = (newSearchKey) => {
    /*

    // Busqueda estática Op.1
    setSearchKey([...searchKey, "Hey Hello"]);

    // Busqueda estática Op.2 mediante el callback
    setSearchKey((s) => [...s, "Hey Hello"]);
    
    */

    // console.log(newSearchKey);
    // Si lo que he buscado ya existe en los resultados que no haga nada..
    if (searchKey.includes(newSearchKey)) return;

    setSearchKey([newSearchKey, ...searchKey]);
  };

  return (
    <>
      {/* Title App */}
      <i>
        <h1>Search Your Fav Gifs</h1>
      </i>

      {/* Input para hacer el Search */}
      {/* Le paso mi funcion como prop para que me devuleva el campo de busqueda como argumento/evento */}
      <AddCategory onNewSearchingGif={(evt) => onAddSearchedValue(evt)} />
      {/* <AddCategory onNewSearchingGif={onAddSearchedValue} /> */}

      {/* Lista de los resultados consultados */}
      {searchKey.map((search) => (
        // return <li>HOLA</li>;
        // Target de los resultados
        <GifGridItems key={search} search={search} />
      ))}
    </>
  );
}
