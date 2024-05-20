"use client";
import { Stack } from "@mantine/core";
import Logo from "../Logo/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./sideBar.module.css";

const SideBar = () => {
	const pathname = usePathname();

	const navLinks = [
		{ title: "Movies", link: "/" },
		{ title: "Rated movies", link: "/rated" },
	];

	return (
		<Stack className={styles.container}>
			<Logo />

			<nav>
				{navLinks.map(({ title, link }) => (
					<Link
						key={title}
						href={link}
						className={`${styles.navlink} ${
							pathname === link && styles.active
						}`}
					>
						{title}
					</Link>
				))}
			</nav>
		</Stack>
	);
};

export default SideBar;
