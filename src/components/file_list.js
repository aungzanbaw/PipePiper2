import React from 'react';
import FileListItem from './file_list_item';

const FileList = (props) => {
    const result = props.datas.map((data,i)=>{
        return(
            <FileListItem 
                changeDataInput={props.changeDatesInput}
                key={i} 
                data={data}/>
        );
    });

    return(
        <div className="list-group">
            { result }
        </div>
    );
}

export default FileList;