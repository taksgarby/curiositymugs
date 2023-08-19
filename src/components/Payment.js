import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Payment = () => {


  const TopSection = styled.div`
    background: #F6EBDA;
    margin: 0;
    display: flex;
    position: relative;
    flex-flow: row wrap;
    justify-content: space-evenly;
    padding-top: 2rem;
    
  `
  const WelcomeText = styled.h1`
    color: #115052;
    font-family: "Nunito Sans";
  `

  const BespokeText =styled.p`
    color: #115052;
    text-align: left;
    font-size: 1.4rem;
    vertical-align: bottom;
  `

  const BespokeLink =styled.p`
  text-align: center;
  font-size: 1.4rem;

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

 const BespokeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
 `
  

  return (
    <>
    <BespokeWrapper>    
    <TopSection>
    <TopTexts>
    <WelcomeText>Welcome to Payment Page </WelcomeText>


    </TopTexts>

    </TopSection>
 
    </BespokeWrapper>

    </>
  );
};

export default Payment;
