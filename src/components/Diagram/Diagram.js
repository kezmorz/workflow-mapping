import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { DefaultDiagramState, DiagramEngine, LinkLayerFactory, NodeLayerFactory, DiagramModel } from '@projectstorm/react-diagrams-core';
import { PathFindingLinkFactory } from '@projectstorm/react-diagrams-routing';
import { SelectionBoxLayerFactory, CanvasEngineOptions, CanvasWidget } from '@projectstorm/react-canvas-core';
import CardFactory from '../../factories/CardFactory';
import CardModel from '../../models/CardModel';
import ConnectionFactory from '../../factories/ConnectionFactory';
import ConnectionModel from '../../models/ConnectionModel';
import ConnectorFactory from '../../factories/ConnectorFactory';
import Colours from '../../helpers/Colours';

const StyledDiagram = styled.div`
    background: #FAFAFA;
    width: 100%;
    height: 100%;

    > * {
        width: 100%;
        height: 100%;
        min-height: 100%;
    }
`

const Diagram = (props) => {
    const [engine] = useState(() => {
        const diagramEngine = new DiagramEngine();
        diagramEngine.getLayerFactories().registerFactory(new NodeLayerFactory());
        diagramEngine.getLayerFactories().registerFactory(new LinkLayerFactory());
        diagramEngine.getLayerFactories().registerFactory(new SelectionBoxLayerFactory());
        //diagramEngine.getLabelFactories().registerFactory(new DefaultLabelFactory());
        diagramEngine.getNodeFactories().registerFactory(new CardFactory());
        diagramEngine.getLinkFactories().registerFactory(new ConnectionFactory());
        diagramEngine.getLinkFactories().registerFactory(new PathFindingLinkFactory());
        diagramEngine.getPortFactories().registerFactory(new ConnectorFactory());
        diagramEngine.getStateMachine().pushState(new DefaultDiagramState());
        return diagramEngine;
    })
    const [model] = useState(() => {
        const diagramModel = new DiagramModel();
        return diagramModel;
    })
    engine.setModel(model);

    useEffect(() => {
        const cardModels = props.cards.map(card => {
            const cardModel = new CardModel({
                name: card.name,
                content: card.content,
                colourScheme: Colours[card.colourScheme],
                information: card.information
            });
            cardModel.setPosition(card.xPos, card.yPos);
            cardModel.registerListener({
                selectionChanged: (e) => {
                    if (e.isSelected) {
                        props.openSideDrawer(e.entity);
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
    });

    return (
        <StyledDiagram>
            <CanvasWidget engine={engine} />
        </StyledDiagram>
    )
}

export default React.memo(Diagram);