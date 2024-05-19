import { SimpleGrid } from "@mantine/core";
import CardMovie from "../CardMovie/CardMovie";
import styles from "./movies.module.css";
// import { POSTER_BASE_URL } from "../../lib/baseUrl";
// import type { SingleMovie } from "../../types/appTypes";
import type { MovieT } from "../../app/lib/definitions";

const Movies = ({ moviesCollection, genres }: any) => {
	const movies = moviesCollection.results;

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
