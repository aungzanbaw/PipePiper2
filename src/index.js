import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
// custom components
import Jumbo from './components/jumbo';
import FileProcess from './components/file_process';
import Sync from './components/sync';
import FileProcessForm from './components/file_process_form';
import FileList from './components/file_list';
import FileListItem from './components/file_list_item';
import Footer from './components/footer';
import TableRow from './components/table_row';

class Main extends Component { 
  constructor(props){
    super(props);
    this.state = {
      data: ["Data", "Test"],
      table: [{Data:"N/A", Test: 0},{Data:"N/A", Test: 0}] 
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onInputSaveClick = this.onInputSaveClick.bind(this);
    this.changeDatasInput = this.changeDatasInput.bind(this);
  }

  onInputChange(workbook){
    let XL_row_object, header; 
    workbook.SheetNames.forEach((sheetName)=>{
        XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        header = Object.keys(XL_row_object[0]);
    });    
    this.setState({ data: header });  
    this.setState({ table: XL_row_object }); 
  } 

  onInputSaveClick(){
    alert('Successful save the file!')  
    // let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
    // let db;
    // const request = window.indexedDB.open('pipePiper2',1);
    // request.onsuccess = function(event) { 
    //   db = request.result;
    //   var transaction = db.transaction(["toDoList"], "readwrite");
    //   var objectStore = transaction.objectStore("toDoList");
    //   console.log(db)      

      // var tx = db.transaction("myObjectStore", "readwrite");
      // var store = tx.objectStore("myObjectStore");
      // var index = store.index("NameIndex");
      // db.createObjectStore('data', this.state.data);
      // db.createObjectStore('table', this.state.table)
      // store.put({id: 12345, name: {first: "John", last: "Doe"}, age: 42});
      // store.put({id: 67890, name: {first: "Bob", last: "Smith"}, age: 35});
      
      // Query the data
      // var getJohn = store.get(12345);
      // var getBob = index.get(["Smith", "Bob"]);

      // getJohn.onsuccess = function() {
      //     console.log(getJohn.result.name.first);  // => "John"
      // };

      // getBob.onsuccess = function() {
      //     console.log(getBob.result.name.first);   // => "Bob"
      // };

      // tx.oncomplete = function() {
      //   db.close();
      //} // transaction close
    //} // onSuccess db connection 
  }

  datas = [
    "Student Record",
    "Weather Record",
    "Finance Record"
  ]

  changeDatasInput(){
    // this.setState = {
       
    // };
  }

  // { PureJSFun() } 46% faster than <PureJSFun /> 6% faster than Class Component
  render(){  
    return(
      <div className="container">
        { Jumbo() }
        <div className="row justify-content-md-center">
            <Sync />
            <FileProcessForm onExcelSelect={ this.onInputChange } onSaveClick={ this.onInputSaveClick }/> 
        </div>
        <hr/>
        <div className="row">
          <div className="col-lg-10">
            <table className="table table-bordered table-striped table-hover">
              <thead className="thead-inverse">
                <TableRow row={ this.state.data } /> 
              </thead>
              <tbody> 
                { 
                  this.state.table.map(function(datas,i){ 
                    datas = Object.values(datas); 
                    return <TableRow row={ datas } key={i} />;  
                  }) 
                }
              </tbody> 
            </table> 
          </div> 
          <div className="col-lg-2">
            <FileList changeData = {this.changeDatasInput} datas = {this.datas /*real data bind here*/}/>
          </div>    
        </div>
        { Footer() }
      </div>
    );
  }
}

ReactDOM.render(<Main/>, document.querySelector('#main'));