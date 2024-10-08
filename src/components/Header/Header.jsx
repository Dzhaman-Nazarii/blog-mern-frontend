import React from "react";
import Button from "@mui/material/Button";

import styles from "./Header.module.scss";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

export const Header = () => {
	const isAuth = false;
	const onClickLogout = () => {};
	return (
		<div className={styles.root}>
			<Container maxWidth="lg">
				<div className={styles.inner}>
					<Link
						className={styles.logo}
						to="/">
						<div>MERN BLOG</div>
					</Link>
					<div className={styles.buttons}>
						{isAuth ? (
							<>
								<Link to="/posts/create">
									<Button variant="contained">
										Create an article
									</Button>
								</Link>
								<Button
									onClick={onClickLogout}
									variant="contained"
									color="error">
									Log out
								</Button>
							</>
						) : (
							<>
								<Link to="/login">
									<Button variant="contained">Sign in</Button>
								</Link>
								<Link to="/register">
									<Button variant="contained">
										Create an account
									</Button>
								</Link>
							</>
						)}
					</div>
				</div>
			</Container>
		</div>
	);
};
