import { Pagination, Stack } from "@mantine/core";
import Filters from "../components/Filters/Filters";
import EmptyMovie from "../components/EmptyMovie/EmptyMovie";
import Movies from "../components/Movies/Movies";
import { getGenres, getMovies } from "../app/lib/requests/moviesRequests";
// import { useState, useEffect } from "react";
import PaginationMovies from "../components/PaginationMovies/PaginationMovies";

const HomePage = async () => {
	const genres = await getGenres();
	const moviesCollection = await getMovies(1);
	const { total_pages } = await moviesCollection;
	// const [page, setPage] = useState(1);
	const findedMoviesArrayFetchedSampleEmpty = [];

	// const [data, setData] = useState(null);
	// const [isLoading, setLoading] = useState(true);

	// const onChangePage = (page: number) => {
	// 	console.log(page);
	// };

	return (
		<>
			<Stack style={{ margin: "0 auto" }}>
				{/* <Filters genres={genres} /> */}
				{findedMoviesArrayFetchedSampleEmpty.length !== 0 ? (
					<EmptyMovie />
				) : (
					<Movies
						moviesCollection={moviesCollection}
						genres={genres}
					/>
					// <div></div>
				)}

				{/* <Pagination
					total={total_pages}
					// onChange={(page: number) => onChangePage(page)}
					siblings={1}
					color="#9854F6"
					style={{ marginLeft: "auto", marginBottom: "82px" }}
				/> */}

				<PaginationMovies
					totalPages={total_pages}
					currentPage={1}
					// onPageChange={onChangePage}
				/>
			</Stack>
		</>
	);
};

export default HomePage;
