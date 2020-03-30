import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const StyledConnector = styled.div`
    width: ${props => props.size};
	height: ${props => props.size};
	top: ${props => props.top};
	left: ${props => props.left};
    position: absolute;
    z-index: 10;
	background: #FFFFFF;
	border: 2px solid ${props => props.colourScheme.mask};
    border-radius: ${props => props.borderRadius};
    cursor: pointer;

    &:hover {
        background: ${props => props.colourScheme.accent};
    }
`

const Connector = (props) => {
	const ref = useRef(null);

	useEffect(() => {
		const listenerHandle = props.engine.registerListener({
			canvasReady: () => {
				props.port.updateCoords(props.engine.getPortCoords(props.port, ref.current));
			}
		});
		if (props.engine.getCanvas() || !props.port.reportedPosition) {
			props.port.updateCoords(props.engine.getPortCoords(props.port, ref.current));
		}
		return () => {
			listenerHandle && listenerHandle.deregister();
		}
	});

    return (
		<StyledConnector 
			className={'port'}
			data-nodeid={props.port.getNode().getID()}
			data-name={props.name}
			left={props.left}
			top={props.top}
			size={props.size}
			borderRadius={props.borderRadius}
			colourScheme={props.port.getNode().getOptions().colourScheme}
			>
        </StyledConnector>
    )
}

export default Connector;