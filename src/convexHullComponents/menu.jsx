import React, {Component} from 'react';
import DiscreteSlider from "./slider";
import Instruct from "../instructions/Instruct";
import instruct_gif from "./convex_instruct.gif";
import MyComponent from '../MyComponent';
class Menu extends Component {
    constructor(){
        super()
        this.state={
            showModal: true
        }
    }
    showModal = () => {
        this.setState({ 
                showModal: true
            });
      };
    
    hideModal = () => {
        this.setState({ showModal: false });
    };
    render() {
        return (
            <React.Fragment>
                <Instruct show={this.state.showModal}>
                    <h3>How to use?</h3>
                <img className="card-img-top img-thumbnail" style={{marginBottom:"5px"}} src={instruct_gif} alt="Card image cap"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.hideModal}>Close</button>
                </Instruct>
                <nav className="nav alert-light pl-2 pt-2 mb-2">
                    <button className="btn btn-success btn-lg m-2" onClick={this.props.onRefresh} disabled={this.props.isDisabled} style={this.isClickable()}>Refresh</button>
                    <DiscreteSlider
                        onChange={this.props.onChangeSpeed}
                        title="Speed"
                        marks={false}
                        default={10}
                        step={1}
                        min={10}
                        max={50}
                        isDisabled={false}
                    />
                    <DiscreteSlider
                        onChange={this.props.onChangeValues}
                        title="Total Number"
                        marks={false}
                        default={50}
                        step={1}
                        min={10}
                        max={200}
                        isDisabled={this.props.isDisabled}
                    />
                    <button
                        className="btn btn-primary btn-lg m-2"
                        onClick={this.props.onVisualize}
                        disabled={this.props.isDisabled}
                        style={this.isClickable()}
                    >
                        Visualize Graham Scan
                    </button>
                    <button
                        className="btn btn-primary btn-lg m-2"
                        onClick={this.showModal}
                        disabled={this.props.isDisabled}
                        style={this.isClickable()}
                    >
                        Instructions
                    </button>
                    <MyComponent></MyComponent>
                </nav>
            </React.Fragment>
        );
    }
    isClickable = () =>{
        if( this.props.isDisabled ){
            return {cursor: "not-allowed"};
        } else{
            return {};
        }
    }
}

export default Menu;