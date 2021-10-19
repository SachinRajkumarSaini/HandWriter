import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../styles/Global.module.css';

const Footer = () => {
    return (
        <Container style={{ backgroundColor: "#f8f9fb" }} fluid>
            <div className={styles.copyrightText}>
                <text style={{ letterSpacing: '0.2rem', color: '#777777' }}>Copyright © 2021 All rights reserved</text>
            </div>
        </Container>
    )
}

export default React.memo(Footer);
