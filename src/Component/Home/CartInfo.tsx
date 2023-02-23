import React from 'react';
import styled from "@emotion/styled";


const CartGlobal = styled.div`
  display: flex;
  //align-items: center;
  width: 100%;
  justify-content: center;
`
const Container = styled.div`
  border: 1px solid;
  background: aquamarine;
  margin: 20px;
  //justify-content: center;
  //display: flex;
  //align-items: center;
  //flex-direction: column;
`
const ImageHead = styled.img`
  //width: 100%;
  height: 40%;
`
const TextBox = styled.div`

`
const Text = styled.h2`

`

const CartInfo = () => {
    const imageBook = require("../../ImageBook/3bee1b1075e03641f7e4dacec7b864a9.jpg")
    const imageEmployee = require("../../ImageBook/employeLibrary.jpg")
    return (
        <CartGlobal>
            <Container>
                {/*<ImageHead src={imageBook}/>*/}
                <TextBox>
                    <Text>Czytj nasze książki</Text>
                </TextBox>
            </Container>
            <Container>
                <ImageHead src={imageEmployee}/>
            </Container>
            <Container>
                Zostań pracownikiem
            </Container>
        </CartGlobal>
    );
};

export default CartInfo;
