import React from 'react';
import { Card, Container, Row, Form, Col } from 'react-bootstrap';

const TextToHandwriter = () => {
    return (
        <Container style={{ display: 'flex', justifyContent: 'center', alignItem: 'center', paddingTop: "7rem", paddingBottom: "3rem" }} >
            <Row style={{ width: "65rem" }}>
                <Col>
                    <Row>
                        <h3 style={{ paddingBottom: '0.5rem', fontFamily: 'Nanum Gothic' }}>Text to Handwriting Converter</h3>
                    </Row>
                    <Row>
                        <Card style={{ borderRadius: '0.5rem', padding: "0.8rem", borderColor: "#484cfc" }}>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className="text-muted" style={{ fontSize: '0.8rem', paddingLeft: "0.7rem" }}>Text</Form.Label>
                                    <Form.Control style={{ borderColor: "white", boxShadow: 'none' }} as="textarea" rows={12} />
                                </Form.Group>
                            </Form>
                        </Card>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default React.memo(TextToHandwriter);
