import React, { Component } from 'react';

class FileProcessForm extends Component{
    constructor(props){
        super(props);
        this.state = {};
        this.fileProcess = this.fileProcess.bind(this);
        this.fileSave = this.fileSave.bind(this);
    }

    fileProcess(e){
        const file = e.target.files[0];
        let reader = new FileReader();
        let workbook;
        reader.onload = (e) =>{ 
            workbook = XLSX.read(e.target.result, {type: 'binary'}); 
            this.props.onExcelSelect(workbook);
        };
        reader.readAsBinaryString(file);  
    }

    fileSave(e){
        this.props.onSaveClick();
    }

    render(){
        return(
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="file" onChange={ this.fileProcess }/>    
                <button className="btn btn-outline-success" type="button" onClick={ this.fileSave }>Save</button> 
            </form>  
        );
    }
}

export default FileProcessForm;