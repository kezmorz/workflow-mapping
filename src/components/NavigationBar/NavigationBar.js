import React from 'react';
import styled from '@emotion/styled';

const NavigationHeader = styled.header`
    height: 56px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 500;
`;

const navigationBar = (props) => {
    return (
        <NavigationHeader>
            <p style={{color: "white"}}>Highways - Stage 3</p>
        </NavigationHeader>
    )
}

export default navigationBar;