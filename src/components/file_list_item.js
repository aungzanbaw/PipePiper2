import React from 'react';

const FileListItem = (props) => {
    return(
        <button className="list-group-item list-group-item-action" type="button" onClick={()=>{props.changeDataInput(props.data)}}>Records</button>
    );
}

export default FileListItem;