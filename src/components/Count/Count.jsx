import React from 'react'
import styles from './Count.module.scss'
import { Container ,  Row , Col } from 'react-bootstrap'
import { CountProject } from '@/DataMockup/data'
// import CountUp from 'react-countup';



function Count(props) {
  return (
    <div className={styles['Counter-Project']}>
        <Container>
            <Row>
                <Col md={12}>
                    <div className={styles['Top-Heading']}>
                        <h2>{props.TopHeading}</h2>
                    </div>
                </Col>
            </Row>
            <Row>
       
                <div className={styles['Counter-Main-Box']}>
                    {CountProject.map((item,index)=>{
                        return(
                          <Col md={6} className={styles['Counter-Box']} key={index}>
                            <div className={styles['Counter-Inner-Box']} >
                                <h1>
                                 {/* <CountUp start={item.start} end={item.End} duration={2.75} /> */}
                                    </h1>
                                <h4>{item.Heading}</h4>
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

export default Count
