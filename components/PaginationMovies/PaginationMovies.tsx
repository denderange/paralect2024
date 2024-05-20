"use client";
import { Pagination } from "@mantine/core";
import React from "react";

type PaginationMoviesProps = {
	totalPages: number;
	currentPage: number;
	// onPageChange: (arg: number) => void;
};

const PaginationMovies = ({
	totalPages,
	currentPage,
}: PaginationMoviesProps) => {
	const onChangePage = (page: number) => {
		console.log(page);
	};
	console.log("current page: " + currentPage);

	return (
		<Pagination
			total={totalPages}
			onChange={(page) => onChangePage(page)}
			siblings={1}
			color="#9854F6"
			style={{ marginLeft: "auto", marginBottom: "82px" }}
		/>
	);
};

export default PaginationMovies;
