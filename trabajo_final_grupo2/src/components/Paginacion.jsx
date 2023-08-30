import React from "react";

function Paginacion({ datosPerPage, currentPage, setCurrentPage, totalDatos }) {
  const pageNumbers = [];
  console.log(Math.ceil(totalDatos / datosPerPage));

  for (let i = 1; i <= Math.ceil(totalDatos / datosPerPage); i++) {
    pageNumbers.push(i);
  }
  const onPreviousPage=()=>{
    setCurrentPage(currentPage-1)
  }
  const onNextPage=()=>{
    setCurrentPage(currentPage+1)
  }
  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <a className="pagination-previous" onClick={onPreviousPage}>Previous</a>
      <a className="pagination-next" onClick={onNextPage}>Next page</a>
      <ul className="pagination-list">
        {pageNumbers.map((noPage) => (
          <li key={noPage}>
            <a className="pagination-link" aria-label="Goto page 1">
              {noPage}
            </a>
          </li>
        ))}
        <li>
          <a
            className="pagination-link is-current"
            aria-label="Page 46"
            aria-current="page"
          >
            46
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Paginacion;
