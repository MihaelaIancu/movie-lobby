export function MovieItem({ title, image, releaseDate }) {
  return (
    <div className="movie-item-container">
      <div className="movie-item-image">
        <img src={image} alt={`${title} thumbnail`} />
      </div>
      <div className="movie-item-info">
        <div>{title}</div>
        <div>{releaseDate}</div>
      </div>
      <button>Add to favourite</button>
    </div>
  );
}
