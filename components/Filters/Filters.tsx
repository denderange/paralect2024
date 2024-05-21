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
	const [releaseYear, setReleaseYear] = useState<string | null>();
	const [voteLte, setVoteLte] = useState<string | null>();
	const [voteGte, setVoteGte] = useState<string | null>();
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
		const params = new URLSearchParams({
			// page: "1",
			// sort_by: "popularity.desc",
		});

		if (page) {
			params.set("page", page.toString());
		} else {
			params.set("page", "1");
		}

		if (primary_release_year) {
			setReleaseYear(primary_release_year);
			params.set("primary_release_year", primary_release_year);
		} else {
			params.delete("primary_release_year");
		}

		if (sort_by) {
			params.set("sort_by", sort_by);
		} else {
			params.delete("sort_by");
		}

		if (vote_averageGte) {
			params.set("vote_averageGte", vote_averageGte.toString());
		} else {
			params.delete("vote_averageGte");
		}

		if (vote_averageLte) {
			params.set("vote_averageLte", vote_averageLte.toString());
		} else {
			params.delete("vote_averageLte");
		}

		replace(`${pathname}&${params.toString()}`);
		console.log(replace(`${pathname}&${params.toString()}`));

		console.log("filters comp genreValue: " + genreValue);
		console.log("filters comp -- params: " + params);
		console.log("filters comp -- with_genres: " + with_genres);
	};

	const handleResetFilters = () => {
		console.log("====== filters ======");
		console.log("genreValue: " + genreValue);
		console.log("releaseYear: " + releaseYear);
		console.log("voteLte: " + voteLte);
		console.log("voteGte: " + voteGte);
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
						onChange={(e: any) => handleSearch(e)}
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
							onChange={(e) => setVoteLte(e)}
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
							onChange={(e) => setVoteGte(e)}
						/>
					</Flex>
				</Stack>
				<Stack style={{ alignSelf: "end", paddingBottom: "4px" }}>
					<Button
						className="btn-text-grey"
						variant="transparent"
						p={0}
						onClick={handleResetFilters}
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
