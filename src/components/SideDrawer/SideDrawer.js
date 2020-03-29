import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Backdrop from './Backdrop/Backdrop';
import Content from './Content/Content';

const SideDrawerDiv = styled.div`
    position: absolute;
    width: 560px;
    max-width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    z-index: 200;
    display: flex;
    flex-direction: column;
    background-color: #DBDBDB;
    box-sizing: border-box;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-out;
`

const SideDrawerHeader = styled.header`
    width: 100%;
    min-height: 45px;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    background-color: ${props => props.colourScheme.mask};
    padding-right: 15px;

    > h3 {
        padding: 8px 0;
        margin: 0;
    }

    > span {
        display: inline-flex;
        margin: 0 15px;
        cursor: pointer;
    }
`

const sideDrawer = (props) => {
    const header = props.card && (
        <SideDrawerHeader colourScheme={props.card.getOptions().colourScheme}>
            <span><IoIosCloseCircleOutline size={'30px'} onClick={props.close}/></span>
            <h3>{props.card.getOptions().content}</h3>
        </SideDrawerHeader>
    );
    const content = props.card && (
        <Content 
            {...props.card.getOptions().information} 
            colourScheme={props.card.getOptions().colourScheme}/>
    );

    return (
        <Fragment>
            <Backdrop show={props.show} close={props.close} />
            <SideDrawerDiv show={props.show}>
                {header}
                {content}
            </SideDrawerDiv>
        </Fragment>
    )
}

export default sideDrawer;