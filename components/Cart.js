import React from 'react'

function Cart(props){
    return(
       <div className="cart">
           <div className="cart__body">
               <img src={props.illustration} className="cart__image"/>
               <h3 className="cart__title">{props.title}</h3>
               <button className="cart__btn">voir produit</button>
               <div className="info1">
                 <p className="cart__part1">{props.part1}</p>
                 <p className="cart__material1">{props.material1}</p>
                 <img src={props.bin1} className="cart__bin1"/>
               </div>
               <div className="info2">
                 <p className="cart__part2">{props.part2}</p>
                 <p className="cart__material2">{props.material2}</p>
                 <img src={props.bin2} className="cart__bin2"/>
               </div>
               <div className="info3">
               <p className="cart__material2">Ecoscore<br />{props.ecoScore}</p>
               </div>
           </div>
       </div>
    )
}

export default Cart;

