import React from 'react';
import styled from '@emotion/styled';

const S = {
    ContentDescription: styled.div`
        padding: 15px;
        padding-top: 30px;
    `,
    Header: styled.h3`
        padding: 8px 10px;
        margin: 0;
        background-color: ${props => props.colourScheme.mask};
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        box-shadow: 0 0 5px 0 black;
    `,
    Description: styled.p`
        padding: 14px 10px;
        margin: 0;
        min-height: 50px;
        background-color: white;
        box-shadow: 0 0 5px 0 black;
    `
}

const contentDescription = (props) => {
    return (
        <S.ContentDescription>
            <S.Header colourScheme={props.colourScheme}>{props.heading}</S.Header>
            <S.Description>{props.description}</S.Description>
        </S.ContentDescription>
    )
}

export default contentDescription;