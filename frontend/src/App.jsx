import Container from 'react-bootstrap/Container';
import React, {useEffect, useState} from "react";
import Map from "./components/Map.jsx";
import Header from "./components/Header.jsx";


const App = () => {

    const [memories, setMemories] = useState([]);
    const VITE_BACKEND_URL = "http://127.0.0.1:5000/api/memories";
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(VITE_BACKEND_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setMemories(JSON.parse(data));
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;  // Show loading text while fetching data
    }

    if (error) {
        return <div>Error: {error.message}</div>;  // Display any errors that occur
    }

  return memories.map((memory, index) =>  (
    <Container fluid className="App">
        <Header />
            <p>{memory.description}</p>
            <Container maxWidth="500px" className="Map">
                <Map />
            </Container>
    </Container>
  ));
};

export default App;