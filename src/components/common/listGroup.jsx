 import React, { Component } from 'react';
const ListGroup = (props) => {
    const {items,textProperty,valueProperty,onItemSelect} = props;
    
    return ( <div className="list-group">
        
  {items.map(item=> <li onClick={()=>onItemSelect(item)} key={item[valueProperty]}  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" aria-current="true">
    {item[textProperty]}                     
    <span className="badge bg-primary rounded-pill align">14</span>
  </li>)}
</div> );
}
 
ListGroup.defaultProps={
  textProperty:"name",
  valueProperty:"_id"
}
export default ListGroup;






 