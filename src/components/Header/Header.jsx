import React from "react";
import Button from "@mui/material/Button";

import styles from "./Header.module.scss";
import Container from "@mui/material/Container";

export const Header = () => {
  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <a className={styles.logo} href="/">
            <div>MERN BLOG</div>
          </a>
          <div className={styles.buttons}>
            <Button variant="outlined">Sign in</Button>
            <Button variant="contained">Create an account</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
