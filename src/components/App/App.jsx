import React from 'react';
import Container from "@mui/material/Container";
import { Header } from "../Header/Header";
import { Home } from '../../pages/Home/Home';

export const App = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Home />
        {/*<FullPost />*/}
        {/*<AddPost />*/}
        {/*<Login />*/}
        {/*<Registration />*/}
      </Container>
    </>
  );
};