import { useState } from 'react';
import Image from 'next/image'
import { tabsData } from '@/DataMockup/data';
import styles from './GetDataTabs.module.scss'
import { Container ,  Row , Col } from 'react-bootstrap';

function GetDataTabs() {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const handleTabClick = (tabId) => {
      setActiveTab(tabId);
  };

    return (
        <div className={styles['Tab-Main-Sec']}>
            <div className={styles['tabs-sec']}>
                <ul className={styles['tabs-ul']}>
                    {tabsData.map((tab) => (
                        <div className={styles['li-box']} key={tab.id}>
                            <li
                                
                                className={`${styles['tab']} ${activeTab === tab.id ? `${styles['active']}` : ''}`}
                                onClick={() => handleTabClick(tab.id)}>
                                {tab.Title}
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
            <div className={styles['tab-content']}>
                {tabsData.map((tab) => (
                    <div
                        key={tab.id}
                        className={`${styles['content']} ${activeTab === tab.id ? `${styles['active']}` : ''}`}
                        >

                        <div className={styles['Tab-Content-Sec']}>
                          <Container>
                            <Row className={styles['Tab-Content-Sec-Row']}>
                              <Col md={4}>
                                  <div className={styles['Content-Box']}>
                                     <p>{tab.Description}</p>
                                  </div>
                              </Col>
                              <Col md={8}>
                                <div className={styles['Image']}>
                                    <Image
                                        className={styles['img']}
                                        src={tab.ImageUrl}
                                        alt=""
                                        width={450}
                                        height={500}
                                    />
                                  </div>
                              </Col>
                            </Row>
                          </Container>
                        </div>
                      </div>  
                ))}
          </div>
      </div>
    );
};

export default GetDataTabs;