import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Basket = ( { user, onRemoveItem } ) => {

    const Basketlist = styled.div`
        width:80%;
        margin: 60px;
        padding: 30px;
        background-color: lightyellow;
        color: #202020;
        box-shadow: 4px 4px 4px 4px grey;
        border-radius: 10px;
        text-align: center;
        font-size: 1.3rem;
    `

    const Button = styled.button `
        background-color: white;
        color: black;
        margin: 5px;
        border: 2px solid grey; 
        border-radius: 8px;
     `

    const BackToList = styled.p`
        margin-left: 40px;
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
