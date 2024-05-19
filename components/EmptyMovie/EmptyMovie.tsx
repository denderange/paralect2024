import { Text, Box } from "@mantine/core";
import styles from "./emptyMovie.module.css";
import Image from "next/image";
import imgEmptyMovie from "../../public/images/empty-movie.png";

const EmptyMovie = () => {
	return (
		<Box className={styles.container}>
			<Image
				src={imgEmptyMovie}
				alt="empty movie"
				className={styles.img}
			/>
			<Text className={styles.text}>
				We don&apos;t have such movies, look for another one
			</Text>
		</Box>
	);
};

export default EmptyMovie;
