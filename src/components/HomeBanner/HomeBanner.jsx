import React from 'react'
import styles from './HomeBanner.module.scss'
import {Col , Row , Container} from 'react-bootstrap'
import Image from 'next/image'


function HomeBanner(props , btn) {
  return (   
    
    <div className={styles['Banner']}>
      <Container fluid>
        <Row>
           <Col md={7}>
              <div className={styles['Content-Side']}>
                  <div className={styles['Content-Inner']}>
                    <h6>{props.SubHeading}</h6>
                    <h1>{props.Heading}</h1>
                    <p>{props.Description}</p>
                    {btn ? (
                    <button>{props.BtnText}</button>
                    ):''}
                  </div>
              </div>
           </Col>
           <Col md={5}>
              <div className={styles['Image-Col']}>
                <Image src={props.BannerRightImg} className={["Banner-Img"]} width={460} height={580} alt={"Banner-Right-Img"} />
              </div>
              
            </Col> 
        </Row>
      </Container>
    </div>
  )
}

export default HomeBanner;
