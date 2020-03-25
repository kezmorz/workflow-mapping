import React, { useState, useEffect, useRef } from 'react';
import { LinkWidget, PointModel } from '@projectstorm/react-diagrams-core';
import ConnectionSegment from './ConnectionSegment';
import ConnectionPoint from './ConnectionPoint';

const Connection = (props) => {
	const [hover, setHover] = useState(false);
	const ref = useRef(null);
	const refPaths = [];
	const paths = [];

	useEffect(() => {
		props.link.setRenderedPaths(
			refPaths.map(ref => {
				return ref.current;
			})
		);
		return () => {
			props.link.setRenderedPaths([]);
		}
	});

	const generateLink = (path, extraProps, id) => {
		refPaths.push(ref);
		return (
			<ConnectionSegment
				key={`link-${id}`}
				path={path}
				hover={hover}
				diagramEngine={props.diagramEngine}
				factory={props.diagramEngine.getFactoryForLink(props.link)}
				link={props.link}
				forwardRef={ref}
				onHover={hover => {
					setHover(hover);
				}}
				extras={extraProps}
			/>
		);
	}

	const addPointToLink = (event, index) => {
		if (
			!event.shiftKey &&
			!props.link.isLocked() &&
			props.link.getPoints().length - 1 <= props.diagramEngine.getMaxNumberPointsPerLink()
		) {
			const point = new PointModel({
				link: props.link,
				position: props.diagramEngine.getRelativeMousePoint(event)
			});
			props.link.addPoint(point, index);
			event.persist();
			event.stopPropagation();
			props.diagramEngine.getActionEventBus().fireAction({event, model: point});
		}
	}

	const generatePoint = (point) => {
		return (
			<ConnectionPoint
				key={point.getID()}
				point={point}
				colorSelected={props.link.getOptions().selectedColor}
				color={props.link.getOptions().color}
			/>
		);
	}

	const points = props.link.getPoints();
	if (points.length === 2) {
		paths.push(
			generateLink(
				props.link.getSVGPath(), 
				{
					onMouseDown: event => {
						addPointToLink(event, 1);
					}
				},
				'0'
			)
		);

		if (props.link.getTargetPort() == null) {
			paths.push(generatePoint(points[1]));
		}
	} else {
		for (let point = 0; point < points.length - 1; point++) {
			paths.push(
				generateLink(
					LinkWidget.generateLinePath(points[point], points[point + 1]),
					{
						'data-linkid': props.link.getID(),
						'data-point': point,
						onMouseDown: (event) => {
							addPointToLink(event, point + 1);
						}
					},
					point
				)
			);
		}

		for (let point = 1; point < points.length - 1; point++) {
			paths.push(generatePoint(points[point]));
		}

		if (props.link.getTargetPort() == null) {
			paths.push(generatePoint(points[points.length - 1]));
		}
	}

	return (
		<g data-default-link-test={props.link.getOptions().testName}>
			{paths}
		</g>
	);
}

export default Connection;