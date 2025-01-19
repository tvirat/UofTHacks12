import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <Navbar stick="top" className="flex-column Sidebar">
            <Nav.Item>
                <Nav.Link as={NavLink} to="/" end>Map Stories</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/mail" end>Mailing</Nav.Link>
            </Nav.Item>
        </Navbar>
    );
}

export default Sidebar;