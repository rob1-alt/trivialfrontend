import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import Link from 'next/link'

function Cycling(){
    return(
        
        <div className="containerCycling">
            <div className="cyclingHeader">
                 <h1>Que voulez-vous recycler ?</h1>
                <p>Et si on apprennait à bien recycler ensemble ?</p>
             </div>
                  {/*  LES 3 POUBELLES   */}
             <div className="cyclingInfo">
             <Row gutter={[32, 8]}>
                <Col className="infoCycling" span={12}> 
                    <span className='infoTitle'>Bac à verre</span>
                    <p className='infoP'>La poubelle verte c’est pour le verre, <br></br> <span className='Green'> Vert = Verre</span>
                    <br></br>Ici pas de bouchons ou de couvercles sur les articles que vous jetez, juste du verre quoi ! </p>
                </Col>
                <Col span={12}><img className="background1" src="/img/background1.svg"></img> </Col>     
                {/*  2   */}
                <Col span={12}><img className="background2" src="/img/background2.svg"></img> </Col> 
                <Col span={12}><span className='infoBac'>Bac de recyclage</span>
                    <p className='infoP'> 
                        Facile ! C’est pour le <span className='Yellow'> plastique, carton et papier</span> (s'il n'y a pas de bac bleu). 
                        <br></br> On laisse les bouchons ou on les donnent à <Link href="https://www.bouchonsdamourfranciliens.fr/">Bouchons d'amour </Link> !
                        <br></br> On vous en bouche un coin non ?
                    </p>
                </Col>
                  {/*  3   */}
                <Col className="infoCycling3" span={12}> 
                    <span className='info3'>Bac d’ordures ménagères</span>
                    <p className='infoP'>Gris/Noir : la poubelle « classique ». Elle sert à collecter le reste des déchet. Donc les broccolis de mamie c’est dans celle là !</p>
                </Col>
                <Col span={12}><img className="background3" src="/img/background3.svg"></img> </Col> 
            </Row>
             </div> 
                 {/*  CALENDRIER  */}
            <div className='calendrier'>
                <h1 className='calendrierH'>Le Calendrier des poubelles</h1>
                <p>Inscrivez les jours de passages de vos poubelles !</p>
                <Link href="https://gpseo.fr/vivre-et-habiter/maitrise-des-dechets/collecte-des-dechets-2022-dans-ma-rue">
                <img className="background4"  src="/img/background4.svg"></img>
                </Link>
            </div>
        </div>
    
        

    )
}

export default Cycling
