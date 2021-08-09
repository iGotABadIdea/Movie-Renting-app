import React, { Component } from 'react'; 
import _ from 'lodash';
const Pagination = (props) => {
  const {itemsCount, pageSize}=props;
  const pagesCount=itemsCount/pageSize;
  if(pagesCount<=1) return null;
  const pages=_.range(1,pagesCount+1);


    return ( <React.Fragment>
                <nav aria-label="...">
  <ul className="pagination pagination-lg">
    {pages.map(page=>( <li key={page} className="page-item" aria-current="page">
      <span className="page-link">{page}</span>
    </li>))}
   
   
  </ul>
</nav>
            </React.Fragment> );
}
 
export default Pagination;



