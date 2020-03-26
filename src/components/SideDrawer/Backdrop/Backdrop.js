import React from 'react';
import styled from '@emotion/styled';

const BackdropDiv = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 100;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

const backdrop = (props) => {
    return (
        props.show ? <BackdropDiv onClick={props.close}/> : null
    );
}

export default backdrop;