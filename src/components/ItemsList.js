import React from 'react';
import Item from './Item';
import styled from 'styled-components';

const ItemsList = ({ items, user, onBasketAdd }) => {

  const ItemList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  `
  const itemComponents = items.map(item => (
    <Item key={item.id} item={item} user={user} onBasketAdd={onBasketAdd} />
  ));

  const WelcomeText = styled.h1`
    padding: 1rem;
    text-align: center;
    color: #115052;
    font-family: "Helvetica Neue";
  `
  const WelcomeSubText = styled.h1`
   
    text-align: center;
    color: #ee7272;
    font-family: "Roboto";
    font-style: italic;
    padding-bottom: 1rem;

  `
  return (
    <>
    <WelcomeText>Welcome to Curiosity Mugs </WelcomeText>
    <WelcomeSubText> We invite you to indulge in the art of exquisite mugs and cups</WelcomeSubText>
     
   
    <ItemList>

      {itemComponents}
    </ItemList>
    </>
  );
};

export default ItemsList;
