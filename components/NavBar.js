import React from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useRouter } from "next/router";
import styles from '../styles/Global.module.css';

const NavBar = () => {
    const router = useRouter();
    return (
        <Navbar fixed="top" bg="white" expand="lg">
            <Container fluid>
                <Link href="/" passHref><Navbar.Brand className={styles.Navbarbrand}>Hand Writer</Navbar.Brand></Link>
                <Navbar.Toggle className={styles.navbarToggle} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <Link className="nav-link text-white active" aria-current="page" href="/" passHref style={{ marginRight: '2rem' }}><text style={{ color: router.pathname == "/" ? "#484cfc" : "black" }} className={styles.Navbaritem}>Home</text></Link>
                        <Link className="nav-link text-white" href="/aboutus" passHref style={{ marginRight: '2rem' }}><text style={{ color: router.pathname == "/aboutus" ? "#484cfc" : "black" }} className={styles.Navbaritem}> About Us</text></Link>
                        <Link className="nav-link text-white" href="https://github.com/SachinRajkumarSaini/HandWriter" passHref style={{ marginRight: '2rem' }}><text className={styles.githubIcon}><i className="bi bi-github"></i></text></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default React.memo(NavBar);
