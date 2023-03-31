import styled from '@emotion/styled';
import React, {useState} from 'react';
import {keyframes} from "@emotion/react";
import {Button, Image, Input, Text} from "@chakra-ui/react";
import {mockEmployee} from "../../mock";


const ModalContainer = styled.div<{display:string}>`
//transform
//  width: 100%;
  display: ${props => props.display};
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid;
  justify-content: center;
  align-items: center;
  animation-name: appearance;
  animation-duration: 1.2s;
  animation-fill-mode: forwards;
  @keyframes appearance {
    from {
      bottom: 0
    }
    to {
      bottom: 50%
    }
  }
`

const ModalContent = styled.div`
  position: relative;
  top: 0;
`
const ModalWork = () => {
    const [isVisible, setIsVisible ] = useState(true)
    const [secondName, setSecondName] = useState("")
    const [firstName, setFirstName] = useState("")
    const closeImage = require("../IconImage/close.png")
        // if  (localStorage.getItem("isSend") === "true"){
        //     console.log("nie")
        //     setIsVisible(false)
        // }
        // else {
        //     console.log("poka")
        //     setIsVisible(true)
        // }

    const ChangeSecondName = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setSecondName(e.target.value)
    }
    const ChangeFirstName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value)
    }

    const AddEmployee = () => {
        mockEmployee.push(
            {
                secondName: secondName,
                firstName: firstName
            }

        )
        console.log(mockEmployee)
    }

    return (
        <ModalContainer display={isVisible ? "flex" : "none"}>
            <ModalContent>
                <Button p={"0"} position={"absolute"} right={" 0"} top={"0px"} w={"1rem"} bg="none" onClick={() => setIsVisible(false) }><Image w={"100%"} src={closeImage}/></Button>
                <Text>Dolącz do naszego zespołu!</Text>

                <Input placeholder={"Imie"} value={firstName} onChange={ChangeFirstName} />
                {/*<Input placeholder={"Nazwisko"} value={firstName} onChange={ChangeSecondName} />*/}
                <Button onClick={AddEmployee}>Send</Button>
            </ModalContent>
        </ModalContainer>
    );
};

export default ModalWork;
