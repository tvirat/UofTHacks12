import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from "react";
import Header from "./components/Header.jsx";
import MapPage from "./pages/MapPage.jsx";
import MailPage from "./pages/MailPage.jsx";
import LoginPage from "./pages/LoginPage.jsx"; 

const App = () => {
  return (
    <Container fluid className="App">
        <Header />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<MapPage />} />
          <Route path="/mail" element={<MailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
};

export default App;