import { MovieItem } from "./MovieItem";

export function MoviesList() {
  return (
    <div className="movies-list-container">
      <MovieItem
        title="Film 1"
        image="https://placehold.co/200"
        releaseDate="x"
      />
      <MovieItem
        title="Film 2"
        image="https://placehold.co/200"
        releaseDate="x"
      />
      <MovieItem
        title="Film 3"
        image="https://placehold.co/200"
        releaseDate="x"
      />
      <MovieItem
        title="Film 4"
        image="https://placehold.co/200"
        releaseDate="x"
      />
      <MovieItem
        title="Film 5"
        image="https://placehold.co/200"
        releaseDate="x"
      />
      <MovieItem
        title="Film 6"
        image="https://placehold.co/200"
        releaseDate="x"
      />
    </div>
  );
}
