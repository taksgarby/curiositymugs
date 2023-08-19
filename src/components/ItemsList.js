import React from 'react';
import Item from './Item';
import styled from 'styled-components';
import TopImg from '../images/TopImg.png';
import { Link } from "react-router-dom";

const ItemsList = ({ items, user, onBasketAdd }) => {

  const ItemList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: white;
    font-family: "Nunito Sans";
  `
  const itemComponents = items.map(item => (
    <Item key={item.id} item={item} user={user} onBasketAdd={onBasketAdd} />
  ));

  const TopSection = styled.div`
    background: #F6EBDA;
    margin: 0;
    display: flex;
    position: relative;
    flex-flow: row wrap;
    justify-content: space-evenly;
    padding: 1.5rem;
  `
  const WelcomeText = styled.h1`
    color: #115052;
    font-family: "Nunito Sans";
  `
  const WelcomeSubText = styled.h1`
    color: #e34d4d;
    font-family: "Nurito Sans";
    font-style: italic;
  `
  const UserInfo =styled.p`
    color: #115052;
    text-align: right;
    font-size: 1.4rem;
    vertical-align: bottom;
    font-family: "Open Sans";
  `
  const LinkStyle = {
    textDecoration: "none",
    color: "#e34d4d"

  };


 const TopImage = styled.img`
   width: 180px; /**/
   height: 180px; /**/
   border-radius: 50%;
   display: block;
 
 `
 const TopTexts = styled.div`
   margin-left: 2rem;
 `


  
  const ItemIntro = styled.h1`
    color: #202020;
    background: white;
    text-align: center;
    margin-top: 1rem;
    padding-top: 1rem;
    font-family: "Nunito Sans";
    `

  return (
    <>
    <TopSection>

    <TopTexts>
    <WelcomeText>Welcome to Curiosity Mugs </WelcomeText>
    <WelcomeSubText> We invite you to indulge in the art of exquisite mugs and cups</WelcomeSubText>

    <UserInfo>You have <span className='basketinfo'>{ user.basket.length } </span>items in your <Link to="/curiositymugs/basket" style={LinkStyle}>basket</Link>. </UserInfo>
    </TopTexts>
    <TopImage src={require("../images/TopImg.png")} alt="rabbit"/>
    </TopSection>

    <ItemIntro>Our products</ItemIntro>
    <ItemList>
   
      {itemComponents}
    </ItemList>
    </>
  );
};

export default ItemsList;
