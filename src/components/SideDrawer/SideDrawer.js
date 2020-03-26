import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import Backdrop from './Backdrop/Backdrop';

const SideDrawerDiv = styled.div`
    position: absolute;
    width: 560px;
    max-width: 70%;
    height: 100%;
    right: 0;
    top: 0;
    z-index: 200;
    background-color: white;
    box-sizing: border-box;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-out;
`

const SideDrawerHeader = styled.header`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    background-color: #ADE5F7;
    padding: 0 10px;
`

const sideDrawer = (props) => {
    return (
        <Fragment>
            <Backdrop show={props.show} close={props.close} />
            <SideDrawerDiv show={props.show}>
                <SideDrawerHeader>
                    <button onClick={props.close}>Close</button>
                </SideDrawerHeader>
            </SideDrawerDiv>
        </Fragment>
    )
}

export default sideDrawer;