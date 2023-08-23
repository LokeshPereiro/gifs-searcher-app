import { GifItem } from "../components/GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

export function GifGridItems({ searchItems }) {
  const { gifs, isLoading } = useFetchGifs(searchItems);
  // console.log(isLoading);
  // console.log(gifs);
  return (
    <>
      <h3>{searchItems}</h3>
      {isLoading && <h4 style={{ color: "red" }}>GIFs Loading...</h4>}
      <div className="card-grid">
        {gifs.map((gifObj) => (
          // <li key={id}>{title}</li>
          <GifItem key={gifObj.id} {...gifObj} />
        ))}
      </div>
    </>
  );
}

GifGridItems.propTypes = {
  searchItems: PropTypes.string.isRequired,
};
