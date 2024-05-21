import { SimpleGrid } from "@mantine/core";
import CardMovie from "../CardMovie/CardMovie";
import styles from "./movies.module.css";
// import { POSTER_BASE_URL } from "../../lib/baseUrl";
// import type { SingleMovie } from "../../types/appTypes";
import type { MovieT, GenreT } from "../../app/lib/definitions";
import { getFilteredMovies } from "../../app/lib/requests/moviesRequests";

const Movies = async ({
	moviesCollection,
	genres,
	query,
	currentPage,
}: {
	moviesCollection: any;
	genres: { genres: GenreT[] };
	query: string;
	currentPage: number;
}) => {
	const movies = moviesCollection.results;
	const filteredMovies = await getFilteredMovies(1, currentPage);

	console.log("Movies comp -- query: " + query);
	console.log("Movies comp -- filteredMovies: " + filteredMovies);
	console.log("Movies comp -- results: " + filteredMovies.results);
	console.log(filteredMovies);

	return (
		<SimpleGrid
			cols={2}
			mt={10}
			mb={24}
		>
			{movies.map((movie: MovieT) => (
				<CardMovie
					title={movie.title}
					poster={`${process.env.POSTER_BASE_URL}/w200${movie.poster_path}`}
					year={movie.release_date}
					rating={movie.vote_average}
					genre_ids={movie.genre_ids}
					genres={genres}
					key={movie.id}
					id={movie.id}
					popularity={movie.popularity}
					overview={movie.overview}
				/>
			))}
		</SimpleGrid>
	);
};

export default Movies;
