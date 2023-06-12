import React from 'react';
import Item from './Item';
import styled from 'styled-components';
import Rabbit from '../images/rabbit.png';

const ItemsList = ({ items, user, onBasketAdd }) => {

  const ItemList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: white;
  `
  const itemComponents = items.map(item => (
    <Item key={item.id} item={item} user={user} onBasketAdd={onBasketAdd} />
  ));

  const TopSection = styled.div`
    background: #F6EBDA;
    margin: 0;
  `
  const WelcomeText = styled.h1`
    padding: 1rem;
    text-align: center;
    color: #115052;
    font-family: "Helvetica Neue";
  `
  const WelcomeSubText = styled.h1`
   
    text-align: center;
    color: #e34d4d;
    font-family: "Roboto";
    font-style: italic;
    padding-bottom: 1rem;
    
  `
  const TopImage = styled.div`
    background-image: url(${Rabbit});
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-repeat: no-repeat;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
  `
  
  const ItemIntro = styled.h1`
    color: #202020;
    background: white;
    text-align: center;
    margin-top: 1rem;
    padding-top: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    `

  return (
    <>
    <TopSection>
    <TopImage src={require("../images/rabbit.png")} alt="rabbit"/>
    <WelcomeText>Welcome to Curiosity Mugs </WelcomeText>
    <WelcomeSubText> We invite you to indulge in the art of exquisite mugs and cups</WelcomeSubText>
     
    </TopSection>
    <ItemIntro>Our products</ItemIntro>
    <ItemList>
   
      {itemComponents}
    </ItemList>
    </>
  );
};

export default ItemsList;
