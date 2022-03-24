import React from 'react'
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

function Footer(){
    return(
        <div className="footerDark">
        <footer>
            <div className="containerFooter">
                <div className="text">
                <Row>
                    <Col span={6} className="titleFooter">A Propos</Col>
                    <Col span={6} className="titleFooter">Pages</Col>
                    <Col span={6} className="titleFooter">Collab</Col>
                    <Col span={6} className="titleFooter">Nos réseaux</Col>
                 </Row>
                 <Row>
                    <Col span={6}>
                        <li>Cookies</li>
                        <li>Confidentialité</li>
                        <li>Contact</li>
                    </Col>
                    <Col span={6}>
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/ranking">Top 100</a></li>
                        <li><a href="/cycling">Recycle moi</a></li>
                    </Col>
                    <Col span={6}>
                        <li><a href="https://yuka.io/">Yuka</a></li>
                        <li><a href="https://www.ecologie.gouv.fr/">Ecologie Gouv</a></li>
                    </Col>
                    <Col span={6}>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Twitter</a></li>
                    </Col>
                 </Row>
                        
                 </div>
                <Row>
                    <Col span={12}>
                        <img className="logoFooter" src="/img/t.svg"/>
                    </Col>

                    <Col span={12}>

                     <p className="copyright">Trivial © 2022</p>

                    </Col>
                </Row>
                
            </div>
                    
         </footer>
         </div>
    )
}

export default Footer