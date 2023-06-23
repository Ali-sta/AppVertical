import React from 'react'
import styles from './WeKnow.module.scss'
import { Container , Row , Col } from 'react-bootstrap'
import Image from 'next/image'

function Weknow(props) {
  return (
    <div className={styles['WeKnow-Sec']}>
        <Container>
            <Row>
                <Col md={6}>
                    <div className={styles['Image-Sec']}>
                        <Image src={props.ImgUrl} className={["Img"]} width={500} height={600} alt={"Mobile-Img"}/>
                    </div>
                </Col>
                <Col md={6}>
                    <div className={styles['Content-Side']}>
                        <h1>{props.Heading}</h1>
                        <h5>{props.SubDescription}</h5>
                        <p>{props.Description}</p>
                    </div>
                </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default Weknow
