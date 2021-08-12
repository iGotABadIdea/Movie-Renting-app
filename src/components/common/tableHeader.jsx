import React, { Component } from 'react';

//we have to pass column:array
//sortColumn:object column
//onSort:fucntion to this class 

class TableHeader extends Component {
    raiseSort=path=>{
         const sortColumn={...this.props.sortColumn};
       if(sortColumn.path===path)
       sortColumn.order=sortColumn.order==='asc'? 'desc': 'asc';
       else {
       sortColumn.path=path;
       sortColumn.order='asc';
       }
       this.props.onSort(sortColumn);
    };
  
    render() { 
        return ( <thead>
            <tr>
                {this.props.column.map(column=>(
                <th onClick={()=>this.raiseSort(column.path)}>{column.label}</th>
                ))}
            </tr>
        </thead>
                
            
         );
    }
}
 
export default TableHeader;