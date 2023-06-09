import React from 'react';
import Item from './Item';
import styled from 'styled-components';

const ItemsList = ({ items, user, onBasketAdd }) => {

  const ItemList = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  `
  const itemComponents = items.map(item => (
    <Item key={item.id} item={item} user={user} onBasketAdd={onBasketAdd} />
  ));

  return (
    <ItemList>
      {itemComponents}
    </ItemList>
  );
};

export default ItemsList;
