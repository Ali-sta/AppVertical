import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from "./Header.module.scss"
import { Col , Container , Row } from 'react-bootstrap';
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";
function Header(props) {
    const router = useRouter();
  return (
    <div className={styles['Header-Sec']}>
        <Container fluid>
            <Row>
                <Col md={3} className={styles['Headlogo-Col']}>
                <Link href={'/'}><Image src={props.logo} className={["Logo-img"]} width={220} height={40} alt={"logo"} /></Link>
                </Col>
                <Col md={7}>
                    <ul className={styles["nav-menu"]}>
                    <li className={router.pathname == "/company" ? `${styles["active"]}` : ""}><Link href={'/company'}>Company</Link></li>
                    <li className={router.pathname == "/services" ? `${styles["active"]}` : ""}><Link href={'/services'}>Services</Link></li>
                    <li className={router.pathname == "/hire-a-developer" ? `${styles["active"]}` : ""}><Link href={'/hire-a-developer'}>Hire A Developer</Link></li>
                    <li className={router.pathname == "/portfolio" ? `${styles["active"]}` : ""}><Link href={'/portfolio'}>PortFolio</Link></li>
                    <li className={router.pathname == "/contact-us" ? `${styles["active"]}` : ""}><Link href={'/contact-us'}>Contact us</Link></li>
                    </ul>
                </Col>
                <Col md={2}>
                  <div className={styles['get-btn']}>
                    <Link href="#"><BsArrowRight /> get estimate </Link>
                  </div>
                </Col>
            </Row>
        </Container>

      
    </div>
  )
}

export default Header
