import { Box, Group, Title, Text } from "@mantine/core";
import styles from "./movieHeading.module.css";
import IconStar from "../../public/icons/icon-star.svg";
import { formatPopularity } from "../../app/lib/utils/formatPopularity";

export type MovieHadingProps = {
	title: string;
	year: string;
	rating: number;
	popularity: number | null;
};

const MovieHading = ({ title, year, rating, popularity }: MovieHadingProps) => {
	const moviePopularity = formatPopularity(popularity);

	return (
		<Box>
			<Title
				className={styles.title}
				order={6}
			>
				{title}
			</Title>
			<Text className={styles.year}>{year}</Text>

			<Group gap={4}>
				<IconStar className={styles.starYellow} />
				<Text className={styles.rating}>
					{rating} <span>({moviePopularity})</span>
				</Text>
			</Group>
		</Box>
	);
};

export default MovieHading;
