import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import ContentDescription from './ContentDescription';
import ContentList from './ContentList';

const S = {
    Content: styled.div`
        overflow-y: auto;
    `
}

const content = (props) => {
    return (
        <S.Content>
            <ContentDescription heading={'Description'} description={props.description} colourScheme={props.colourScheme}/>
            <ContentList heading={'Prerequisite Steps'} items={props.prerequisite} colourScheme={props.colourScheme}/>
            <ContentList heading={'PCF Products'} items={props.pcf} colourScheme={props.colourScheme}/>
            <ContentList
                heading={'Hyperlinks'}
                items={props.hyperlinks.map(link => (
                    <a href={link}>{link}</a>
                ))}
                colourScheme={props.colourScheme}/>
        </S.Content>
    )
}

export default content;