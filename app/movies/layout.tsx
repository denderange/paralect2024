import React from "react";
import Filters from "../../components/Filters/Filters";
import EmptyMovie from "../../components/EmptyMovie/EmptyMovie";
import Movies from "../../components/Movies/Movies";

const MoviesLayout = () => {
	const findedMoviesArrayFetchedSampleEmpty = [];

	return (
		<>
			<Filters genres={genres} />
			{findedMoviesArrayFetchedSampleEmpty.length !== 0 ? (
				<EmptyMovie />
			) : (
				<Movies
					moviesCollection={moviesCollection}
					genres={genres}
				/>
			)}
		</>
	);
};

export default MoviesLayout;
