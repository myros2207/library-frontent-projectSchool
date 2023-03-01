import styled from '@emotion/styled';
import React from 'react';
import {keyframes} from "@emotion/react";


const ModalContainer = styled.div`
//transform
//  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: auto;
  border: 1px solid;
  animation-name: appearance;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  @keyframes appearance{
    from{bottom: 0}
    to{
      bottom: 40%}
  }
`

const ModalContent = styled.div`
  animation-name: color;
  animation-duration: 5s;
  animation-fill-mode: forwards;
  background: red;
  width: 10rem;
  height: 10rem;
  @keyframes color{
    from{background: red;}
    to{background: blue;}
  }
`
const ModalWork = () => {
    return (
        <ModalContainer>
            <ModalContent>

            </ModalContent>
        </ModalContainer>
    );
};

export default ModalWork;
