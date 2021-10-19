import React, { Fragment } from 'react';
import styles from '../styles/Global.module.css';

const Footer = () => {
    return (
        <Fragment>
            <div className={styles.copyrightText}>
                <text style={{ letterSpacing: '0.2rem', color: '#777777' }}>Copyright © 2021 All rights reserved</text>
            </div>
        </Fragment>
    )
}

export default React.memo(Footer);
