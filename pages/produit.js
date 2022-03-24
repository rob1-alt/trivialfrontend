import React from 'react'
// import 'antd/dist/antd.css';

function Produit(){
    return(
        <div className='container'>
            <div className='s1_product_photo'>
                <h2 className='raviolis'>Raviolis Rana Boeuf <br></br> et petits légumes</h2>
                <img className='Rana' src="/img/Rana.png"/>
            </div>
            <div className='s2_product_labels'>
                <ul className='product_labels'>
                    <li>Marque :</li>
                    <li>Quantité :</li>
                    <li>Pays :</li>
                </ul>
                <ul className='product_data'>
                    <li className='brand'>Rana</li>
                    <li className='quantity'>250g</li>
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
                <button onclick="/cycling.js" className='learn_more'>En savoir plus</button>
            </div>
            <div className='spacing'></div>
        </div>
        )
}


export default Produit 