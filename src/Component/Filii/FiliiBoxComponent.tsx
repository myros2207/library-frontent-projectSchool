import React from 'react';
import {Box, Image, Text} from "@chakra-ui/react";
import {color3, color4} from "../colors";

interface IFilii {
    address: string,
    name: string,
    countEmployees: number,
    countBook: number

}

const FiliiBoxComponent = (filii : IFilii) => {
    return (
        <Box mt="5px">
            <Box m="5px" position={"relative"} w={"15rem"} h="100%" p="15px" bg={color4} borderRadius={"10px"} >
                <Box>
                    <Text lineHeight={"13px"}>{filii.name}</Text>
                    <Text>{filii.address}</Text>
                    {/*<a href="https://www.google.com/maps/place/Aleja Grunwaldzka+148"></a>*/}
                </Box>
                <Box position={"relative"} w="100%" h={"100%"}>
                    <Text>Liczba pracowników {filii.countEmployees}</Text>
                    <Text>Licba dostępnych książek {filii.countBook}</Text>
                </Box>
            </Box>
        </Box>
    );
};

export default FiliiBoxComponent;
