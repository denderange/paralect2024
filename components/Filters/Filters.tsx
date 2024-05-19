import {
	Flex,
	Group,
	Select,
	Stack,
	Title,
	Button,
	Box,
	MultiSelect,
} from "@mantine/core";
import { setInputRatingNums } from "../../lib/setInputRatingNums";
import { setInputReleaseYear } from "../../lib/setInputReleaseYear";
import Arrow from "../../public/icons/icon-arrow.svg";
import styles from "./filters.module.css";
import { useState } from "react";

interface IGenre {
	id: number;
	name: string;
}

const Filters = ({ genres }: any) => {
	const [genreValue, setGenreValue] = useState<string[]>([]);

	const genreNames: string[] = genres.map((genre: IGenre) => genre.name);
	const sortByItems = [
		"Most Popular",
		"Latest Popular",
		"Most Rated",
		"Least Rated",
		"Most Voted",
		"Least Voted",
	];

	return (
		<Box
			size={980}
			mt={40}
			mx="auto"
			p={0}
		>
			<Title
				order={1}
				mb={40}
			>
				Movies
			</Title>
			<Group
				gap={16}
				align={"start"}
				mb={24}
			>
				<Stack>
					<MultiSelect
						classNames={{
							label: styles.inputLabel,
							input: styles.genresInput,
							dropdown: styles.dropdown,
							option: styles.option,
							pill: styles.pill,
							pillsList: styles.pillsList,
						}}
						label="Genres"
						placeholder="Select genre"
						w={283}
						rightSection={<Arrow />}
						data={genreNames}
						value={genreValue}
						onChange={setGenreValue}
						withCheckIcon={false}
						maxValues={3}
					/>
				</Stack>
				<Stack>
					<Select
						classNames={{
							label: styles.inputLabel,
							input: styles.input,
							dropdown: styles.dropdown,
							option: styles.option,
						}}
						label="Release year"
						placeholder="Select release year"
						data={setInputReleaseYear().reverse()}
						w={283}
						rightSection={<Arrow />}
					/>
				</Stack>
				<Stack>
					<Flex gap={8}>
						<Select
							classNames={{
								label: styles.inputLabel,
								input: styles.input,
								dropdown: styles.dropdown,
								option: styles.option,
							}}
							label="Ratings"
							placeholder="From"
							data={setInputRatingNums()}
							w={137}
						/>
						<Select
							classNames={{
								label: styles.inputLabel,
								input: styles.input,
								dropdown: styles.dropdown,
								option: styles.option,
							}}
							pt={10}
							label=" "
							placeholder="To"
							data={setInputRatingNums().reverse()}
							w={137}
						/>
					</Flex>
				</Stack>
				<Stack style={{ alignSelf: "end", paddingBottom: "4px" }}>
					<Button
						className="btn-text-grey"
						variant="transparent"
						p={0}
					>
						Reset filters
					</Button>
				</Stack>
			</Group>

			<Flex justify={"end"}>
				<Select
					classNames={{
						label: styles.inputLabel,
						input: styles.input,
						dropdown: styles.dropdown,
						option: styles.option,
					}}
					label="Sort by"
					placeholder="Most popular"
					data={sortByItems}
					w={283}
					rightSection={<Arrow />}
				/>
			</Flex>
		</Box>
	);
};

export default Filters;
