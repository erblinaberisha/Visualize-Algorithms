import React, {Component} from 'react';
import DiscreteSlider from "./slider";
import SimpleSelect from "./simpleSelect";
import Instruct from "../instructions/Instruct";
import instruct_gif from "../primeComponents/instruct.gif";
import MyComponent from '../AlgorithmDescription/Prime';

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
                <div className='text-center'>
                    <Instruct show={this.state.showModal}>
                        <h5>Please refer to the following video to learn how to use the app:</h5>
                        <img className="card-img-top img-thumbnail" style={{marginBottom:"5px"}} src={instruct_gif} alt="Card image cap"/>
                        <h6 style={{display: 'inline', marginLeft: 0, float: 'left', marginTop: 12, color: "#505050", fontSize: "13px"}}>Click the button Close to visualize algorithms on your own.</h6>
                        <button className="btn btn-primary my-sm-0" style={{float: 'right'}} type="submit" onClick={this.hideModal}>Close</button>
                    </Instruct>
                </div>
                <nav className="nav alert-light pl-2 pt-2 mb-2">
                    <button className="btn btn-success btn-lg m-2" onClick={this.props.onRefresh} disabled={this.props.isDisabled} style={this.isClickable()}>Refresh</button>
                    <SimpleSelect
                        pos={0}
                        onAlgoChanged={this.props.setAlgo}
                    />
                    <DiscreteSlider
                        onChange={this.props.onChangeValues}
                        title="Numbers"
                        marks={false}
                        default={100}
                        step={1}
                        min={10}
                        max={500}
                        isDisabled={this.props.isDisabled}
                    />
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
                    <button className="btn btn-primary btn-lg m-2" 
                        onClick={this.props.onVisualize} 
                        disabled={this.props.isDisabled} 
                        style={this.isClickable()}>
                            Visualize
                    </button>
                    <button
                        className="btn btn-warning m-2"
                        onClick={this.showModal}
                        disabled={this.props.disable}
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