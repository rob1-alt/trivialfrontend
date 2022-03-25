import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import 'antd/dist/antd.css';

function Produit(){


    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [product, setProduct] = useState([]);

  // Remarque : le tableau vide de dépendances [] indique
  // que useEffect ne s’exécutera qu’une fois, un peu comme
  // componentDidMount()
    useEffect(() => {
    fetch("http://localhost:8080/product-info/3175681851849")
        .then(res => res.json())
        .then(
        (result) => {
            setIsLoaded(true);
            setProduct(result.product);
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
        <div className='container'>
            <div className='s1_product_photo'>
                <h3 className='raviolis'>{product.generic_name_fr}</h3>
                <div className='productApi'>   
                    <img className='Rana' src={product.image_front_url}/>
                </div>
            </div>
            <div className='s2_product_labels'>
                <ul className='product_labels'>
                    <li>Marque :</li>
                    <li>Quantité :</li>
                    <li>Pays :</li>
                </ul>
                <ul className='product_data'>
                    <li className='brand'>{product.brands}</li>
                    <li className='quantity'>{product.quantity}</li>
                    <li className='country'>France</li>
                </ul>
            </div>
            <div className='s3_product_info'>
                <div className='impact_foret'>
                    <img className='leaf' src="/img/leaf.png"/>
                    <p className='info_text_foret'>Faible risque de déforestation</p>
                </div>
                <div className='eco_score'>
                    <img className='ecoscore' src="/img/ecoscore.png"/>
                    <p className='info_text_eco'>Très faible impact environnemental</p>
                </div>
            </div>
            <div className='s4_product_recycling'>
                <h3 className='howto'>Comment recycler ce produit :</h3>
                <div className='table_stroke'>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Partie</th>
                            <th scope="col">Forme</th>
                            <th scope="col">Matière</th>
                            <th scope="col">Poubelles</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Couvercle</td>
                        <td>Plastique</td>
                        <td>
                        <img className='yellow_bin' src="/img/yellow_bin.png"/>
                        </td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>Pot</td>
                        <td>Verre</td>
                        <td>
                            <img className='green_bin' src="/img/green_bin.png"/>
                        </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                
                <Link href ="/cycling">
                    <button className='learn_more'>En savoir plus</button>
                </Link>
            </div>
            <div className='spacing'></div>
        </div>
        )
}


export default Produit 