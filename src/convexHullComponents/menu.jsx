import React, {Component} from 'react';
import DiscreteSlider from "./slider";
import Instruct from '../instructions/Instruct';
import instruct_gif from './convex_instruct.gif';
class Menu extends Component {
    constructor(){
        super()
        this.state={
            showModal:true
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
            <div style={{height:"100vh",alignItems:"center"}}>
            <Instruct show={this.state.showModal}>
                    <h3>How to use?</h3>
                <img className="card-img-top img-thumbnail" style={{marginBottom:"5px"}} src={instruct_gif} alt="Card image cap"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.hideModal}>Close</button>
                </Instruct>
            <nav className="nav alert-dark">
                <button className="btn btn-primary btn-lg m-2" onClick={this.props.onRefresh} disabled={this.props.isDisabled} style={this.isClickable()}>Refresh</button>
                <li className="nav-item">
                        <a className="nav-link" href="#" onClick={this.showModal}>Instructions <span className="sr-only" >(current)</span></a>
                </li>
                <button
                    onClick={this.showModal}
                    className='btn btn-danger btn-lg m-2'>Instructions</button>
                <DiscreteSlider
                    onChange={this.props.onChangeSpeed}
                    title="speed"
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
                    className="btn btn-warning btn-lg m-2"
                    onClick={this.props.onVisualize}
                    disabled={this.props.isDisabled}
                    style={this.isClickable()}
                >
                    Visualize Graham Scan
                </button>

            </nav>
            </div>
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