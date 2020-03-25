import React from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';

const KeyframeConnectionSegment = keyframes`
	from {
		stroke-dashoffset: 24;
	}
	to {
		stroke-dashoffset: 0;
	}
`

const SelectedConnectionSegment = css`
	stroke-dasharray: 10, 2;
	animation: ${KeyframeConnectionSegment} 1s linear infinite;
`

const StyledConnectionSegment = styled.path`
	${props => props.selected && SelectedConnectionSegment};
	fill: none;
	pointer-events: all
`


const connectionSegmentWidget = (props) => {
	return (
		<g>
			<StyledConnectionSegment
				ref={props.forwardRef}
				selected={props.hover || props.link.isSelected()}
				stroke={props.hover || props.link.isSelected() ? props.link.getOptions().selectedColor : props.link.getOptions().color}
				strokeWidth={props.link.getOptions().width}
				d={props.path}
			/>
			<StyledConnectionSegment
				ref={null}
				selected={props.hover || props.link.isSelected()}
				stroke={props.hover || props.link.isSelected() ? props.link.getOptions().selectedColor : props.link.getOptions().color}
				d={props.path}
				strokeLinecap={'round'}
				onMouseLeave={() => {props.onHover(false);}}
				onMouseEnter={() => {props.onHover(true);}}
				{...props.extras}
				data-linkid={props.link.getID()}
				strokeOpacity={props.hover ? 0.1 : 0}
				strokeWidth={20}
				fill={'none'}
				onContextMenu={() => {
					if (!props.link.isLocked()) {
						props.event.preventDefault();
						props.link.remove();
					}
				}}
			/>
		</g>
	);
}

export default connectionSegmentWidget;