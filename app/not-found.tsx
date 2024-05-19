import { Box, Container, Flex, Stack, Text } from "@mantine/core";
import Logo from "../components/Logo/Logo";
import Image from "next/image";
import styles from "../styles/404.module.css";
import imgNotFound from "../public/images/image-404.png";
import Link from "next/link";

const NotFound = () => {
	return (
		<Container size={1440}>
			<Box className={styles.logoContainer}>
				<Logo />
			</Box>
			<Flex className={styles.container}>
				<Stack>
					<Image
						src={imgNotFound}
						alt="not found"
					/>
					<Text className={styles.text}>
						We can&apos;t find the page you are looking for
					</Text>
					<Link
						className="btnPrimaryM"
						href="/"
					>
						Go Home
					</Link>
				</Stack>
			</Flex>
		</Container>
	);
};

export default NotFound;
