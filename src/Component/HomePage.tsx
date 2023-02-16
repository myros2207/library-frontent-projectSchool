import {Box} from '@chakra-ui/react';
import React from 'react';
import Navbar from "./ui/Navbar";
import {color1} from "./colors";

const HomePage = () => {
    return (
        <Box minH={"100vh"} >
            <Navbar/>
        </Box>
    );
};

export default HomePage;
