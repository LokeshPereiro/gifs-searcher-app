import PropTypes from "prop-types";

export function GifItem({ title, url }) {
  // console.log(title, url);
  return (
    <div className="card">
      <img src={url} alt={title} />
      <h4>{title}</h4>
    </div>
  );
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
