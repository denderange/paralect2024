import { Metadata } from "next";
import type { GenreT } from "../../lib/definitions";
import styles from "./movie.module.css";
import Image from "next/image";
import { Box, Group, Loader, Stack, Text, UnstyledButton } from "@mantine/core";
import { getMoviDetails } from "../../lib/requests/moviesRequests";
import imgEmptyMovie from "../../../public/images/empty-movie-large.png";
import ImgStar from "../../../public/icons/icon-star.svg";
import imgBlank from "../../../public/images/no-poster.png";
import MovieHading from "../../../components/MovieHeading/MovieHeading";
import EmptyMovie from "../../../components/EmptyMovie/EmptyMovie";
import PosterMovie from "../../../components/PosterMovie/PosterMovie";

type ProductionCompaniesT = {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
};

type Props = {
	params: {
		id: number;
	};
	original_title: string;
	poster_path: string;
	release_date: string;
	vote_average: number;
	vote_count: number;
	runtime: number;
	budget: number;
	revenue: number;
	genres: GenreT[];
	overview: string;
	production_companies: ProductionCompaniesT[];
	video: boolean;
};

export const generateMetadata = async ({
	params: { id },
}: Props): Promise<Metadata> => {
	const production = [
		{ image: imgBlank, filmStudio: "Castle Rock Entertainment" },
		{ image: imgBlank, filmStudio: "Darkwoods Productions" },
		{ image: imgBlank, filmStudio: "Warner Bros. Pictures" },
	];

	return {
		title: `Movie ${id}`,
	};
};

const Movie = async ({
	params: { id },
	original_title,
	poster_path,
	release_date,
	vote_average,
	vote_count,
	runtime,
	budget,
	revenue,
	genres,
	overview,
	production_companies,
	video,
}: Props) => {
	const movie = await getMoviDetails(id);
	({
		original_title,
		poster_path,
		release_date,
		vote_average,
		vote_count,
		runtime,
		budget,
		revenue,
		genres,
		overview,
		production_companies,
	} = movie);

	const emptyMovie = Number(id);
	const poster = `${process.env.POSTER_BASE_URL}/w200${poster_path}`;
	// console.log(movie);

	return (
		<Stack className={styles.container}>
			<Box mb={20}>breadcrumbs</Box>

			{/* movie description top section  */}
			<Group className={styles.section}>
				<PosterMovie
					original_title={original_title}
					poster_path={poster}
				/>

				<Stack className={styles.info}>
					<MovieHading
						title={original_title}
						year={release_date}
						rating={vote_average}
						popularity={vote_count}
					/>
					<Group className={styles.details}>
						<Box className={styles.detailsCred}>
							<Text>Duration</Text>
							<Text>Premiere</Text>
							<Text>Budget</Text>
							<Text>Gross worldwide</Text>
							<Text>Genres</Text>
						</Box>
						<Box className={styles.detailsCredInfo}>
							<Text>{runtime || "unknown"}</Text>
							<Text>{release_date || "unknown"}</Text>
							<Text>{budget ? `$ ${budget}` : "unknown"}</Text>
							<Text>{revenue ? `$ ${revenue}` : "unknown"}</Text>
							{genres.map(({ name, id }: GenreT) => (
								<Text
									key={id}
									span
								>
									{name}
								</Text>
							))}
						</Box>
					</Group>
				</Stack>

				<Box className={styles.rating}>
					<UnstyledButton>
						<ImgStar />
					</UnstyledButton>
				</Box>
			</Group>

			{/* movie trailer section  */}
			<Group className={styles.section}>
				<Box className={styles.sectionBox}>
					<Text className={styles.titleSectionText}>Trailer</Text>
					<Box className={styles.trailerBox}></Box>
				</Box>

				<Box className={styles.sectionBox}>
					<Text className={styles.titleSectionText}>Description</Text>
					<Text className={styles.textDescription}>{overview}</Text>
				</Box>

				<Box className={styles.sectionBox}>
					<Text className={styles.titleSectionText}>Production</Text>
					<Stack gap={12}>
						{production_companies.map((studio: ProductionCompaniesT) => (
							<Group
								key={studio.id}
								gap={0}
							>
								{/* <Image
									className={styles.productionImg}
									src={studio.logo_path}
									alt={studio.name}
								/> */}
								<Text className={styles.productionText}>{studio.name}</Text>
							</Group>
						))}
					</Stack>
				</Box>
			</Group>
		</Stack>
	);
};

export default Movie;
