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

export type CardMovieT = {
	poster: string;
	genre_ids: number[];
	genres: GenreT[];
	overview: string | null;
	title: string;
	year: string;
	rating: number;
	popularity: number | null;
};

export type VideoT = {
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	key: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	published_at: string;
	id: string;
}

export type FiltersT = {
	page?: number,
	primary_release_year?: string,
	sort_by?: string,
	vote_averageGte?: number,
	vote_averageLte?: number,
	with_genres?: string
}