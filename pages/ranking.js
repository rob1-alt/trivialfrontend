import React, { useState, useEffect } from 'react'
import Search from "../components/SearchBar";
import Cart from "../components/Cart";
import Image from 'next/image'

function App(){

    //Problème de route je n'arrive pas a fetch un product par son id dans le tableau (j'ai essayé product[1]?._id)



    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [product, setProduct] = useState([]);


    // useEffect(() => {
    // fetch("http://localhost:8080/product-info/3274080005003")
    //     .then(res => res.json())
    //     .then(
    //     (result) => {
    //         setIsLoaded(true);
    //         setProduct(result.product);
    //     },
    //     (error) => {
    //         setIsLoaded(true);
    //         setError(error);
    //     }
    //     )
    // }, [])

    return(
        <div className="rankingPage">
        <div className="titleRanking">
            <h2><b>Retrouvez ici le top <br /> 100 produits</b></h2>
        </div>
        <div className="rankingSearch">
        < Search/>
        </div>
        <div className="topThree">
            <p>2</p>
            <p>1</p>
            <p>3</p>
        </div>
 {/* Problème pour fetch les données , j'ai donc remplacé par des vraies url en dur  */}
        <div className="bloc">
            <div className='second'>
                <Card 
                        img="https://fr.openfoodfacts.org/images/products/762/221/044/9283/front_fr.475.400.jpg"
                        title="Prince"   
                        description="E"
                />
            </div>
            <div className='first'>
            <Card 
                    img="https://fr.openfoodfacts.org/images/products/327/408/000/5003/front_fr.829.400.jpg"
                    title="Cristaline"
                    description="A/B"
            />
            </div>
            <div className='fird'>
            <Card 
                    img="https://fr.openfoodfacts.org/images/products/301/762/042/5035/front_fr.372.400.jpg"
                    title="Nutella"
                    description="E"
            />
            </div>
        </div>
        <div className="selectorListe">
            <p>Classer par :</p>
        
            
            <p>Catégories</p>
        </div>

        <div className="bloc2">
            <Cart 
                illustration="https://fr.openfoodfacts.org/images/products/327/408/000/5003/front_fr.829.400.jpg"
                title="Cristaline"
                ecoScore="A/B"
            />
                        <Cart 
                illustration="https://fr.openfoodfacts.org/images/products/762/221/044/9283/front_fr.475.400.jpg"
                title="Prince"
                ecoScore="E"
            />

<Cart 
                illustration="https://fr.openfoodfacts.org/images/products/301/762/042/5035/front_fr.372.400.jpg"
                title="Nutella"
                ecoScore="E"
            />

<Cart 
                illustration="https://fr.openfoodfacts.org/images/products/317/568/001/1480/front_fr.139.400.jpg"
                title="Sablé"
                ecoScore="B"
            />
                       <Cart 
                illustration="https://fr.openfoodfacts.org/images/products/304/692/002/2651/front_fr.114.400.jpg"
                title="Chocolat"
                ecoScore="E"
            />
                       <Cart 
                illustration="	https://fr.openfoodfacts.org/images/products/316/893/001/0265/front_fr.182.400.jpg"
                title="Cruesli"
                ecoScore="C"
            />



        </div>

    </div>
    )


//Componenet TOP 3

}
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



export default App



