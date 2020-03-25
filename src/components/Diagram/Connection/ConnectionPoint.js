import React, { useState } from 'react';
import styled from '@emotion/styled';

const StyledConnectionPoint = styled.circle`
    pointer-events: all;
`

const ConnectionPoint = (props) => {
    const [hover, setHover] = useState(false);

    return (
        <g>
            <circle
                cx={props.point.getPosition().x}
                cy={props.point.getPosition().y}
                r={5}
                fill={hover || props.point.isSelected() ? props.colorSelected : props.color}
            />
            <StyledConnectionPoint
                className="point"
                onMouseLeave={() => {
                    setHover(false);
                }}
                onMouseEnter={() => {
                    setHover(true);
                }}
                data-id={props.point.getID()}
                data-linkid={props.point.getLink().getID()}
                cx={props.point.getPosition().x}
                cy={props.point.getPosition().y}
                r={15}
                opacity={0.0}
            />
        </g>
    );
}

export default ConnectionPoint;