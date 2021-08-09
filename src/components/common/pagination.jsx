import React, { Component } from 'react'; 
import _ from 'lodash';
const Pagination = (props) => {
  const {itemsCount, pageSize,onPageChange,currentPage}=props;
  const pagesCount=itemsCount/pageSize;
  if(pagesCount<=1) return null;
  const pages=_.range(1,pagesCount+1);


    return ( <React.Fragment> 
                <nav aria-label="...">
  <ul className="pagination pagination-lg">
    {pages.map(page=>(
       <li key={page} className={page===currentPage?"page-item active":"page-item"} aria-current="page">
      <a className="page-link" onClick={()=>onPageChange(page)}>{page}</a>
    </li>))}
   
   
  </ul>
</nav>
            </React.Fragment> );
}
 
export default Pagination;



