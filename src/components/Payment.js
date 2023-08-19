import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import PaymentForm from './PaymentForm';

const Payment = ({user}) => {


  const TopSection = styled.div`
    background: #F6EBDA;
    margin: 0;
    display: flex;
    position: relative;
    flex-flow: column;
    justify-content: space-evenly;
    padding-top: 2rem;
    
  `
  const WelcomeText = styled.h1`
    color: #115052;
    font-family: "Nunito Sans";
    text-align: center;
  `

  const PurchaseSummary =styled.p`
    color: #404040;
    font-size: 1.4rem;
    vertical-align: bottom;
    text-align: center;
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

 const purchaseSummary = user.basket.map( item => (
    <li>
        <span className='basketItem'>
            { item.name } £{ item.price }
        </span>
    </li >
) );
 
  const PurchaseTotal = styled.div`
    color: #115052;
    text-align: center;
    font-size: 1.4rem;
    vertical-align: bottom;
    margin-top: 1rem;
  `

  const purchaseTotal = user.basket.reduce(function(accumulator, basketItem){
    return accumulator + basketItem.price;
   }, 0);

  return (
    <>
    <BespokeWrapper>    
    <TopSection>
    <TopTexts>
    <WelcomeText>Payment summary </WelcomeText>
    </TopTexts>
    <PurchaseSummary> 
        { purchaseSummary }
    <PurchaseTotal>
        Your total payment is: £ {purchaseTotal}
    </PurchaseTotal>
    </PurchaseSummary>
    </TopSection>
    <PaymentForm/>
    </BespokeWrapper>

    </>
  );
};

export default Payment;
