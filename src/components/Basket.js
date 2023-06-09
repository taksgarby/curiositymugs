import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Basket = ( { user, onRemoveItem } ) => {

    const Basketlist = styled.div`
        width:60%;
        margin-top: 60px;
        margin-left: 150px;
        padding-top: 30px;
        padding-bottom: 30px;
        padding-left: 100px;
        padding-right: 100px;
        background-color: lightyellow;
        color: #202020;
        box-shadow: 4px 4px 4px 4px grey;
        border-radius: 10px;
        text-align: center;
        font-size: 1.5rem;
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

    const BackToList = styled.a`
        margin-left: 100px;
        margin-top: 30px;
        text-decoration: none;
        font-size: 1.5rem;
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

    return (
        <>
        <BackToList>
            <Link to="/">Back to Mugs and Cups</Link>
        </BackToList>
        <Basketlist>
            <h2>Your items: </h2>
            { user.basket.length > 0
                ? <ul >
                    { basketComponents }
                </ul>
                : <p>Basket Is Empty</p> }
        </Basketlist>
        </>
    );
};

export default Basket;
