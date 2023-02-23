import React from 'react';
import styled from "@emotion/styled";
import CartInfo from "../Home/CartInfo";

const ContainerText = styled.div`
  //font: 400 1em/1.5 "Neuton";
  //background: #090d00;
  //width: 100%;
  color: rgba(255, 255, 255, .25);
  text-align: center;
  //margin: 0
  position: relative;
`
const Text = styled.p`
  text-transform: uppercase;
  letter-spacing: .5em;
  //display: inline-block;
  border: 4px double rgba(255, 255, 255, .25);
  border-width: 4px 0;
  padding: 1.5em 0em;
  //position: absolute;
  top: 3px;
  //left: 1px;
  //right: 1px;
  width: 100%;
  //margin: 0 0 0 -20em;

  span {
    font: 700 4em/1 "Oswald", sans-serif;
    letter-spacing: 0;
    padding: .25em 0 .325em;
    display: block;
    margin: 0 auto;
    text-shadow: 0 0 80px rgba(255, 255, 255, .5);

    /* Clip Background Image */

    //background: url(https://i.ibb.co/RDTnNrT/animated-text-fill.png) repeat-y;
    background: rgb(0,66,90);
    background: linear-gradient(90deg, rgba(0,66,90,1) 0%, rgba(31,138,112,1) 35%, rgba(191,219,56,1) 71%, rgba(252,115,0,1) 91%);
    -webkit-background-clip: text;
    background-clip: text;

    /* Animate Background Image */

    -webkit-text-fill-color: transparent;
    -webkit-animation: aitf 80s linear infinite;

    /* Activate hardware acceleration for smoother animations */

    -webkit-transform: translate3d(0, 0, 0);
    -webkit-backface-visibility: hidden;

  }

  @-webkit-keyframes aitf {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }

`
const MainTextComponent = () => {
    return (
        <>
            <ContainerText>
            <Text>
                Czytaj i odpoczywaj
                <span>
            essay library
                </span>
                &mdash; Myroslav, Yehor, Danil&mdash;
            </Text>
        </ContainerText>

            </>
    );
};

export default MainTextComponent;
