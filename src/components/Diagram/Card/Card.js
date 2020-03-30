import React from 'react';
import styled from '@emotion/styled';
import Connector from '../Connector/Connector';

const StyledCard = styled.div`
    border: solid 2px ${props => props.selected ? props.colourScheme.accent : props.colourScheme.mask};
    border-radius: 5px;
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
    background-color: #FFFFFF;
`

const StyledCardHeader = styled.header`
    width: 100%;
    height: 20px;
    background-color: ${props => props.colourScheme.mask};
`;

const StyledCardContent = styled.p`
    margin: auto;
    padding: 0 10px;
    text-align: center;
`;

const card = (props) => {
    const connectors = [
        { 
            name: 'connector-left', 
            left: '-10px', top: 'calc(50% - 7px - 2px)', 
            size: '14px',
            borderRadius: '8px'
        },
        { 
            name: 'connector-top', 
            left: 'calc(50% - 7px - 2px)', top: '-10px', 
            size: '14px',
            borderRadius: '8px'
        },
        { 
            name: 'connector-right', 
            left: 'calc(100% - 7px - 2px)', top: 'calc(50% - 7px - 2px)', 
            size: '14px',
            borderRadius: '8px'
        },
        { 
            name: 'connector-bottom', 
            left: 'calc(50% - 7px - 2px)', top: 'calc(100% - 7px - 2px)', 
            size: '14px',
            borderRadius: '8px'
        }
    ]
    return (
        <StyledCard 
            className={'card'}
            data-card-node-name={props.node.getOptions().name}
            colourScheme={props.node.getOptions().colourScheme}
            selected={props.node.isSelected()}>
            {connectors.map(connector => {
                return (
                    <Connector 
                        key={connector.name}
                        engine={props.engine}
                        port={props.node.getPort(connector.name)}
                        {...connector}/>
                )
            })}
            <StyledCardHeader 
                colourScheme={props.node.getOptions().colourScheme}/>
            <StyledCardContent>{
                props.node.getOptions().content}
            </StyledCardContent>
        </StyledCard>
    );
}

export default card;