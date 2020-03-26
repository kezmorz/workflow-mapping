import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import Backdrop from './Backdrop/Backdrop';
import Content from './Content/Content';

const SideDrawerDiv = styled.div`
    position: absolute;
    width: 560px;
    max-width: 70%;
    height: 100%;
    right: 0;
    top: 0;
    z-index: 200;
    background-color: #DBDBDB;
    box-sizing: border-box;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-out;
`

const SideDrawerHeader = styled.header`
    width: 100%;
    height: 40px;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    background-color: ${props => props.colourScheme.mask};
    padding: 0 10px;
`

const sideDrawer = (props) => {

    const header = props.card && (
        <SideDrawerHeader colourScheme={props.card.getOptions().colourScheme}>
            <button onClick={props.close}>close</button>
            <h3>{props.card.getOptions().content}</h3>
        </SideDrawerHeader>
    );
    const information = props.card && (
        <Content information={props.card.getOptions().information} />
    );

    return (
        <Fragment>
            <Backdrop show={props.show} close={props.close} />
            <SideDrawerDiv show={props.show}>
                {header}
                {information}
            </SideDrawerDiv>
        </Fragment>
    )
}

export default sideDrawer;