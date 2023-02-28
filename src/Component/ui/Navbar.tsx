import React from 'react';
import {Box, Flex, ListItem, UnorderedList} from "@chakra-ui/react";
import {color2} from "../colors";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <Box  h={"100%"} bg={"#1F8A70"}>
            <UnorderedList p={"13px"} listStyleType={"none"} float={"right"} mr={"10px"}>
                <Flex textAlign={"center"}>
                    <ListItem color={"teal.50"} ><Link to={"/"}>Home</Link></ListItem>
                    <ListItem color={"teal.50"} ml={"5px"}><Link to={"/listBook"}>Lista książ</Link></ListItem>
                    <ListItem color={"teal.50"} ml={"10px"}><Link to={"/listBranch"}>Lista filii</Link></ListItem>
                </Flex>
            </UnorderedList>
        </Box>
    );
};

export default Navbar;
