    import React from 'react'
    import { Row, Col } from 'antd';
    import Link from 'next/link'
    import Search from "../components/SearchBar";

    // import 'antd/dist/antd.css';

    function Landing(){
    return(
            <div className="landingPage">
                <div className="titleLanding">
                    <h2><b>Bienvenue <br /> sur Trivial</b></h2>
                    < Search/>
                </div>

                
                <div className="trivialInfo">
                    <div className="Explication">
                <Row gutter={[32, 8]}>
                <Col className="whatisTrivial" span={12}>
                    <span className='recyclageTitle1'><b>Trivial c'est quoi ?</b></span>
                    <p className='info4'>On trie pour vous ! Trivial, c'est l'application qui vous aide à mieux recycler grâce à des conseils sur les produits que vous consommez.</p>
                </Col>
                <Col span={12}><img src="img/recyclage1.svg"></img></Col>
    
                {/*  2   */}
    
                <Col span={12}><img src="img/recyclage2.svg"></img></Col>
        
                <Col span={12}><span className='recyclageTitle2'><b>Consignes de tri</b></span>
                    <p className='info5'>
                    Les consignes sont simples. On vous aiguille en vous précisant le nombre de parties de l'emballage et dans quelle poubelle vous devez les jeter.
                    On vous mâche le travail !
                    </p>
                </Col>
    
                    {/*  3   */}
    
                <Col className="recyclageTitle" span={12}>
                    <span className='recyclageTitle7'><b>Votre historique de scan</b></span>
                    <p className='info6'>Vous jetez un déchet mais ne savez plus ou et comment le jeter ? Retrouvez l'historique de tous vos produits déjà scannés sur la page d'accueil. </p>
                </Col>
                <Col span={12}><img src="img/recyclage3.svg"></img></Col>
            </Row>
            </div>
    
    
            <div className='titleBande'>
                <p>Maintenant que tout est clair, on commence ?</p>
            </div>
            <div className='Bande'>
                <div className='number1'>
                    <h5>773Kg</h5>
                    <p>c’est ce que jette en moyenne 1 Français par an.</p>
                </div>
                <div className='number2'>
                    <h5>61%</h5>
                    <p>des francais trient mal leurs emballages. </p>
                </div>
                <div className='number3'>
                    <h5>4,6%</h5>
                    <p>de déchets produits en moins par habitant par an.</p>
                </div>
            </div>
            <div className='titleHist'>
                <h3><b>Vos produits scannés</b></h3>
                <p>Retrouvez ici tout votre historique ici :</p>
            </div>
    
                <div className="bloc">
            <Card
                    img="https://fr.openfoodfacts.org/images/products/20713713/front_fr.120.400.jpg"
                    title="Chocolat Bio"
                    description="D"
            />
            <Card
                    img="https://fr.openfoodfacts.org/images/products/324/093/154/5059/front_fr.126.400.jpg"
                    title="Gnocchi"
                    description="B"
            />
            <Card 
                    img="	https://fr.openfoodfacts.org/images/products/400/840/026/0921/front_fr.149.400.jpg"
                    title="Kinder"
                    description="{none}"
            />
            <Card
                    img="	https://fr.openfoodfacts.org/images/products/761/303/492/6814/front_fr.152.400.jpg"
                    title="Knacki"
                    description="E"
            />
            <Card
                    img="	https://fr.openfoodfacts.org/images/products/541/118/811/6592/front_fr.228.400.jpg"
                    title="Coco"
                    description="B"
            />
            <Card s
                    img="https://fr.openfoodfacts.org/images/products/316/893/000/3632/front_fr.112.400.jpg"
                    title="Quakers"
                    description="C"
            />
        </div>
    
    
                </div>
            </div>
        )
    }
    
    
    //Componenet historique
    
    
    function Card(props){
    return(
    <div className="Top">
        <div className="card">
            <div className="card__body">
                <img src={props.img} className="card__image"/>
                <h3 className="card__title">{props.title}</h3>
                <p className="card__description">Ecoscore {props.description}</p>
            </div>
            <button className="card__btn">voir produit</button>
        </div>
    </div>
    )
    }
    
    
    export default Landing