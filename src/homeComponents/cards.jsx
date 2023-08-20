import React, {Component} from 'react';
import ImgMediaCard2 from "./card2";
import "./style.css";
import {getDetails} from "./cardDetails";
import TextField from "@material-ui/core/TextField";
import { colors } from '@material-ui/core';
class Cards extends Component {

    state = {
        cards:[],
        filter:""
    }

    componentDidMount() {
        this.setState({cards:getDetails()});
    }
    getData = (e)=>{
        console.log(e.target.value);
        this.setState({filter:e.target.value});
    }
    render() {
        return (
           <React.Fragment>
               <div className="d-flex justify-content-end Cards">
                   <TextField
                       id="filled-basic" label="Search"
                       onChange={this.getData}
                   />
               </div>
               <div className="d-flex flex-wrap justify-content-center Cards">
                   {
                       this.state.cards.filter((card) => card.title.toLowerCase().includes(this.state.filter.toLowerCase())||card.description.toLowerCase().includes(this.state.filter.toLowerCase())).map(card=>(
                           <div>
                               <ImgMediaCard2
                                   className="d-flex flex-wrap"
                                   key={card.id}
                                   card={card}/>
                           </div>
                       ))
                   }
               </div>
           </React.Fragment>
        );
    }
}

export default Cards;
/*
<div>
   <ImgMediaCard2
       className="d-flex flex-wrap"
       key={card.id}
       card={card}/>
</div>
 */