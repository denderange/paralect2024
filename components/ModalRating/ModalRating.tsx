import {
	Box,
	Button,
	Flex,
	Group,
	Modal,
	Rating,
	Text,
	UnstyledButton,
} from "@mantine/core";
import styles from "./modalRating.module.css";
import IconStar from "../../public/icons/icon-star.svg";
import IconClose from "../../public/icons/icon-close-small.svg";

type ModalRatingProps = {
	opened: boolean;
	movieTitle: string;
	close: () => void;
};

const ModalRating = ({ opened, close, movieTitle }: ModalRatingProps) => {
	const movieRating = 7;

	return (
		<Modal
			className={styles.modal}
			centered
			title="Your rating"
			transitionProps={{ transition: "rotate-left" }}
			opened={opened}
			onClose={close}
			size={380}
			closeButtonProps={{
				icon: (
					<IconClose
						size={20}
						stroke={1.5}
					/>
				),
			}}
		>
			<Text className={styles.title}>{movieTitle}</Text>
			<Rating
				className={styles.rating}
				defaultValue={2}
				count={10}
				value={movieRating}
				emptySymbol={<IconStar style={{ color: "red" }} />}
				fullSymbol={<IconStar className={styles.starFilled} />}
			/>
			<Box>
				<Button className="btnPrimaryM">Save</Button>
				<UnstyledButton className="btn-text-purple">
					Remove rating
				</UnstyledButton>
			</Box>
		</Modal>
	);
};

export default ModalRating;
