import React, { Component, Fragment } from 'react';
import Diagram from '../../components/Diagram/Diagram';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import workflow from './workflow.json';

class Workflow extends Component {
    state = {
        cards: workflow.cards,
        connections: workflow.connections,
        showSideDrawer: false
    }

    sideDrawerOpenHandler = (card) => {
        this.setState({
            showSideDrawer: true
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
                    close={this.sideDrawerCloseHandler}/>
            </Fragment>
        );
    }
}

export default Workflow;