import { useState } from "react";
import PropTypes from "prop-types";

export function AddCategory({ onNewSearchingGif }) {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmitedValue = (e) => {
    e.preventDefault();
    // console.log(inputValue);
    // Pequeña validacion para que se introducza más de 1 caracter en el input y que no se envie input vacio
    if (inputValue.trim().length <= 1) return;
    // onNewSearchingGif((prevSearchedKeys) => [inputValue, ...prevSearchedKeys]);

    onNewSearchingGif(inputValue.trim());
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={onSubmitedValue} aria-label="form">
        <input
          type="text"
          placeholder="Search Your Fav Gifs"
          onChange={onInputChange}
          value={inputValue}
        />
      </form>
    </>
  );
}

AddCategory.propTypes = {
  onNewSearchingGif: PropTypes.func.isRequired,
};
