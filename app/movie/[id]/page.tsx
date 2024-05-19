import { Metadata } from "next";
import EmptyMovie from "../../../components/EmptyMovie/EmptyMovie";
import { getMoviDetails } from "../../lib/requests/moviesRequests";

type Props = {
	params: {
		id: number;
	};
};

export const generateMetadata = async ({
	params: { id },
}: Props): Promise<Metadata> => {
	return {
		title: `Movie ${id}`,
	};
};

const Movie = async ({ params: { id } }: Props) => {
	const movie = getMoviDetails(id);
	const emptyMovie = Number(id);

	console.log(movie);

	return <>{emptyMovie === 11 ? <EmptyMovie /> : <div>Movie id: {id}</div>}</>;
};

export default Movie;
