import React, { Component } from 'react';
// child components
import Sync from './sync';
import FileProcessForm from './file_process_form';

class FileProcess extends Component{
    constructor(props){
        super(props); 
    }
    
    render(){
        return(
            <div className="row justify-content-md-center">
                <Sync />
                <FileProcessForm /> 
            </div> 
        );
    }
}

export default FileProcess;