import React, { Component } from 'react'; 
const Pagination = () => {
    return ( <React.Fragment>
                <nav aria-label="...">
  <ul className="pagination pagination-lg">
    <li className="page-item active" aria-current="page">
      <span className="page-link">1</span>
    </li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
  </ul>
</nav>
            </React.Fragment> );
}
 
export default Pagination;



