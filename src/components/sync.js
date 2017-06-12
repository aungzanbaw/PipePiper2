import React, { Component } from 'react';

class Sync extends Component{
    constructor(props){
        super(props);
        this.state ={ isOnlineToggle: "btn btn-outline-primary mr-sm-2"};
        this.isOnline = this.isOnline.bind(this);
    }   

    isOnline(){
        let val = navigator.onLine ? "btn btn-outline-primary mr-sm-2" : "btn btn-outline-danger mr-sm-2 disabled"; 
        this.setState({isOnlineToggle: val});  
    }

    render(){
        return(
            <button className={this.state.isOnlineToggle} 
                type="button" 
                onClick={ this.isOnline } 
                onMouseEnter={ this.isOnline }>
                Sync
            </button>
        );
    }
}


export default Sync;