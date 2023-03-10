import React from 'react';
import BookBoxComponent from "./BookBoxComponent";
import { mockBook } from "../../mock";
import Navbar from "../ui/Navbar";
import { Box } from "@chakra-ui/react";

const BookComponent = () => {
    return (
        <Box minH={"100vh"} display={"flex"} flexDirection={"column"} alignItems={"center"} paddingBottom={"10%"}>
            <Navbar />
            <Box display={"flex"} w={"65%"} justifyContent={"center"}  flexWrap={"wrap"}>
                {
                    mockBook.map(mock =>
                        <BookBoxComponent title={mock.title} author={mock.author} ratings={mock.ratings} image={mock.image}  branchLibraryId={mock.branchLibraryId}/>
                    )
                }
            </Box>
        </Box>
    );
};

export default BookComponent;
