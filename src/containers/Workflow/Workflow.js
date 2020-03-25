import React, { Component, Fragment } from 'react';
import Diagram from '../../components/Diagram/Diagram';
import workflow from './workflow.json';

// this will contain the diagram and the sidebar that appears when clicking on a node
class Workflow extends Component {
    state = {
        cards: workflow.cards,
        connections: workflow.connections
    }

    render() {
        return (
            <Fragment>
                <Diagram cards={this.state.cards} connections={this.state.connections} />
                <div>The eventual sidebar</div>
            </Fragment>
        );
    }
}

export default Workflow;