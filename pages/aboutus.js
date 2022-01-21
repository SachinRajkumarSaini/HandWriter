import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/Global.module.css';

const AboutUs = () => {
    return (
        <Container style={{ backgroundColor: "#f8f9fb", paddingTop: "7rem" }} fluid>
            <Container className={styles.aboutUsContainer} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h1 style={{ fontFamily: 'Nanum Gothic', color: "#484cfc", fontSize: "2.8rem" }}>About Project</h1>
                <br />
                <br />

                {/* About Us Text */}
                <text>

                    <p>Handwriter helps you write handwritten material without you writing it for <b>FREE.</b></p>
                    <p>Handwriter is an app that reduces the human effort by simply converting a text copied from the internet, messages, Ebook, doc pdf, websites to a handwritten page or you can say that it converts text to handwriting with full customization possible.</p>

                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <p><b>Customization included:</b></p>

                            <p>    ☆ Add or remove the top and left margins  </p>
                            <p>☆ 53 fonts to pick from for FREE</p>
                            <p>☆ AI algorithms to create smart rotation after converting</p>
                            <p>☆ You can upload your fonts too.</p>
                            <p>☆ Scanner effect</p>
                            <p>☆ Shadow effect</p>
                            <p>☆ No effect as per the demand</p>
                            <p>☆ Spacing between letter and words</p>
                            <p>☆ Text and bottom line spacing</p>
                            <p>☆ Smart rotation</p>
                            <p>☆ Multiple ink color to choose from</p>
                            <p>☆ Multiple line color to choose from</p>
                            <p>☆ No line effect (plain sheet)</p>
                            <p> ☆ Save pdf</p>
                            <p> ☆ Share pdf</p>
                        </Col>

                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <p>
                                <b>
                                    Handwriter features:
                                </b>
                            </p>
                            <p>
                                ☆ Complete huge assignments in a short time using the Handwriter/ Assignment maker app.
                            </p>
                            <p>
                                ☆ Looks exactly like the real handwritten page
                            </p>
                            <p>
                                ☆ AI algorithms to create smart rotation on every page after converting pdf
                            </p>
                            <p>
                                ☆ Scanner and shadow effects enhance the realistic look of Assignment, letter, application
                            </p>
                            <p>
                                ☆ Save the files inside the app so don't look around
                            </p>
                            <p>
                                ☆ Most realistic handwritten fonts all the handwriting are custom handwritten
                            </p>
                            <p>
                                ☆ Hustle free and quick editing with live view possible.
                            </p>
                            <p>
                                ☆ Live feedback support
                            </p>
                            <p>
                                ☆ Beautiful and easy to use UI
                            </p>
                            <p>
                                * If you want your font to be featured  in the Handwriter app you can also send your fonts on the details below
                            </p>
                            <p>
                                Permissions Notice
                                * File access - it is used to save files, share files, delete files
                            </p>
                        </Col>
                    </Row>
                </text>
            </Container>
        </Container >
    )
}

export default React.memo(AboutUs);
