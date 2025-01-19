import Body from '../components/Body';
import Container from 'react-bootstrap/Container';
import Map from '../components/Map';

const MapPage = () => {
    return (
        <Container>
            <Body sidebar>
                <h1>Public Map Sharing Space</h1>
                <p>This map below holds the stories of people daily perspectives of life.</p>
            </Body>
            <Map />
        </Container>

    );
} 

export default MapPage;