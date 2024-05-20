import { Pagination, Stack } from "@mantine/core";
import Filters from "../components/Filters/Filters";
import EmptyMovie from "../components/EmptyMovie/EmptyMovie";
import Movies from "../components/Movies/Movies";
import { getGenres, getMovies } from "../app/lib/requests/moviesRequests";
import PaginationMovies from "../components/PaginationMovies/PaginationMovies";

const HomePage = async () => {
	const [{ genres }, moviesCollection] = await Promise.all([
		getGenres(),
		getMovies(21),
	]);
	const { total_pages } = await moviesCollection;
	const findedMoviesArrayFetchedSampleEmpty = [];

	return (
		<>
			<Stack style={{ margin: "0 auto" }}>
				<Filters genres={genres} />
				{findedMoviesArrayFetchedSampleEmpty.length !== 0 ? (
					<EmptyMovie />
				) : (
					<Movies
						moviesCollection={moviesCollection}
						genres={genres}
					/>
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
				{/* <button onClick={() => console.log("btn clicked")}>Ckick this</button> */}
			</Stack>
		</>
	);
};

export default HomePage;
