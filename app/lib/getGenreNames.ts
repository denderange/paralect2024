import type { GenreT } from "./definitions";

export const getGenresNames = (genres: GenreT[], movieIds: number[]) => {
  const genreNames = [''];

  for (const movieId of movieIds) {
    // const genre = genres.find(genre => genre.id === movieId);
    const genre = ''

    if (genre) {
      // genreNames.push(genre.name);
      genreNames.push(genre);
    }
  }

  return genreNames.join(', ');
}