 import React, { Component } from 'react';
const ListGroup = (props) => {
    const {items,textProperty,valueProperty} = props;
    
    return ( <div class="list-group">
        
  {items.map(item=> <li key={item[valueProperty]}  class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" aria-current="true">
    {item[textProperty]}                     
    <span class="badge bg-primary rounded-pill align">14</span>
  </li>)}
</div> );
}
 
export default ListGroup;






