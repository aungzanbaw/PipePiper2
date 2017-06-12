import React, { Component } from 'react';
import TableCell from './table_cell';

const TableRow  = (props) => {     
    let result = props.row.map( cell => <TableCell data={cell} key={ cell.toString() }/>);    
    return(
        <tr>
            { result }
        </tr>
    );
}

export default TableRow;