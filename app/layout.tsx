import "@mantine/core/styles.css";
import "../styles/globals.css";
import {
	MantineProvider,
	ColorSchemeScript,
	Container,
	Flex,
} from "@mantine/core";
import { theme } from "../theme";
import { inter } from "../ui/fonts";
import SideBar from "../components/SideBar/SideBar";

export const metadata = {
	title: "Startup Summer 2024",
	description: "Dennis Polukaroff - test app - for paralect",
};

export default function RootLayout({ children }: { children: any }) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript />
				<link
					rel="shortcut icon"
					href="/favicon.ico"
				/>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
				/>
			</head>
			<body className={`${inter.className} body`}>
				<MantineProvider theme={theme}>
					<main>
						<Container
							size={1440}
							p={0}
						>
							<Flex gap={12}>
								<SideBar />
								{children}
							</Flex>
						</Container>
					</main>
				</MantineProvider>
			</body>
		</html>
	);
}
