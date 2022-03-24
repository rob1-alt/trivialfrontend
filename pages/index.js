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
                    <div className="Explication">
                <Row gutter={[32, 8]}>
                <Col className="whatisTrivial" span={12}>
                    <span className='recyclageTitle1'>Trivial c'est quoi ?</span>
                    <p className='info4'>On trie pour vous ! Trivial, c'est l'application qui vous aide à mieux recycler grâce à des conseils sur les produits que vous consommez.</p>
                </Col>
                <Col span={12}><img src="img/recyclage1.svg"></img></Col>
    
                {/*  2   */}
    
                <Col span={12}><img src="img/recyclage2.svg"></img></Col>
        
                <Col span={12}><span className='recyclageTitle2'>Consignes de trie</span>
                    <p className='info5'>
                    Les consignes sont simples. On vous aiguille en vous précisant le nombre de parties de l'emballage et dans quelle poubelle vous devez les jeter.
                    On vous mâche le travail !
                    </p>
                </Col>
    
                    {/*  3   */}
    
                <Col className="recyclageTitle" span={12}>
                    <span className='recyclageTitle7'>Votre historique de scan</span>
                    <p className='info6'>Vous jetez un déchet mais ne savez plus ou et comment le jeter ? Retrouvez l'historique de tous vos produits déjà scannés sur la page d'accueil. </p>
                </Col>
                <Col span={12}><img src="img/recyclage3.svg"></img></Col>
            </Row>
            </div>
    
    
            <div className='titleBande'>
                <p>Maintenant que tout est clair, on commence ?</p>
            </div>
            <div className='Bande'>
    
            </div>
            <div className='titleHist'>
                <h3>Vos produits scannés</h3>
                <p>Retrouvez tout votre historique ici :</p>
            </div>
    
                <div className="bloc">
            <Card
                    img="https://images.unsplash.com/photo-1592187270271-9a4b84faa228?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    title="Ananas - 33cl"
                    description="A/B"
            />
            <Card
                    img="https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80"
                    title="Banane - 2L"
                    description="C/D"
            />
            <Card s
                    img="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80"
                    title="Fraise - 50cl"
                    description="A/B"
            />
                        <Card
                    img="https://images.unsplash.com/photo-1592187270271-9a4b84faa228?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    title="Ananas - 33cl"
                    description="A/B"
            />
            <Card
                    img="https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80"
                    title="Banane - 2L"
                    description="C/D"
            />
            <Card s
                    img="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80"
                    title="Fraise - 50cl"
                    description="A/B"
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