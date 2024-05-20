import { Box, Flex } from "@mantine/core";
import React from "react";
import { poppins } from "../../ui/fonts";
import IconLogo from "../../public/icons/icon-logo.svg";
import styles from "./logo.module.css";

const Logo = () => {
	return (
		<Flex className={styles.logoContainer}>
			<IconLogo
				className={styles.img}
				alt="logo"
			/>
			<Box className={`${poppins.className} ${styles.text}`}>ArrowFlicks</Box>
		</Flex>
	);
};

export default Logo;
