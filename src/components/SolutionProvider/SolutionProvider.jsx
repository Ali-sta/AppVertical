import React from 'react'
import styles from './SolutionProvider.module.scss'
import { Container ,  Row ,  Col } from 'react-bootstrap'
import GetDataTabs from '../Tabs/GetDataTabs'

function SolutionProvider(props) {
    
  return (
    <div className={styles['Solution-Provider-Sec']}>
        <Container>
            <Row>
                <Col md={12}>
                    <div className={styles['Top-Heading-sec']}>
                        <h5>{props.SubHeading}</h5>
                        <h1>{props.Heading}</h1>
                        <p>{props.Description}</p>
                    </div>
                </Col>
            </Row>
            <Row>
               <GetDataTabs/>
            </Row>
        </Container>
    </div>
  )
}

export default SolutionProvider
