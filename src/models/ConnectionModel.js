import { PortModelAlignment, LinkModel } from '@projectstorm/react-diagrams-core';
import { BezierCurve } from '@projectstorm/geometry';

class ConnectionModel extends LinkModel {
    constructor(options = {}) {
        super({
            ...options,
            type: 'connection',
            width: 3,
            color: '#767676',
            selectedColor: '#1E75C3',
            curvyness: 70
        });
    }

    calculateControlOffset(port) {
        if (port.getOptions().alignment === PortModelAlignment.RIGHT) {
            return [this.options.curvyness, 0];
        } else if (port.getOptions().alignment === PortModelAlignment.LEFT) {
            return [-this.options.curvyness, 0];
        } else if (port.getOptions().alignment === PortModelAlignment.TOP) {
            return [0, -this.options.curvyness];
        }
        return [0, this.options.curvyness];
    }

    getSVGPath() {
        if (this.points.length === 2) {
            const curve = new BezierCurve();
            curve.setSource(this.getFirstPoint().getPosition());
            curve.setTarget(this.getLastPoint().getPosition());
            curve.setSourceControl(
                this.getFirstPoint()
                    .getPosition()
                    .clone()
            );
            curve.setTargetControl(
                this.getLastPoint()
                    .getPosition()
                    .clone()
            );

            if (this.sourcePort) {
                curve.getSourceControl().translate(...this.calculateControlOffset(this.getSourcePort()));
            }

            if (this.targetPort) {
                curve.getTargetControl().translate(...this.calculateControlOffset(this.getTargetPort()));
            }
            return curve.getSVGCurve();
        }
    }

    serialize() {
        return {
            ...super.serialize(),
            width: this.options.width,
            color: this.options.color,
            curvyness: this.options.curvyness,
            selectedColor: this.options.selectedColor
        };
    }

    deserialize(event) {
		super.deserialize(event);
		this.options.color = event.data.color;
		this.options.width = event.data.width;
		this.options.curvyness = event.data.curvyness;
		this.options.selectedColor = event.data.selectedColor;
	}
}

export default ConnectionModel;