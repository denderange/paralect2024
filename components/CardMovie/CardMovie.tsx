"use client";
import { Group, Tooltip, Stack, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import MovieHeading from "../MovieHeading/MovieHeading";
import ButtonRating from "../ButtonRating/ButtonRating";
import imgNoPoster from "../../public/images/no-poster.png";
import styles from "./cardMovie.module.css";
import type { GenreT } from "../../app/lib/definitions";
import { getGenresNames } from "../../app/lib/getGenreNames";
import ModalRating from "../ModalRating/ModalRating";
import { useDisclosure } from "@mantine/hooks";

type CardMovieProps = {
	id: number;
	poster: string | null;
	genre_ids: number[];
	genres: GenreT[];
	overview: string | null;
	title: string;
	year: string;
	rating: number;
	popularity: number | null;
};

const CardMovie = ({
	id,
	poster,
	genre_ids,
	genres,
	title,
	year,
	rating,
	popularity,
	overview,
}: CardMovieProps) => {
	const [opened, { open, close }] = useDisclosure(false);
	const overviewText = overview?.slice(0, 250) + "...";
	const genreNames = getGenresNames(genres, genre_ids);

	return (
		<>
			<Link href="/movieid">
				<Group
					className={styles.card}
					gap={0}
				>
					<Tooltip
						className={styles.overview}
						multiline
						w={220}
						withArrow
						transitionProps={{ duration: 200 }}
						label={overviewText}
						disabled={!overview}
					>
						<Image
							className={styles.img}
							src={poster ? poster : imgNoPoster}
							alt={title}
							width={119}
							height={170}
						/>
					</Tooltip>

					<Stack className={styles.info}>
						<MovieHeading
							title={title}
							year={year}
							rating={rating}
							popularity={popularity}
						/>

						<Text className={styles.genres}>
							<span>Genres </span>
							{genreNames}
						</Text>
						<div>movie id: {id}</div>
					</Stack>

					<ButtonRating
						// rating={9}
						btnClick={open}
					/>
				</Group>
			</Link>

			<ModalRating
				opened={opened}
				close={close}
				movieTitle={title}
			/>
		</>
	);
};

export default CardMovie;
