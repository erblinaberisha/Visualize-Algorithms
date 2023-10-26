import React, {Component} from 'react';
import SimpleSelect from "./simpleSelect";
import SimpleSelectMaze from "./simpleSelectMaze";
import Instruct from "../instructions/Instruct";
import instruct_gif from "../pathfinderComponents/instruct.gif";
import MyComponent from '../AlgorithmDescription/Pathfinder';
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
                <nav className="nav alert-light pl-2 pt-2">
                    <SimpleSelect
                        onAlgoChanged = {this.props.onAlgoChanged}
                        items={this.props.algorithms}
                    />
                    <SimpleSelectMaze
                        onAlgoChanged={this.props.onMazeChanged}
                        items={this.props.mazes}
                    />
                    <button
                        disabled={this.props.disable}
                        style={this.isClickable()}
                        className='btn btn-lg btn-success m-2'
                        onClick={this.props.onCreateMaze}>
                        Create Maze
                    </button>
                    <button
                        className="btn btn-primary btn-lg m-2"
                        onClick={this.props.onVisualize}
                        disabled={this.props.disable}
                        style={this.isClickable()}
                    >Visualize</button>
                    <button
                        disabled={this.props.disable}
                        style={this.isClickable()}
                        onClick={this.props.onClearPath}
                        className='btn btn-outline-danger btn-lg m-2'>Clear Path</button>
                    <button
                        disabled={this.props.disable}
                        style={this.isClickable()}
                        onClick={this.props.onClearBoard}
                        className='btn btn-outline-danger btn-lg m-2'>Clear Board</button>
                    <button
                        className="btn btn-warning m-2"
                        onClick={this.showModal}
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