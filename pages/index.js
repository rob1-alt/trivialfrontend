import Head from 'next/head'
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import Nav from '../components/Nav.js'



export default function Home() {
  return (
    <div className="App">
    <Nav></Nav>
     <div className="l1-3">
     <div className="containerindex">
            <div className="indexHeader">
                 
                <Row>
                  <Col className='number' xs={{ span: 14, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                  <h1>Bienvenue <br></br>sur trivial !</h1>
                  <p>Fini les doutes et les erreurs de tri !</p>
                  </Col>
                  <Col className='number' xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                  <img className="heart" src="/img/heart.svg"/>
                  </Col>
                </Row>
                <input id="searchbar" onkeyup="search_product()" type="text"
                  name="search" placeholder="Exemple : 3017620425035"></input>
             </div>

        </div>
     </div> 
     <div className="indexinfo">
    <Row >
    <Col xs={{ span: 12, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <h3>Trivial, c'est quoi?</h3>
    <p>On trie pour vous ! Trivial, c’est l’application qui vous aide à mieux recycler grâce à des conseils sur les produits que vous consommez.</p>
    </Col>
    <Col xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <img className="historique" src="/img/cycling.jpg"/>
    </Col>
    </Row>
    <Row>
    <Col xs={{ span: 9, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <img className="rubbish" src="/img/rubbish.jpg"/>
    </Col>
    <Col xs={{ span: 12, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <h3>Consignes de Tri</h3>
    <p>Les consignes sont simples. On vous aiguille en vous précisant le nombre de parties de l’emballage et dans quelle poubelle vous devez les jeter.On vous mâche le travail !</p>
    </Col>
    </Row>
    <Row>
    <Col xs={{ span: 12, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <h3>votre historique de scan</h3>
    <p>Vous jetez un déchet mais ne savez plus ou et comment le jeter ? Retrouvez l’historique de tous vos produits déjà scannés sur la page d’accueil.</p>
    </Col>
    <Col xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <img className="time" src="/img/time.jpg"/>
    </Col>
    </Row>
    </div>
    
    <h5 className="textTest">maintenant que tout est clair, on commence ? </h5>

    <div className="containersource">
    <Row>
    
    <Col className='number' xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <h2>773<sup>kg</sup></h2>
    </Col>
    <Col className='number' xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <h2>61<sup>%</sup></h2>
    </Col>
    <Col className='number' xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <h2>4.6<sup>%</sup></h2>
    </Col>
    </Row>
    <Row>
    <Col classname='comment'xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <p className="infoChiffre">c’est ce que jette en moyenne 1 Français par an.</p>
    </Col>
    <Col classname='comment'xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <p className="infoChiffre">des francais trient mal leurs emballages.</p>
    </Col>
    <Col classname='comment'xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <p className="infoChiffre">de déchets produits en moins par habitant par an.</p>
    </Col>
    </Row>
    <h5>source : actu-environnement.com*</h5>
    </div>
    <div className="containerstory">
    <h3>Trivial, c'est quoi?</h3>
    <p>retrouver tout votre historique ici</p>
    </div>
    </div>



   
  
  
  )
}
