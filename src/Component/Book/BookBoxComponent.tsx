import React from 'react';
import {Box} from "@chakra-ui/react";

interface iBook {
    title: string;
    author: string;
    ratings: number
}

const BookBoxComponent = (book: iBook) => {
    return (
        <Box>
            <Box bg={"red"} border={"1px solid"} >
                <h1>{book.title}</h1>
            </Box>
        </Box>
    );
};

export default BookBoxComponent;
