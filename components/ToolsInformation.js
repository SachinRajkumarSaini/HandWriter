import React from 'react';
import { Card, Container, Image, Row } from 'react-bootstrap';

const ToolsInformation = () => {
    return (
        <Container style={{ display: 'flex', justifyContent: 'center', alignItem: 'center', padding: "2rem" }} >
            <Row style={{ width: "65rem" }}>
                <Card style={{ padding: "2rem", borderRadius: '0.5rem' }}>
                    <h1 style={{ fontFamily: 'Nanum Gothic' }}>What is Online Text to Handwriting Converter ?</h1>
                    <br />
                    <text style={{ fontFamily: 'Nanum Gothic' }}>
                        Text to Handwriting Converter is a free online tool for converting texts into handwriting and downloading them as image or PDF for different handwriting font types, ink colors and papers. It looks like real handwriting on a real paper. If you need handwriting images or documents which looks real, you can use this tool.
                    </text>
                    <br />
                    <text style={{ fontFamily: 'Nanum Gothic' }}>
                        You can choose any font, ink color and paper type from the list and get the handwritten output in JPEG and PDF format. All font families is suitable for creating handwritten texts while all has different characteristics. There are 3 ink types, black, blue and red where all has its light and dark versions.
                    </text>
                    <br />
                    <text style={{ fontFamily: 'Nanum Gothic' }}>
                        A long list will be offered for paper type. Some are classical paper types like white paper, horizontal and square lined papers or straw paper while others have backgrond images as paper frames. They are categorized as gift, birthday, love letter and christmas papers. You can use this tool as gift letter generator, birthday letter generator, love letter generator or christmas letter generator according to your needs. These letters are in printable format for A4 size paper and can be printed out and used to surprize your friends. You can preview it online before downloading to see if you get the desired result.
                    </text>
                    <br />

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '2rem' }}>
                        <Image style={{ height: '30rem', width: '22rem' }} src="./images/text-to-handwriting-conversion.jpeg" fluid />
                        <text className="text-muted" style={{ fontFamily: 'Nanum Gothic', paddingTop: "1rem" }}>Text to Handwriting Image Conversion</text>
                    </div>

                    <text style={{ fontFamily: 'Nanum Gothic' }}>Online Text to Handwriting Converter can be used for different purposes; to write a love letter to your girlfriend, boyfriend or partner, for birthday celebration, gifting and christmas celebration, to do your college writing assignments or your homeworks which requires handwritten documents, write literature text or take notes, make shopping list etc.</text>
                    <br />
                    <h1 style={{ fontFamily: 'Nanum Gothic' }}>How to use Online Text to Handwriting Converter ?</h1>
                    <br />
                    <text style={{ fontFamily: 'Nanum Gothic' }}>You can convert your texts into handwriting by following these steps.</text>
                    <br />
                    <text style={{ paddingBottom: '0.5rem', fontFamily: 'Nanum Gothic' }}>1. Enter the text you want to convert in the text field. Be careful, you can create one page for each generation, so if you have overflow text, it will be hidden. If you need more than one page, split your text into pieces and generate images or PDFs one by one.</text>
                    <text style={{ paddingBottom: '0.5rem', fontFamily: 'Nanum Gothic' }}>2. Choose font family, ink color and paper type from the list.</text>
                    <text style={{ paddingBottom: '0.5rem', fontFamily: 'Nanum Gothic' }}>3. Download handwritten text as a JPEG image or PDF.</text>
                </Card>
            </Row>
        </Container>
    )
}

export default React.memo(ToolsInformation);
