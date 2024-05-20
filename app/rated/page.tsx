import {
	Group,
	Stack,
	Title,
	TextInput,
	TextInputProps,
	ActionIcon,
	Button,
	Box,
} from "@mantine/core";
import styles from "./ratedMovies.module.css";
import IconSearch from "../../public/icons/icon-search.svg";
import Movies from "../../components/Movies/Movies";
import EmptyRated from "../../components/EmptyRated/EmptyRated";

type ratedMoviesProps = {};

const ratedMovies = ({ searchProps }: { searchProps: TextInputProps }) => {
	const ratedMovies = [];

	return (
		<Stack className={styles.pageContentWrapper}>
			{/* page header */}
			<Group className={styles.header}>
				<Title
					className={styles.title}
					order={1}
				>
					Rated movies
				</Title>

				<Box className={styles.searchContainer}>
					<TextInput
						className={styles.searchInput}
						placeholder="Search questions"
						rightSectionWidth={42}
						leftSection={<IconSearch />}
						{...searchProps}
					/>
					<Button className="btnPrimaryS btn-search">Search</Button>
				</Box>
			</Group>

			{ratedMovies.length === 0 && <EmptyRated />}
			{/* <Movies /> */}
		</Stack>
	);
};

export default ratedMovies;
