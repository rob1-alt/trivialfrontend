import React from 'react'
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import Link from 'next/link'

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
                        <li><Link href="/">Accueil</Link></li>
                        <li><Link href="/ranking">Top 100</Link></li>
                        <li><Link href="/cycling">Recycle moi</Link></li>
                    </Col>
                    <Col span={6}>
                        <li><Link href="https://yuka.io/">Yuka</Link></li>
                        <li><Link href="https://www.ecologie.gouv.fr/">Ecologie Gouv</Link></li>
                    </Col>
                    <Col span={6}>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </Col>
                 </Row>
                        
                 </div>
                <Row>
                    <Col span={12}>
                        <img className="logoImg" src="/img/t.svg"/>
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