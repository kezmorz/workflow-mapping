import { AbstractModelFactory } from '@projectstorm/react-canvas-core';
import ConnectorModel from '../models/ConnectorModel';

class ConnectorFactory extends AbstractModelFactory {
    constructor() {
        super('connector');
    }

    generateModel() {
        return new ConnectorModel();
    }
}

export default ConnectorFactory;