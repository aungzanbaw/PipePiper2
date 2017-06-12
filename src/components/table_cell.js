import React, { Component } from 'react';

const TableCell  = (props) => {
    return(
        <th>
            { props.data }
        </th>
    );
}

export default TableCell;