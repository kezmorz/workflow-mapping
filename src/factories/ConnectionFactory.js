import React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import ConnectionModel from '../models/ConnectionModel';
import Connection from '../components/Diagram/Connection/Connection';

class ConnectionFactory extends AbstractReactFactory {
    constructor() {
        super('connection');
    }

    generateModel(event) {
        return new ConnectionModel();
    }

    generateReactWidget(event) {
        return (
            <Connection link={event.model} diagramEngine={this.engine} />
        );
    }
}

export default ConnectionFactory;