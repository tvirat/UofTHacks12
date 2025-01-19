import Body from '../components/Body';
import Container from 'react-bootstrap/Container';
import Map from '../components/Map';

const MapPage = () => {
    return (
        <Container>
            <Body sidebar>
                <h1>Percepts Public Mapping</h1>
                <p>Interact international, gaining perspective of other peoples everyday lives.
                    <br />
                    Stories, hardship, achievement, and memories can be stored on the map periodically.
                    <br />
                    View countless of perspectives around the world.
                </p>
            </Body>
            <Map />
        </Container>

    );
} 

export default MapPage;