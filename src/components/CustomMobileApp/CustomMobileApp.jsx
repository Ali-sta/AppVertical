import React from 'react'
import styles from './CustomMobileApp.module.scss'
import { Container , Row , Col } from 'react-bootstrap'
import Image from 'next/image'
import { CustomAppPosts } from '@/DataMockup/data'


function CustomMobileApp(props) {
  return (
    <div className={styles['CustomApp-Main']}>
        <div className={styles['Custom-App-Section']}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles['Top-Heading-Col']}>
                            <h1>{props.TopHeading}</h1>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles['Content-Col']}>
                            <p>{props.Description}</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles['Image-Col']}>
                            <Image src={props.ImgSrc} className={["Img"]} width={560} height={580} alt={"Right-Img"} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <Container>
            <Row>
                <div  className={styles['CustomApp-Posts-Sec']}>
                    {CustomAppPosts.map((item,index)=>{
                        return(
                            <div className={styles['CustomApp-Posts-Inner']} key={index}>
                                <div className={styles['CustomApp-Post']} >
                                    <h1>{item.Heading}</h1>
                                    <p>{item.Description}</p>
                                </div>
                            </div> 
                        )
                    })}
                </div>
            </Row>
        </Container>
       
    </div>
  )
}

export default CustomMobileApp
