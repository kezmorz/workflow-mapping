import React from 'react'
import styled from '@emotion/styled';

const StyledSection = styled.div`
    box-sizing: border-box;
    padding: 10px;
`;

const StyledDiv = styled.div`
    background-color: white;
    box-sizing: border-box;
    border: 1px solid black;
`

const section = (props) => {
    return (
        <StyledSection>
            <h3>{props.heading}</h3>
            <StyledDiv>
                {props.children}
            </StyledDiv>
        </StyledSection>
    )
}

export default section;