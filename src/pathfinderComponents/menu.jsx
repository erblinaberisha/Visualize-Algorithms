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
                        <h3>How to use?</h3>
                        <img className="card-img-top img-thumbnail" style={{marginBottom:"5px"}} src={instruct_gif} alt="Card image cap"/>
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" onClick={this.hideModal}>Close</button>
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
                        className='btn btn-lg btn-success m-2'
                        onClick={this.props.onCreateMaze}>
                        Create Maze
                    </button>
                    <button
                        onClick={this.props.onVisualize}
                        className="btn btn-primary btn-lg m-2"
                    >Visualize</button>
                    <button
                        onClick={this.props.onClearPath}
                        className='btn btn-outline-danger btn-lg m-2'>Clear Path</button>
                    <button
                        onClick={this.props.onClearBoard}
                        className='btn btn-outline-danger btn-lg m-2'>Clear Board</button>
                        <button
                        className="btn btn-warning m-2"
                        onClick={this.showModal}
                        disabled={this.props.isDisabled}
                    >
                        Instructions
                    </button>
                    <MyComponent></MyComponent>
                </nav>
            </React.Fragment>
        );
    }
}

export default Menu;