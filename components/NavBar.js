import React from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useRouter } from "next/router";
import styles from '../styles/Global.module.css';

const NavBar = () => {
    const router = useRouter();
    return (
        <Navbar variant="light">
            <Container fluid>
                <Link href="/" passHref><Navbar.Brand className={styles.Navbarbrand}>Karo Assign</Navbar.Brand></Link>
                <Nav className="justify-content-end">
                    <Link className="nav-link text-white active" aria-current="page" href="/" passHref style={{ marginRight: '2rem' }}><text style={{ color: router.pathname == "/" ? "#7C83FD" : "black" }} className={styles.Navbaritem}>Home</text></Link>
                    <Link className="nav-link text-white" href="/aboutus" passHref style={{ marginRight: '2rem' }}><text style={{ color: router.pathname == "/aboutus" ? "#7C83FD" : "black" }} className={styles.Navbaritem}> About Us</text></Link>
                    <Link className="nav-link text-white" href="https://github.com/SachinRajkumarSaini/KaroAssign" passHref style={{ marginRight: '2rem' }}><text className={styles.githubIcon}><i class="bi bi-github"></i></text></Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default React.memo(NavBar);
