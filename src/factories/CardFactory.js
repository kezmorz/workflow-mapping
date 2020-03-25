import React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import CardModel from '../models/CardModel';
import Card from '../components/Diagram/Card/Card';

class CardFactory extends AbstractReactFactory {
    constructor() {
        super('card');
    }

    generateModel(event) {
        return new CardModel();
    }

    generateReactWidget(event) {
        return (
            <Card engine={this.engine} node={event.model} />
        );
    }
}

export default CardFactory;