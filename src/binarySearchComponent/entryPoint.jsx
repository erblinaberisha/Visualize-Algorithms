import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Swal from 'sweetalert2';

class EntryPoint extends Component {
    state={
        error:false
    }
    render() {
        return (
            <div>
                <TextField
                    error={this.state.error}
                    id="standard-error-helper-text"
                    label="Upper Number"
                    type="number"
                    variant="outlined"
                    onChange={this.getData}
                    onBlur={this.handleBlur}
                    placeholder='Eg. 100'
                /> <br /><br />
                <h1>
                    Guess a number between 0 and {this.props.upper}
                </h1>
                <br />
                <button
                    className='btn btn-primary btn-lg'
                    onClick={this.props.startGame}
                >
                    Start the game
                </button>
            </div>
        );
    }
    getData = (e)=>{
        if( e.target.value!== "" && e.target.value >0){
            console.log(e.target.value);
            this.props.setUpper(e.target.value);
        }
        else{
            this.props.setUpper(100);
        }
    }

    handleBlur = (e) => {
        var num = Number(e.target.value);
        if(e.target.value != "" && e.target.value <= 0){
            Swal.fire({
                title: 'Warning!',
                text: 'Upper number should be greater than 0.',
                icon: 'warning',
                confirmButtonText: 'OK'
              });
            e.target.value = "";
        }else if(e.target.value != "" && num !== Math.floor(num)){
            Swal.fire({
                title: 'Warning!',
                text: 'Upper number should be an integer.',
                icon: 'warning',
                confirmButtonText: 'OK'
              });
            e.target.value = "";
        }
    }
}

export default EntryPoint;