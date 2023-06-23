import React from 'react'
import styles from './TrustedClients.module.scss'
import { Container , Row , Col } from 'react-bootstrap'
import { trustedImg } from '@/DataMockup/data'
import Image from 'next/image'

function TrustedClients(props) {
  return (
    <div className={styles['Trusted']}>
        <Container>
            <Row>
                <Col md={12}>
                    <div className={styles['Trusted-Sec']}>
                        <h5>{props.Heading}</h5>
                        <div className={styles['Logo-Sec']}>
                            {trustedImg.slice(0 ,7).map((item,index) => {
                                 return(
                                    <div className={styles['Image-box']} key={index}>
                                        <Image src={item.imgurl} alt="image" srcset="" width={150} height={100} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default TrustedClients
