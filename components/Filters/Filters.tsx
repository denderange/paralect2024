"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
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
import { setInputRatingNums } from "../../app/lib/utils/setInputRatingNums";
import { setInputReleaseYear } from "../../app/lib/utils/setInputReleaseYear";
import Arrow from "../../public/icons/icon-arrow.svg";
import styles from "./filters.module.css";
import { useState } from "react";
import type { GenreT } from "../../app/lib/definitions";

const Filters = ({ genres: { genres } }: { genres: { genres: GenreT[] } }) => {
	const [genreValue, setGenreValue] = useState<string[]>([]);
	const genreNames = genres.map((genre: GenreT) => genre.name);

	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleSearch = (
		page?: number,
		primary_release_year?: string,
		sort_by?: string,
		vote_averageGte?: number,
		vote_averageLte?: number,
		with_genres?: string
	) => {
		const params = new URLSearchParams(searchParams);

		if (page) {
			params.set("page", page.toString());
		} else {
			params.set("page", "1");
		}

		if (primary_release_year) {
			params.set("primary_release_year", primary_release_year);
		} else {
			params.delete("primary_release_year");
		}

		replace(`${pathname}?${params.toString()}`);

		console.log("filters comp genreValue: " + genreValue);
		console.log("filters comp -- params: " + params);
		console.log("filters comp -- with_genres: " + with_genres);
	};

	const sortByItems = [
		"Popularity",
		"Vote count",
		"Vote average",
		"Original title",
		"Revenue",
		"Title",
	];
	//    sort by:
	// popularity.desc
	// vote_count.desc
	// vote_average.desc
	// original_title.desc
	// revenue.desc
	// primary_release_date.desc
	// title.desc

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
						// onChange={(e: any) => {
						// 	handleSearch(e);
						// }}
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
						onChange={(e: any) => {
							handleSearch(e);
						}}
						defaultValue={searchParams.get("query")?.toString()}
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
