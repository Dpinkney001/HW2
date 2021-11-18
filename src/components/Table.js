//import { render } from '@testing-library/react';
import React from 'react';

const TableHeader = () => { 
    // boilerplate table header functional component
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Remove</th>
            </tr>
            
        </thead>
    );
}

const TableBody = (props) => { 
    // boilerplate table body functional component 
    // we use Array.map to create table rows from LinkData passed via props
    const rows = props.linkData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.Name}</td>
                <td><a href={row.URL}>{row.URL}</a></td>
                <td><button onClick={(favLink) => props.removeLink(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    {/* return <table> component, TableHeader and TableBody*/}
    
    const { linkData, removeLink } = props;
    return(
        <div>
           <TableHeader linkData={linkData}/>
           <TableBody linkData={linkData} removeLink={removeLink}/>         
        </div>
    )
}




export default Table;