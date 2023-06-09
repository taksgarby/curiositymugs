import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Header = ( { user } ) => {

  const Header = styled.header`
    background-color: green;
    color: white;
    display: flex;
    justify-content: space-between;
  `

  const HeaderGroup = styled.hgroup `
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-bottom: 1rem;
    padding-left: 30px;
  `

  return (
    <Header>
        <HeaderGroup>
          <h1>Curiosity Mugs</h1>
          <h4>Indulge in the Art of Exquisite Cups</h4>
        </HeaderGroup>

      <nav>
        <ul>
          <li><Link to="/">View Stock</Link></li>
        </ul>


      </nav>
      <div id="user-info">
        <h3>Welcome back { user.name }</h3>
        <h4>You have { user.basket.length } items in your basket</h4>
        <Link to="/basket">Go to Basket</Link>

      </div>
    </Header>
  );
};

export default Header;
