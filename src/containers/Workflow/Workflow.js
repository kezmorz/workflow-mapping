import React, { Component, Fragment } from 'react';
import Diagram from '../../components/Diagram/Diagram';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import workflow from './workflow.json';

class Workflow extends Component {
    state = {
        cards: workflow.cards,
        connections: workflow.connections,
        showSideDrawer: false,
        sideDrawerCard: null
    }

    sideDrawerOpenHandler = (card) => {
        this.setState({
            showSideDrawer: true,
            sideDrawerCard: card
        })
    }

    sideDrawerCloseHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    render() {
        return (
            <Fragment>
                <Diagram 
                    cards={this.state.cards} 
                    connections={this.state.connections}
                    openSideDrawer={this.sideDrawerOpenHandler} />
                <SideDrawer 
                    show={this.state.showSideDrawer} 
                    close={this.sideDrawerCloseHandler}
                    card={this.state.sideDrawerCard}/>
            </Fragment>
        );
    }
}

export default Workflow;