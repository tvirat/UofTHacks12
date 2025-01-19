import Body from '../components/Body';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputField from '../components/InputField';
//import '../index.css';

const MailPage = () => {
    const [formErrors, setFormErrors] = useState({});
    const [messages, setMessages] = useState([
        "This is an example of a paragraph sent by someone. Mailing a trouble they had or an experience they want to share."
    ]);

    const onSubmit = (ev) => {
        ev.preventDefault();
        console.log('handle form here');
      };
    return (
        <Container>
            <Body sidebar>
                <h1>Percepts Private Mail</h1>
                <Form onSubmit={onSubmit}>
                    <InputField
                        name="Title" 
                        label="Write Your Mail Here: "
                        as="textarea"
                        style={{ height: '200px' , resize: 'none' }}  // Set height here
                    />
                    <Button className="custom-button" type="submit">Send to</Button>
                </Form>
                {/* <p>Write Mail Here</p> */}

                {/* Render previous messages */}
                <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
                    <h3>Mail! from Argentina.</h3>
                    {messages.map((message, index) => (
                        <p key={index} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#e9ecef', borderRadius: '5px' }}>
                            {message}
                        </p>
                    ))}
                </div>

                {/* <p><br/>Write Back Here</p> */}
                <Form onSubmit={onSubmit}>
                    <InputField
                        name="Title" 
                        label="Write Your Thoughts and Comments: "
                        as="textarea"
                        style={{ height: '100px' , resize: 'none' }}  // Set height here
                    />
                    <Button className="custom-button" type="submit">Send back</Button>
                </Form>       
            </Body>
        </Container>
    );
} 

export default MailPage;