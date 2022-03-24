import React from 'react'
import { Row, Col } from 'antd';
import Link from 'next/link'

// import 'antd/dist/antd.css';

function Landing(){
    return(
          <div className="landingPage">
              <div className="titleLanding">
                  <h2>Bienvenue <br /> sur Trivial</h2>
              </div>
              
              <div className="trivialInfo">
              <Row gutter={[32, 8]}>
                <Col className="whatisTrivial" span={12}> 
                    <span className='recyclageTitle1'>Trivial c'est quoi ?</span>
                    <p className='info4'>On trie pour vous ! Trivial, c’est l’application qui vous aide à mieux recycler grâce à des conseils sur les produits que vous consommez.</p>
                </Col>
                <Col span={12}><img src="img/recyclage1.svg"></img></Col>

                {/*  2   */}

                <Col span={12}><img src="img/recyclage2.svg"></img></Col> 
        
                <Col span={12}><span className='recyclageTitle2'>Consignes de trie</span>
                    <p className='info5'> 
                    Les consignes sont simples. On vous aiguille en vous précisant le nombre de parties de l’emballage et dans quelle poubelle vous devez les jeter.
                    On vous mâche le travail !
                    </p>
                </Col>

                  {/*  3   */}

                <Col className="recyclageTitle" span={12}> 
                    <span className='recyclageTitle7'>Votre historique de scan</span>
                    <p className='info6'>Vous jetez un déchet mais ne savez plus ou et comment le jeter ? Retrouvez l’historique de tous vos produits déjà scannés sur la page d’accueil. </p>
                </Col>
                <Col span={12}><img src="img/recyclage3.svg"></img></Col> 
            </Row>

              </div>
          </div>
        )
}


export default Landing 