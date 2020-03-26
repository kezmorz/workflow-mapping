import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import NavigationBar from '../NavigationBar/NavigationBar';

const Main = styled.main`
    width: 100%;
    height: calc(100% - 56px);
    position: relative;
    margin-top: 56px;
`

const layout = (props) => (
    <Fragment>
        <NavigationBar />
        <Main>
            {props.children}
        </Main>
    </Fragment>
);

export default layout;