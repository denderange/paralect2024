"use client";
import { Loader } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";
import styles from "./posterMovie.module.css";

type Props = {
	poster_path: string;
	original_title: string;
};

const PosterMovie = ({ poster_path, original_title }: Props) => {
	const [isImageReady, setIsImageReady] = useState(false);

	return (
		<>
			{!isImageReady && (
				<Loader
					color="violet"
					type="dots"
				/>
			)}

			<Image
				src={poster_path}
				alt={original_title}
				width={250}
				height={352}
				onLoad={() => setIsImageReady(true)}
			/>
		</>
	);
};

export default PosterMovie;
