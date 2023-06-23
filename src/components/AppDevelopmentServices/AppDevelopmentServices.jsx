import React from 'react'
import styles from './AppDevelopmentServices.module.scss'
import { Container , Row , Col } from 'react-bootstrap'
import { AppDevelpServcies } from '@/DataMockup/data'

function AppDevelopmentServices(props) {
  return (
    <div style={{backgroundImage: `url(${props.BgImageURL})`}} className={styles['AppDevelopmt-Services']}>
      <Container fluid>
        <Row>
            <Col md={12}>
                <div className={styles['Top-Heading-Sec']}>
                    <h1>{props.Heading}</h1>
                    <p>{props.Description}</p>
                </div>
            </Col>
        </Row>
        
        <Row>
         <div className={styles['AppDevelpmServices-Posts']}>
          {AppDevelpServcies.slice(0 ,4).map((item,index) => {
            return(
              <Col md={3} key={index}>
                <div className={styles['AppDeveplmtService-Post']} >
                  <h1>{item.Heading}</h1>
                  <p>{item.Description}</p>
                </div>
              </Col>
            )
          })}
         </div>
        </Row>
      </Container>
    </div>
  )
}

export default AppDevelopmentServices
