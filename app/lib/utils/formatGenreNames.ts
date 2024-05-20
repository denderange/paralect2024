import type { GenreT } from "../definitions";

export const formatGenresNames = (genres: GenreT[], movieIds: number[]) => {
  const genreNames = [''];

  for (const movieId of movieIds) {
    const genre = genres.find(genre => genre.id === movieId);

    if (genre) {
      genreNames.push(genre.name);
    }
  }
  
  return genreNames.join(', ');
}
