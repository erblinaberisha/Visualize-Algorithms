import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Swal from 'sweetalert2';

class EntryPoint extends Component {
    constructor() {
        super();
        this.buttonRef = React.createRef();
    }

    state={
        error:false
    }
    render() {
        return (
            <div>
                <h6>
                    Please choose the upper limit for the search range (Default is 100):
                </h6><br />
                <TextField
                    autoFocus
                    error={this.state.error}
                    id="standard-error-helper-text"
                    label="Upper Number"
                    type="number"
                    variant="outlined"
                    onChange={this.getData}
                    onKeyDown={this.handleKeyDown}
                    placeholder='Eg. 100'
                /> <br /><br />
                <h3>
                    Guess a number to search between 0 and {this.props.upper}!
                </h3>
                <br />
                <button
                    ref={this.buttonRef}
                    className='btn btn-primary btn-lg'
                    onClick={this.props.startGame}
                >
                    Start the Game
                </button>
            </div>
        );
    }
    getData = (e)=>{
        this.handleBlur(e);
        if( e.target.value!== "" && e.target.value >0){
            console.log(e.target.value);
            this.props.setUpper(e.target.value);
        }
        else{
            this.props.setUpper(100);
        }
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.buttonRef.current.click();
        }
    }

    handleBlur = (e) => {
        var num = Number(e.target.value);
        if(e.target.value != "" && e.target.value <= 0){
            Swal.fire({
                title: 'Warning!',
                text: 'Please enter a valid value. The number should be greater than 0.',
                icon: 'warning',
                confirmButtonText: 'OK'
              });
            e.target.value = "";
        }else if(e.target.value != "" && num !== Math.floor(num)){
            Swal.fire({
                title: 'Warning!',
                text: 'Please enter a valid value. The number should be an integer.',
                icon: 'warning',
                confirmButtonText: 'OK'
              });
            e.target.value = "";
        }
    }
}
//'Please enter a valid value. The two nearest valid values are '+Math.floor(num)+' and '+ (Math.floor(num)+1)+'.'
export default EntryPoint;