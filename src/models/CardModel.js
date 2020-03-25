import { NodeModel, PortModelAlignment } from '@projectstorm/react-diagrams-core';
import ConnectorModel from './ConnectorModel';

class CardModel extends NodeModel {
    constructor(options = {}) {
		super({
			...options,
			type: 'card'
		});
		this.addPort(new ConnectorModel(PortModelAlignment.LEFT));
		this.addPort(new ConnectorModel(PortModelAlignment.TOP));
		this.addPort(new ConnectorModel(PortModelAlignment.RIGHT));
		this.addPort(new ConnectorModel(PortModelAlignment.BOTTOM));
	}

	serialize() {
		return {
			...super.serialize()
		};
	}

	deserialize(ob, engine) {
		super.deserialize(ob, engine);
	}
}

export default CardModel;