import Body from '../components/Body';
import Container from 'react-bootstrap/Container';
import Map from '../components/Map';
import initMap from '../frontend/mail_pins.js';

const MapPage = () => {
    return (
        <Container maxWidth="1000px">
            <Body sidebar>
                <p>This map below holds the stories of people daily perspectives of life.</p>
            </Body>
            <Map />
        </Container>

    );
} 

export default MapPage;