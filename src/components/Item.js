import React from 'react';
import styled from 'styled-components';

const Item = ({ item, user, onBasketAdd }) => {

  const StockItem = styled.div `
    margin: 5px;
    display: flex;
    flex-direction: column;
  `

  const ItemImage = styled.img `
    margin: 2rem;
    height: 300px;
    box-shadow: 2px 2px 4px grey;
    border-radius: 5%;
  `

  const ItemPara = styled.p `
     margin: 5px;
  `

  const Button = styled.button `
    background-color: white;
    color: black;
    margin-left: 80px;

    border: 2px solid grey; 
    border-radius: 8px;
    width: 200px;

  `
  
  const ItemInfo = styled.p `
    margin-left: 80px;
  
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
      <p>{item.name}</p>
      <p>£{item.price}</p>
      </ItemInfo>
    </StockItem>
  );
};

export default Item;
