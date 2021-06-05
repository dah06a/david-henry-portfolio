import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Document, Page } from 'react-pdf';
import ResumePDF from '../resume.pdf';

import './Resume.css';

function Resume(props) {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <Container fluid>
            <Row className="resume-title">
                <Col className="align-self-center">
                    <h1>Résumé</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Document file={ResumePDF} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageIndex={pageNumber} />
                    </Document>
                </Col>
            </Row>
        </Container>
    );
}

export default Resume;
