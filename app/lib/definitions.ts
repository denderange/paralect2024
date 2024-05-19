export type GenreT = {
	id: number;
	name: string;
};

export type MovieT = {
	id: number,
	title: string,
	poster_path: string,
	release_date: string,
	vote_average: number,
	popularity: number,
	overview: string | null,
	genre_ids: number[],
}

type CardMovieT = {
	poster: string;
	genre_ids: number[];
	genres: GenreT[];
	overview: string | null;
	title: string;
	year: string;
	rating: number;
	popularity: number | null;
};