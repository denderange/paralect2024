import { Center, Loader } from "@mantine/core";

const LoadingMovieDetails = () => {
	return (
		<Center mx="auto">
			<Loader
				color="violet"
				size="xl"
			/>
		</Center>
	);
};

export default LoadingMovieDetails;
