import React from 'react';
import styled from "@emotion/styled";
import {Image} from '@chakra-ui/react';
import FiliiBoxComponent from '../Filii/FiliiBoxComponent';
import {Link} from "react-router-dom";
import {color2} from "../colors";


const CartGlobal = styled.div`
  display: flex;
  //align-items: center;
  width: 100%;
  justify-content: center;
`
const Container = styled.div`
  width: 25rem;
  background: ${color2};
  margin: 20px;
  border-radius: 10px;
  padding: 5px;
  // justify-content: center; 
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

const Content = styled.div`
  // justify-content: center; 
  display: flex;
  align-items: center;
  flex-direction: column;
`
const ImageBox = styled.div`
  width: 100%;
  height: 50%;
`
const ImageHead = styled.img`
  height: 30rem;
  width: auto;
`
const TextBox = styled.div`

`
const Text = styled.h2`

`

const CartInfo = () => {
    const imageBook = require("../../ImageBook/library.jpg")
    const imageEmployee = require("../../ImageHome/woman-4218724.jpg")
    const imageFilii = require("../../ImageBook/filiiPhoto.jpg")
    return (
        <CartGlobal>
            <Container><Link to={"/listBook"}>
                <Content>
                <Text>Czytaj nasze Książke</Text>
                    <ImageHead src={imageBook}/>
                    <h2>Nie wiesz, którą książkę wybrać? Jaki gatunek?
                Możesz pomyśleć, że nie będzie ciekawie, ale z naszą biblioteką będziesz mógł dokonać wyboru</h2>
                </Content>
            </Link></Container>
            <Container>
                <Link to={"listBranch"}>
                <Content>
                <Text>Zobacz nasze Filii</Text>
                    <ImageHead src={imageFilii}/>
                <h2>Szukasz miejsca gdzie można pożyczyć książke?</h2>
                <h2>chcesz ciekawie i pożytecznie spędzić czas?</h2>
                <h2>Zapraszamy do naszych bibliotek</h2>
                </Content>
                </Link>
            </Container>
            <Container>
                <Text>Nasza praca</Text>
                    <ImageHead src={imageEmployee}/>
                <h2>Szukasz Prace?</h2>
                <h2>Chcesz zostać bibliotekarzem??</h2>
                <h2>Zobacz naszą propozycję i naszych pracowników</h2>
            </Container>
        </CartGlobal>
    );
};

export default CartInfo;
