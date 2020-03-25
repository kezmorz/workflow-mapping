import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const StyledConnector = styled.div`
    width: ${props => props.size};
	height: ${props => props.size};
	top: ${props => props.top};
	left: ${props => props.left};
    position: absolute;
    z-index: 10;
	background: white;
	border: 2px solid #ADE5F7;
    border-radius: ${props => props.borderRadius};
    cursor: pointer;

    &:hover {
        background: #1E75C3;
    }
`

const Connector = (props) => {
	const ref = useRef(null);

	useEffect(() => {
		const listenerHandle = props.engine.registerListener({
			canvasReady: () => {
				console.log("Canvas ready 1");
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

	// componentDidUpdate(prevProps: Readonly<PortProps>, prevState, snapshot?: any): void {
	// 	if (!this.props.port.reportedPosition) {
	// 		this.report();
	// 	}
	// }

    return (
		<StyledConnector 
			className={'port'}
			data-nodeid={props.port.getNode().getID()}
			data-name={props.name}
			left={props.left}
			top={props.top}
			size={props.size}
			borderRadius={props.borderRadius}
			>
        </StyledConnector>
    )
}

export default Connector;