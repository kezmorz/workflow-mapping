import { PortModel } from '@projectstorm/react-diagrams-core';
import ConnectionModel from './ConnectionModel';

class ConnectorModel extends PortModel {
    constructor(alignment) {
        super({
            alignment: alignment,
            type: 'connector',
            name: 'connector'.concat('-', alignment)
        });
    }

    createLinkModel(factory) {
		const link = super.createLinkModel();
		if (!link && factory) {
			return factory.generateModel({});
		}
		return link || new ConnectionModel();
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

export default ConnectorModel;