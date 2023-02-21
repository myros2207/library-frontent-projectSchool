import React from 'react';
import { Box, Image, Text } from "@chakra-ui/react";

interface iBook {
    title: string;
    author: string;
    image: string; 
    ratings: number
}

const normalPepople = require("../../ImageBook/NormalPeople.jpg")

const BookBoxComponent = (book: iBook) => {
    return (
        <Box>
            <Box m="10px" position={"relative"} w={"15rem"} h="100%" p="15px" bg={"red"} border={"1px solid"} >
                <Box>
                    <Text h="10%">{book.title}</Text>
                    <Text>{book.author}</Text>
                </Box>
                <Box position={"relative"} w="100%" h={"100%"}>
                    {/* <img  src={book.image} alt="" /> */}
                    <Image h={"90%"} src={book.image} />
                    <Box p={"10px"} bg="blue.100" borderRadius={"50px"} top="10px" right={"5px"}  position={"absolute"} >{book.ratings}</Box>
                </Box>
            </Box>
        </Box>
    );
};

export default BookBoxComponent;
