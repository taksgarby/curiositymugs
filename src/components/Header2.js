import { Link } from "react-router-dom";
import '../styles/Header.css'
import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import FeatherIcon from 'feather-icons-react';

const Header2 = ( { user } ) => {

  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

  const Navbar = {
    Wrapper: styled.nav`
    flex: 1;
    align-self: flex-start;
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #347474;
    `,

    Logo: styled.header`
    color: #F6EBDA;
    padding: 0.5rem 1rem;
    font-size: 3rem;
    `,

    Items: styled.ul`
    display: flex;
    list-style: none;
    `,
  
    Item: styled.li`
    padding: 0 1rem;
    cursor: pointer;
    color: #F6EBDA;
    font-size: 1.5rem;
    text-decoration: none;
    `,


  };

  const MobileNavbar = {
    Wrapper: styled(Navbar.Wrapper)`
      align-self: flex-end;
  
      justify-content: center;
    `,
    Items: styled(Navbar.Items)`
      flex: 1;
      padding: 0 2rem;
  
      justify-content: space-around;
    `,
    Item: styled(Navbar.Item)`
      display: flex;
      flex-direction: column;
      align-items: center;
  
      font-size: 1.2rem;
    `,
    Icon: styled.span`
        color: green;
    `,
  };

  return (
    <>
    {isMobile ? (
       
        <MobileNavbar.Wrapper>
          <MobileNavbar.Items>
            <MobileNavbar.Item>
              {/* <MobileNavbar.Icon>
                <Home size={16} />
              </MobileNavbar.Icon> */}
              Home
            </MobileNavbar.Item>
            <MobileNavbar.Item>
              {/* <MobileNavbar.Icon>
                <Bookmark size={16} />
              </MobileNavbar.Icon> */}
              <Link to="/curiositymugs/basket"><FeatherIcon icon="shopping-cart" /></Link>
            </MobileNavbar.Item>
            <MobileNavbar.Item>
              {/* <MobileNavbar.Icon>
                <User size={16} />
              </MobileNavbar.Icon> */}
              Items: { user.basket.length }
            </MobileNavbar.Item>
          </MobileNavbar.Items>
        </MobileNavbar.Wrapper>
       
       
      ) : (
        
        <Navbar.Wrapper>
          <Navbar.Logo>Curiosity Mugs</Navbar.Logo>
          <Navbar.Items>
            <Navbar.Item>Home</Navbar.Item>
            <Navbar.Item>
                <Link to="/curiositymugs/basket" style={{ textDecoration: 'none' }}>
                Basket
          
                </Link>
            </Navbar.Item>
            <Navbar.Item>Items: { user.basket.length }</Navbar.Item>
          </Navbar.Items>
        </Navbar.Wrapper>
  
      )}
           </>


    // <nav className='header'>
    //   <ul className='header-contents'>
    //   <li className='shop-name'>
    //     Curiosity Mugs
    //   </li>
    //   <li className='basket'>
    //     {user.basket.length} items in your basket.<br/>
    //      <Link to="/curiositymugs/basket">View Basket</Link>
    //   </li>
    //   </ul>
    // </nav>



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

export default Header2;
