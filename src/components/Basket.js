import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Basket = ( { user, onRemoveItem } ) => {

    const Basketlist = styled.div`
    display: flex;

    justify-content: space-around;
    flex-direction: column;
    padding: 2rem;
    width: 90%;
    color: #202020;
    margin: 0;
    font-size: 1rem;
  `



    const Button = styled.button `
        background-color: white;
        color: black;
        margin-top: 0;
        padding: 10px;
        margin-bottom: 10px;
        border: 2px solid grey; 
        border-radius: 8px;
        font-size: 1rem;
     `


    const BasketTotal = styled.p`
        text-align: center;
    `

    const removeItem = ( itemToRemove ) => {
        const updatedUser = { ...user };
        updatedUser.basket = [ ...user.basket ];
        const index = updatedUser.basket.indexOf( itemToRemove );
        updatedUser.basket.splice( index, 1 );
        onRemoveItem( updatedUser );
    };

    const basketComponents = user.basket.map( item => (
        <li>
            <hr />
            <span>
                { item.name } £{ item.price }
                <img src={ require( "../images/" + item.image ) } alt="item" />
            </span>
            <Button onClick={ () => removeItem( item ) }>Remove</Button>
        </li >
    ) );



   const basketTotal = user.basket.reduce(function(accumulator, basketItem){
    return accumulator + basketItem.price;
   }, 0);


    return (
        <>

        <Basketlist>
            <h2>Your items: </h2>
            { user.basket.length > 0
                ? <ul >
                    { basketComponents }
                </ul>
                : <p>Your Basket Is Empty</p> }
     
        <BasketTotal>
        
                Your Shopping Total: £ {basketTotal}
        </BasketTotal>
        </Basketlist>
        </>
    );
};

export default Basket;
