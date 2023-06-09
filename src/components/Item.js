import React from 'react';
import styled from 'styled-components';

const Item = ({ item, user, onBasketAdd }) => {

  const StockItem = styled.div`
    margin: 5px;
    display: flex;
    flex-direction: column;
  `

  const ItemImage = styled.img`
    margin: 2rem;
    height: 300px;
    box-shadow: 2px 2px 4px grey;
    border-radius: 5%;
  `

  const ItemPara = styled.p `
     margin: 5px;
  `

  const Button = styled.button `
    background: #ee8572; 
    color: #202020; 
    margin-left: 80px;
    margin-right: 80px;
    padding: 8px;
    font-size: 1.1rem;
    text-align: center;
    border: 2px solid #ee8572; 
    border-radius: 15px;
    width: 200px;

  `
  
  const ItemInfo = styled.h3`
    text-align: center;
    margin-bottom: 7px;
    color: #202020;
 
  `

  const PriceInfo = styled.p`
    text-align: center;
    margin-top: 0;
    color: #202020;
    font-size: 1.1rem;
`

  const onClick = () => {
    const updatedUser = { ...user };
    updatedUser.basket = [...updatedUser.basket, item];
    onBasketAdd(updatedUser);
  };

  return (
    <StockItem>
      <ItemImage src={require("../images/" + item.image)} alt="item" />
      <Button onClick={onClick}>Add To Basket</Button>
      <ItemInfo>
      {item.name} 
      </ItemInfo>
      <PriceInfo>
      £{item.price}
      </PriceInfo>
    </StockItem>
  );
};

export default Item;
