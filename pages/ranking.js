import React, { useState, useEffect } from 'react'
import Search from "../components/SearchBar";
import Cart from "../components/Cart";
import Image from 'next/image'

function App(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);

  // Remarque : le tableau vide de dépendances [] indique
  // que useEffect ne s’exécutera qu’une fois, un peu comme
  // componentDidMount()
    useEffect(() => {
    fetch("http://localhost:8080/product-top ")
        .then(res => res.json())
        .then(
        (result) => {
            setIsLoaded(true);
            setProducts(result.products);
        },
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
        )
    }, [])



    return(
        <div className="rankingPage">
        <div className="titleRanking">
            <h2>Retrouvez ici le top <br /> 100 produits</h2>
        </div>
        <div className="rankingSearch">
        < Search/>
        </div>
        <div className="topThree">
            <p>2</p>
            <p>1</p>
            <p>3</p>
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
        </div>
        <div className="selectorListe">
            <p>Classer par :</p>
           
            
            <p>Catégories</p>
        </div>

        <div className="bloc2">
            <Cart 
                illustration="https://images.unsplash.com/photo-1528821128474-27f963b062bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                title={product}
                part1="Couvercle"
                material1="Plastique"
                bin1=""
                part2="Couvercle"
                material2="Plastique"
                bin2=""
                ecoScore="A/B"
            />
                        <Cart 
                illustration="https://images.unsplash.com/photo-1528821128474-27f963b062bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                title="test"
                part1="Couvercle"
                material1="Plastique"
                bin1=""
                part2="Couvercle"
                material2="Plastique"
                bin2=""
                ecoScore="A/B"
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



