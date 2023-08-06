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
                <h6>
                    Please choose a number that represents the interval where the search is going to take place (Default is 100):
                </h6><br />
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
                <h2>
                    Guess a number to be searched between 0 and {this.props.upper}
                </h2>
                <br />
                <button
                    className='btn btn-primary btn-lg'
                    onClick={this.props.startGame}
                >
                    Start the Game
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
                text: 'Please enter a valid value. The number should be greater than 0.',
                icon: 'warning',
                confirmButtonText: 'OK'
              });
            e.target.value = "";
        }else if(e.target.value != "" && num !== Math.floor(num)){
            Swal.fire({
                title: 'Warning!',
                text: 'Please enter a valid value. The two nearest valid values are '+Math.floor(num)+' and '+ (Math.floor(num)+1)+'.',
                icon: 'warning',
                confirmButtonText: 'OK'
              });
            e.target.value = "";
        }
    }
}

export default EntryPoint;