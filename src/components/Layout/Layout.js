import React, { Fragment } from 'react';
import styled from '@emotion/styled';

const NavBarDiv = styled.div`
    height: 50px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
    display: flex;
    justify-content: space-between;
`

const MainDiv = styled.div`
    height: calc(100% - 50px);
    width: 100%;
`

const layout = (props) => (
    <Fragment>
        <NavBarDiv>
        </NavBarDiv>
        <MainDiv>
            {props.children}
        </MainDiv>
    </Fragment>
);

export default layout;