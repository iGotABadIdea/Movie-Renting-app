import React from 'react';

const Input = ({name,type,label,value,onChange,error}) => {
    return ( 
         <div className="form-group mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input value={value} onChange={onChange} id={name} name={name} type={type} className="form-control"/>
            {error && <div className="alert alert-danger">{error}</div>}</div>
     );
}
 
export default Input;


