import React from 'react';
import { Container, Row } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <Container style={{ backgroundColor: "#f8f9fb", paddingTop: "7rem" }} fluid>
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h1 style={{ fontFamily: 'Nanum Gothic', color: "#484cfc", fontSize: "2.8rem" }}>About Project</h1>
                <br />
                <br />
                <text>About Us Data</text>
            </Container>
        </Container>
    )
}

export default React.memo(AboutUs);
