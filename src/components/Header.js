import { Link } from "react-router-dom";
import '../styles/Header.css'
import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import FeatherIcon from 'feather-icons-react';

const Header = ( { user } ) => {

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
    padding: 0.7rem 5rem;
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

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white'
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
              <Link to="/curiositymugs" style={linkStyle}>Home</Link>
            </MobileNavbar.Item>
            <MobileNavbar.Item>
              <Link to="/curiositymugs/basket" style={linkStyle}><FeatherIcon icon="shopping-cart" /></Link>
            </MobileNavbar.Item>
            <MobileNavbar.Item>
            <Link to="/curiositymugs/bespoke" style={linkStyle}>
              Bespoke
            </Link>
            </MobileNavbar.Item>
          </MobileNavbar.Items>
        </MobileNavbar.Wrapper>      
       
      ) : (
        
        <Navbar.Wrapper>
          <Navbar.Logo>Curiosity Mugs</Navbar.Logo>
          <Navbar.Items>
            <Navbar.Item>
            <Link to="/curiositymugs" style={linkStyle}>
              Home
            </Link>
            </Navbar.Item>
            <Navbar.Item>
                <Link to="/curiositymugs/basket" style={linkStyle}>
                Basket       
                </Link>
            </Navbar.Item>
            <Navbar.Item><Link to="/curiositymugs/bespoke" style={linkStyle}>Bespoke</Link></Navbar.Item>
          </Navbar.Items>
        </Navbar.Wrapper>
  
      )}
           </>
  );
};

export default Header;
