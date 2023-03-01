import styled from '@emotion/styled';
import React from 'react';
import ModalWork from "./ModalWork";
import Navbar from "../ui/Navbar";
const EmployeeContainer = styled.div`
position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`
const EmployeePage = () => {
    return (
        <>
            <Navbar/>
        <EmployeeContainer>

            <ModalWork/>
        </EmployeeContainer>
            </>
    );
};

export default EmployeePage;
