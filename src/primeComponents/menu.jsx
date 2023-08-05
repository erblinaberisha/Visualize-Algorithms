import React, {Component} from 'react';
import DiscreteSlider from "./slider";
import SimpleSelect from "./simpleSelect";

class Menu extends Component {
    render() {
        return (
            <nav className="nav alert-light pl-2 pt-2 mb-2">
                <button className="btn btn-success btn-lg m-2" onClick={this.props.onRefresh} disabled={this.props.isDisabled} style={this.isClickable()}>Refresh</button>
                <SimpleSelect
                    pos={0}
                    onAlgoChanged={this.props.setAlgo}
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
                <DiscreteSlider
                    onChange={this.props.onChangeValues}
                    title="Total Number"
                    marks={false}
                    default={100}
                    step={1}
                    min={10}
                    max={500}
                    isDisabled={this.props.isDisabled}
                />
                <button className="btn btn-primary btn-lg m-2" onClick={this.props.onVisualize} disabled={this.props.isDisabled} style={this.isClickable()}>Visualize</button>


            </nav>
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