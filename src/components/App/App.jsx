import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from "@mui/material/Container";
import { Header } from "../Header/Header";
import { Home } from '../../pages/Home/Home';
import { FullPost } from '../../pages/FullPost/FullPost';
import { AddPost } from '../../pages/AddPost/AddPost';
import { Login } from '../../pages/Login/Login';
import { Registration } from '../../pages/Registration/Registration';

export const App = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Container>
    </>
  );
};