import React from 'react';
import {mockFilia} from "../../mock";
import Navbar from "../ui/Navbar";
import {Box} from "@chakra-ui/react";
import FiliiBoxComponent from "./FiliiBoxComponent";

const FiliiComponent = () => {
    return (
        <Box minH={"100vh"} display={"flex"} flexDirection={"column"} alignItems={"center"} paddingBottom={"10%"}>
            <Navbar/>
            <Box display={"flex"} w={"65%"} justifyContent={"center"} flexWrap={"wrap"}>
                {
                    mockFilia.map(mock =>
                        <FiliiBoxComponent address={mock.address} name={mock.name} countEmployees={mock.countEmployees}
                                           countBook={mock.countBook}/>)
                }
            </Box>
        </Box>
    );
};

export default FiliiComponent;