import React, {Component} from 'react';
import DiscreteSlider from "./slider";
import SimpleSelect from "./simpleSelect";
import SwitchLabels from "./formControlLabel";
import Instruct from "../instructions/Instruct";
import instruct_gif from "../sortComponents/instruct.gif";
import MyComponent from '../AlgorithmDescription/Sort';

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
                        <h3>How to use?</h3>
                        <img className="card-img-top img-thumbnail" style={{marginBottom:"5px"}} src={instruct_gif} alt="Card image cap"/>
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" onClick={this.hideModal}>Close</button>
                    </Instruct>
                </div>
                <nav className="nav alert-light pl-2 pt-2 mb-2">
                    <button
                        className='btn btn-success m-2'
                        onClick={this.props.onRandomize}
                        disabled={this.props.disable}
                        style={this.isClickable()}
                    >
                        Random
                    </button>

                    <DiscreteSlider
                        default={20}
                        min={10}
                        max={100}
                        step={10}
                        title="Numbers"
                        onCountChange={this.props.onCountChange}
                        disable={this.props.disable}
                    />
                    <DiscreteSlider
                        default={50}
                        min={10}
                        max={100}
                        step={1}
                        title="Speed"
                        onCountChange={this.props.onSpeedChange}
                        disable={false}
                    />
                    <SimpleSelect
                        pos={0}
                        onAlgoChanged={this.props.onAlgoChanged}
                    />
                    <SwitchLabels
                        disable={this.props.disable}
                        onDoubleChange={this.props.onDoubleChange}
                    />
                    <SimpleSelect
                        pos={1}
                        onAlgoChanged={this.props.onAlgoChanged}
                    />
                    <button
                        className='btn btn-primary btn-lg m-2'
                        onClick={this.props.onViusalize}
                        disabled={this.props.disable}
                        style={this.isClickable()}
                    >
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
        if( this.props.disable ){
            return {cursor: "not-allowed"};
        } else{
            return {};
        }
    }
}


export default Menu;