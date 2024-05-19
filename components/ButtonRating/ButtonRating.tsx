import { Box, HoverCard, Text, UnstyledButton } from "@mantine/core";
import styles from "./buttonRating.module.css";
import IconStar from "../../public/icons/icon-star.svg";
import { MouseEvent } from "react";

type ButtonRatingProps = {
	rating?: number;
	btnClick: () => void;
};

const ButtonRating = ({ rating, btnClick }: ButtonRatingProps) => {
	const handleBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		btnClick();
	};

	return (
		<Box className={styles.starCount}>
			<HoverCard
				width={280}
				shadow="md"
			>
				<HoverCard.Target>
					<UnstyledButton onClick={handleBtnClick}>
						<IconStar className={`${styles.star} ${rating && styles.rated}`} />
					</UnstyledButton>
				</HoverCard.Target>
				<HoverCard.Dropdown className={styles.dropdown}>
					<Text size="sm">Rate this movie</Text>
				</HoverCard.Dropdown>
			</HoverCard>

			<span>{rating}</span>
		</Box>
	);
};

export default ButtonRating;
