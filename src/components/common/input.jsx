import React from 'react';

const Input = ({name,label,value,onchange}) => {
    return ( 
         <div className="form-group mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input value={value} onChange={onchange} id="name" name="name" type="text" className="form-control"/></div>
     );
}
 
export default Input;


