import styled from '@emotion/styled';
import React from 'react';
import ModalWork from "./ModalWork";
import Navbar from "../ui/Navbar";
import {Box, Text} from "@chakra-ui/react";
import {mockEmployee} from "../../mock";
import {color4} from "../colors";

const EmployeeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`
const EmployeePage = () => {
    return (
        <Box  w={"100vw"} display={"flex"} flexDirection={"column"} alignItems={"center"} paddingBottom={"10%"}>
            <Navbar/>
            <EmployeeContainer>
                <ModalWork/>
                <Box mt="5px">
                    <Box  >
                        <Box display={"flex"} w={"65%"} justifyContent={"center"} flexWrap={"wrap"}>
                            {/*<Text lineHeight={"13px"}>{filii.name}</Text>*/}
                            {/*<Text>{filii.address}</Text>*/}
                            {/*/!*<a href="https://www.google.com/maps/place/Aleja Grunwaldzka+148"></a>*!/*/}
                            {
                                mockEmployee.map(mock =>
                                <Box m="5px" position={"relative"} w={"15rem"} h="100%" p="15px" bg={color4} borderRadius={"10px"}>
                                    <Text>{mock.firstName}</Text>
                                </Box>
                                )
                            }
                        </Box>

                        {/*<Box position={"relative"} w="100%" h={"100%"}>*/}
                        {/*    <Text>Liczba pracowników {filii.countEmployees}</Text>*/}
                        {/*    <Text>Licba dostępnych książek {filii.countBook}</Text>*/}
                        {/*</Box>*/}
                    </Box>
                </Box>
            </EmployeeContainer>
        </Box>
    );
};

export default EmployeePage;
