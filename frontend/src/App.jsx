import Container from 'react-bootstrap/Container';
import React from "react";
import Map from "./components/Map.jsx";
import Header from "./components/Header.jsx";

const App = () => {
  return (
    <Container fluid className="App">
        <Header />
            <p>Map is Below</p>
            <Container maxWidth="500px" className="Map">
                <Map />
            </Container>
    </Container>
  )

};

export default App;