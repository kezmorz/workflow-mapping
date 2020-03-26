import React from 'react';
import styled from '@emotion/styled';
import { DefaultDiagramState, DiagramEngine, LinkLayerFactory, NodeLayerFactory, DiagramModel } from '@projectstorm/react-diagrams-core';
import { PathFindingLinkFactory } from '@projectstorm/react-diagrams-routing';
import { SelectionBoxLayerFactory, CanvasEngineOptions, CanvasWidget } from '@projectstorm/react-canvas-core';
import CardFactory from '../../factories/CardFactory';
import CardModel from '../../models/CardModel';
import ConnectionFactory from '../../factories/ConnectionFactory';
import ConnectionModel from '../../models/ConnectionModel';
import ConnectorFactory from '../../factories/ConnectorFactory';

const StyledDiagram = styled.div`
    background: #DBDBDB;
    width: 100%;
    height: 100%;

    > * {
        width: 100%;
        height: 100%;
        min-height: 100%;
    }
`

const Diagram = (props) => {
    const engine = new DiagramEngine({});
    const model = new DiagramModel(); 

	engine.getLayerFactories().registerFactory(new NodeLayerFactory());
	engine.getLayerFactories().registerFactory(new LinkLayerFactory());
	engine.getLayerFactories().registerFactory(new SelectionBoxLayerFactory());
	//engine.getLabelFactories().registerFactory(new DefaultLabelFactory());
	engine.getNodeFactories().registerFactory(new CardFactory());
	engine.getLinkFactories().registerFactory(new ConnectionFactory());
	engine.getLinkFactories().registerFactory(new PathFindingLinkFactory());
	engine.getPortFactories().registerFactory(new ConnectorFactory());
	engine.getStateMachine().pushState(new DefaultDiagramState());

    const cardModels = props.cards.map(card => {
        const cardModel = new CardModel({
            name: card.name,
            content: card.content
        });
        cardModel.setPosition(card.xPos, card.yPos);
        cardModel.registerListener({
            selectionChanged: (e) => {
                if (e.isSelected) {
                    props.openSideDrawer(e.entity.getOptions().name);
                }
            }
        });
        return cardModel;
    });

    const connectionModels = props.connections.map(connection => {
        const connectionModel = new ConnectionModel();
        connectionModel.setSourcePort(cardModels.find(cardModel => {
            return cardModel.options.name === connection.source;
        }).getPort('connector'.concat('-', connection.sourceConnector)));
        connectionModel.setTargetPort(cardModels.find(cardModel => {
            return cardModel.options.name === connection.target;
        }).getPort('connector'.concat('-', connection.targetConnector)));
        return connectionModel;
    });

    model.addAll(...cardModels, ...connectionModels);
    engine.setModel(model);

    return (
        <StyledDiagram>
            <CanvasWidget engine={engine} />
        </StyledDiagram>
    )
}

export default Diagram;