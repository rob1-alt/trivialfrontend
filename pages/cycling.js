import React from 'react';
import Image from 'next/image'
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
                <Col span={12}><Image alt="background" layout='fill' className="background1" src="/img/background1.svg"></Image> </Col>     
                {/*  2   */}
                <Col span={12}><Image alt="background" layout='fill' className="background2" src="/img/background2.svg"></Image> </Col> 
                <Col span={12}><span className='infoBac'>Bac de recyclage</span>
                    <p className='infoP'> 
                        Facile ! C’est pour le <span className='Yellow'> plastique, carton et papier</span> (sil ny a pas de bac bleu). 
                        <br></br> On laisse les bouchons ou on les donnent à <Link href="https://www.bouchonsdamourfranciliens.fr/">Bouchons damour </Link> !
                        <br></br> On vous en bouche un coin non ?
                    </p>
                </Col>
                  {/*  3   */}
                <Col className="infoCycling3" span={12}> 
                    <span className='infoOrdure'>Bac d’ordures ménagères</span>
                    <p className='infoP'>Gris/Noir : la poubelle « classique ». Elle sert à collecter le reste des déchet. Donc les broccolis de mamie c’est dans celle là !</p>
                </Col>
                <Col span={12}><Image alt="background" layout='fill' className="background3" src="/img/background3.svg"></Image> </Col> 
            </Row>
             </div> 
                 {/*  CALENDRIER  */}
            <div className='calendrier'>
                <h1 className='calendrierH'>Le Calendrier des poubelles</h1>
                <p>Inscrivez les jours de passages de vos poubelles !</p>
                <Link href="https://gpseo.fr/vivre-et-habiter/maitrise-des-dechets/collecte-des-dechets-2022-dans-ma-rue">
                <Image layout='fill' alt="background" className="background4"  src="/img/background4.svg"></Image>
                </Link>
            </div>
        </div>
    
        

    )
}

export default Cycling
