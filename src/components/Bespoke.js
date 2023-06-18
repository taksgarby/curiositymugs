import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Bespoke_sample from '../images/bespoke_sample.png';
import RequestForm from './RequestForm';

const Bespoke = () => {


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
    <WelcomeText>Welcome to Our Bespoke Service </WelcomeText>
    <BespokeText>
    Imagine starting your day with a mug that reflects your unique taste.<br/>
    Share your ideas with us, and we will make them into a reality! 
    </BespokeText>
    <BespokeLink> 
    <Link to="/curiositymugs/bespokesample" style={LinkStyle}>Visit sample page</Link> 
    </BespokeLink>

    </TopTexts>
    <TopImage src={require("../images/bespoke_sample.png")} alt="bespoke_sample"/>
    </TopSection>
    <RequestForm/>
    </BespokeWrapper>

    </>
  );
};

export default Bespoke;
