import React from 'react';
import { Box, Image, Text } from "@chakra-ui/react";
import { color4, color3 } from '../colors';

interface iBook {
    title: string;
    author: string;
    image: string;
    ratings: number
}

const normalPepople = require("../../ImageBook/NormalPeople.jpg")

const BookBoxComponent = (book: iBook) => {
    return (
        <Box mt="5px">
            <Box m="5px" position={"relative"} w={"15rem"} h="100%" p="15px" bg={color4} borderRadius={"10px"} >
                <Box>
                    <Text lineHeight={"13px"}>{book.title}</Text>
                    <Text>{book.author}</Text>
                </Box>
                <Box position={"relative"} w="100%" h={"100%"}>
                    {/* <img  src={book.image} alt="" /> */}
                    <Image h={"90%"} src={book.image} />
                    <Box p={"10px"} bg={color3} borderRadius={"50px"} top="10px" right={"5px"}  position={"absolute"} >{book.ratings}</Box>
                </Box>
            </Box>
        </Box>
    );
};

export default BookBoxComponent;
