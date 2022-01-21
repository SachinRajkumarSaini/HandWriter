import React, { useState } from 'react';
import { Card, Container, Row, Form, Col, Button } from 'react-bootstrap';
import { SketchPicker } from 'react-color';
import domtoimage from 'dom-to-image';
import { Paper, Slider } from '@material-ui/core';

const TextToHandwriter = () => {

    const [text, setText] = useState("");
    const [fontFamily, setFontFamily] = useState("'Handlee', cursive");
    const [textColor, setTextColor] = useState("#000000");
    const [showFontColorPicker, setShowFontColorPicker] = useState(false);
    const [paperType, setPaperType] = useState();
    const [paperColor, setPaperColor] = useState("#ffffff");
    const [showPageColorPicker, setShowPageColorPicker] = useState(false);
    const [fontWeight, setFontWeight] = useState(200);
    const [scanEffect, setScanEffect] = useState("false");
    const [letterSpacing, setLetterSpacing] = useState(0);
    const [wordSpacing, setWordSpacing] = useState(0);
    const [lineHeight, setLineHeight] = useState(30);

    const generateImage = () => {
        domtoimage.toJpeg(document.getElementById('page'), { quality: 1 })
            .then(function (dataUrl) {
                let link = document.createElement('a');
                link.download = 'Enjoy!!.jpeg';
                link.href = dataUrl;
                link.click();
            });
    }

    return (
        <Container style={{ paddingTop: "8rem", paddingBottom: "3rem" }} >
            <Row style={{ display: 'flex', justifyContent: "space-around" }}>

                {/* Input Text And Tools */}
                <Col sm={12} xs={12} md={12} lg={5} xl={5} >

                    {/* Input Text */}
                    <Row style={{ margin: "0.8rem" }}>
                        <h3 style={{ paddingBottom: '0.5rem', fontFamily: 'Nanum Gothic' }}>Text to Handwriting Converter</h3>
                        <Card style={{ borderRadius: '0.5rem', padding: "0.8rem", borderColor: "#484cfc" }}>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className="text-muted" style={{ fontSize: '0.8rem', paddingLeft: "0.7rem" }}>Text</Form.Label>
                                    <Form.Control style={{ borderColor: "white", boxShadow: 'none' }} onChange={(e) => {
                                        setText(e.target.value);
                                    }} as="textarea" rows={29} />
                                </Form.Group>
                            </Form>
                        </Card>
                    </Row>

                    {/* Tools */}
                    <Row style={{ margin: "0.8rem" }}>
                        {/* Font Tools */}
                        <Row style={{ marginTop: "1rem" }}>

                            {/* Font family */}
                            <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                                <Form.Label style={{ fontSize: "0.8rem", fontWeight: "bold" }}>Font Family</Form.Label>
                                <Form.Select style={{ boxShadow: 'none' }} onChange={(e) => {
                                    setFontFamily(e.target.value);
                                }} aria-label="Default select example">
                                    <option value="'Handlee', cursive">Handlee</option>
                                    <option value="'Gochi Hand', cursive">Gochi Hand</option>
                                    <option value="'Patrick Hand', cursive">Patrick Hand</option>
                                </Form.Select>
                            </Col>

                            {/* Paper Type */}
                            <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                                <Form.Label style={{ fontSize: "0.8rem", fontWeight: "bold" }}>Paper Type</Form.Label>
                                <Form.Select onChange={(e) => {
                                    setPaperType(e.target.value);
                                }} style={{ boxShadow: 'none' }} aria-label="Default select example">
                                    <option value="White Paper">White Paper</option>
                                    <option value="Line Paper">Line Paper</option>
                                </Form.Select>
                            </Col>

                            {/* Scan Effect */}
                            <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                                <Form.Label style={{ fontSize: "0.8rem", fontWeight: "bold" }}>Scan Effect</Form.Label>
                                <Form.Select onChange={(e) => {
                                    setScanEffect(e.target.value);
                                }} defaultValue={"false"} style={{ boxShadow: 'none' }} aria-label="Default select example">
                                    <option value={"true"}>Enable</option>
                                    <option value={"false"}>Disable</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        {/* Text Tools */}
                        <Row style={{ marginTop: "1rem" }}>

                            {/* Letter Spacing */}
                            <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                                <Form.Label style={{ fontSize: "0.8rem", fontWeight: "bold" }}>Letter Spacing</Form.Label>
                                <Form.Select onChange={(e) => {
                                    setLetterSpacing(e.target.value);
                                }} defaultValue="0" style={{ boxShadow: 'none' }} aria-label="Default select example">
                                    <option value={-2}>-2</option>
                                    <option value={-1.5}>-1.5</option>
                                    <option value={-1}>-1</option>
                                    <option value={-0.5}>-0.5</option>
                                    <option value={0}>0</option>
                                    <option value={0.5}>0.5</option>
                                    <option value={1.5}>1.5</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                </Form.Select>
                            </Col>

                            {/* Word Spacing */}
                            <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                                <Form.Label style={{ fontSize: "0.8rem", fontWeight: "bold" }}>Word Spacing</Form.Label>
                                <Form.Select onChange={(e) => {
                                    setWordSpacing(e.target.value);
                                }} defaultValue="0" style={{ boxShadow: 'none' }} aria-label="Default select example">
                                    <option value={-4}>-4</option>
                                    <option value={-3}>-3</option>
                                    <option value={-2}>-2</option>
                                    <option value={-1}>-1</option>
                                    <option value={0}>0</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={6}>6</option>
                                    <option value={8}>6</option>
                                </Form.Select>
                            </Col>

                            {/* Font Weight */}
                            <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                                <Row>
                                    <Form.Label style={{ fontSize: "0.8rem", fontWeight: "bold", marginTop: "0.8rem" }}>Font Weight</Form.Label>
                                </Row>
                                <Slider style={{ width: "100%" }}
                                    defaultValue={200}
                                    value={fontWeight}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    onChange={(event, newValue) => {
                                        setFontWeight(newValue);
                                    }}
                                    step={100}
                                    min={100}
                                    max={900}
                                />
                            </Col>
                        </Row>

                        {/* Colors Tool */}
                        <Row style={{ marginTop: "1rem" }}>

                            {/* Page Background Color */}
                            <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                                <div className="colorButton">
                                    <Form.Label style={{ fontSize: "0.8rem", fontWeight: "bold" }}>Page Color</Form.Label>
                                    <Form.Select onChange={(e) => {
                                        if (e.target.value === "more") {
                                            setShowPageColorPicker(true);
                                        } else {
                                            setPaperColor(e.target.value);
                                            setShowPageColorPicker(false);
                                        }
                                    }} style={{ boxShadow: 'none' }} aria-label="Default select example">
                                        <option value="#ffffff">White</option>
                                        <option value="#ededed">Grey</option>
                                        <option value="more">Pick Color</option>
                                    </Form.Select>
                                </div>
                                <div style={{ marginTop: "0.5rem", display: 'flex', justifyContent: 'center' }} className="colorPicker">
                                    {
                                        showPageColorPicker && (
                                            <SketchPicker
                                                color={paperColor}
                                                onChange={targetColor => setPaperColor(targetColor.hex)}
                                            />
                                        )
                                    }
                                </div>
                            </Col>

                            {/* Font Color */}
                            <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                                <div className="colorButton">
                                    <Form.Label style={{ fontSize: "0.8rem", fontWeight: "bold" }}>Font Color</Form.Label>
                                    <Form.Select onChange={(e) => {
                                        if (e.target.value === "more") {
                                            setShowFontColorPicker(true);
                                        } else {
                                            setTextColor(e.target.value);
                                            setShowFontColorPicker(false);
                                        }
                                    }} style={{ boxShadow: 'none' }} aria-label="Default select example">
                                        <option value="#000000">Black</option>
                                        <option value="#0000FF">Blue</option>
                                        <option value="#FF0000">Red</option>
                                        <option value="more">Pick Color</option>
                                    </Form.Select>
                                </div>
                                <div style={{ marginTop: "0.5rem", display: 'flex', justifyContent: 'center' }} className="colorPicker">
                                    {
                                        showFontColorPicker && (
                                            <SketchPicker
                                                color={textColor}
                                                onChange={targetColor => setTextColor(targetColor.hex)}
                                            />
                                        )
                                    }
                                </div>
                            </Col>

                            <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                                <Row>
                                    <Form.Label style={{ fontSize: "0.8rem", fontWeight: "bold", marginTop: "0.5rem" }}>Line Height</Form.Label>
                                </Row>
                                <Slider style={{ width: "100%" }}
                                    defaultValue={30}
                                    value={lineHeight}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    onChange={(event, newValue) => {
                                        setLineHeight(newValue);
                                    }}
                                    step={1}
                                    min={10}
                                    max={70}
                                    color="primary"
                                />
                            </Col>
                        </Row>
                    </Row>
                </Col>


                {/* Output Paper */}
                <Col sm={12} xs={12} md={12} lg={5} xl={5} style={{ marginTop: "1rem" }} >
                    <Row style={{ marginRight: "1rem", marginLeft: "1rem" }}>
                        <h3 style={{ paddingBottom: '0.5rem', fontFamily: 'Nanum Gothic' }}>Output</h3>
                    </Row>
                    <Row style={{ marginRight: "1rem", marginLeft: "1rem" }} >
                        <Paper elevation={3} square={true} className="paper" id="page" style={{
                            backgroundImage:
                                paperType === "Line Paper" ? 'repeating-linear-gradient(transparent 0px, transparent 24px, #333333 25px)' : 'none', backgroundColor: `${paperColor}`,
                            WebkitBoxShadow: scanEffect === "true" ? 'inset 18px 0px 50px -7px rgba(106,110,101,1)' : 'none', MozBoxShadow: scanEffect === "true" ? 'inset 18px 0px 50px -7px rgba(106,110,101,1)' : 'none',
                            boxShadow: scanEffect === "true" ? 'inset 18px 0px 50px -7px rgba(106,110,101,1)' : 'none',
                            height: "49rem",
                            width: "40rem",
                            padding: "1rem",
                            overflow: 'hidden'
                        }}>
                            <p className="output_text"
                                style={{
                                    fontFamily: `${fontFamily}`, color: `${textColor}`,
                                    fontWeight: `${fontWeight}`, letterSpacing: `${letterSpacing}px`, wordSpacing: `${wordSpacing}px`, lineHeight: `${lineHeight}px`,
                                }}>
                                {text}
                            </p>
                        </Paper>
                    </Row>
                    <Row style={{ display: 'flex', justifyContent: "center", alignItem: 'center', marginTop: "2rem" }}>
                        <Button onClick={generateImage} variant="contained" style={{ color: 'white', backgroundColor: '#ec4c4c', boxShadow: "none", width: "10rem" }}>Download Image </Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default React.memo(TextToHandwriter);
