import React from 'react';
import {Box} from "@chakra-ui/react";
import Navbar from "../ui/Navbar";
import {mockBook} from "../../mock";
import BookBoxComponent from "../Book/BookBoxComponent";
import MainTextComponent from "../ui/MainTextComponent";
import CartInfo from "./CartInfo";

const HomePage = () => {
    return (
        <Box minH={"100vh"} display={"flex"} flexDirection={"column"}>
            <Navbar/>
            {/*<Box display={"flex"} justifyContent={"center"}  flexWrap={"wrap"}>*/}
            <Box display={"block"}>
                <MainTextComponent/>
            </Box>
            {/*</Box>*/}
            <Box>
                <CartInfo/>
            </Box>
        </Box>
    );
};

export default HomePage;
