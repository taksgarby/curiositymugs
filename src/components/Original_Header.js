import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import '../styles/Header.css'

const OriginalHeader = ( { user } ) => {

  const Header = styled.header`
    background: #347474; 
    color: white;
    display: flex;
    justify-content: space-between;

  `

  const HeaderGroup = styled.hgroup `
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-bottom: 0.7rem;
    padding-left: 30px;
  `

  return (
    <nav className='header'>
      <ul className='header-contents'>
      <li className='shop-name'>
        Curiosity Mugs
      </li>
      <li className='basket'>
        {user.basket.length} items in your basket.<br/>
         <Link to="/curiositymugs/basket">View Basket</Link>
      </li>
      </ul>
    </nav>



    // <Header>
    //     <HeaderGroup>
    //       <h1>Curiosity Mugs</h1>
    //       <h2>Indulge in the Art of Exquisite Mugs and Cups</h2>
    //     </HeaderGroup>



    //   <div id="user-info">
    //     <h3>Welcome back, { user.name }!</h3>
    //     <h3>You have { user.basket.length } items in your basket</h3>
    //     <Link to="/curiositymugs/basket">View Basket</Link>

    //   </div>
    // </Header>
    // <div className="header">
    //   <div className="header-contents">
    //   <div className="shop-name">
    //     Curiosity Mugs
    //   </div>
    //   <div className="logos">
    //     adaf
    //   </div>
    //   </div>
    // </div>


  );
};

export default OriginalHeader;
