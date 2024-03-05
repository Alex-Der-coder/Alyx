import React, { useState, useEffect } from 'react';
import Project from './Projet';
import ReactPaginate from 'react-paginate';

const Techno = ({ data }) => {

  const dataPerPage = 6; 
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    const paginationElement = document.querySelector('.pagination[role="navigation"]');

    if (paginationElement) {
      paginationElement.setAttribute('role', 'switch');
      paginationElement.setAttribute('aria-label', 'change paginate');
    }

    const sectionElement = document.getElementById('projects');
    if (sectionElement) {
    }
  }, []);

  const offset = currentPage * dataPerPage;
  const currentPageData = data ? data.slice(offset, offset + dataPerPage) : [];
  

  return (
    <section className="projectsSection" id="projects">
      <div className="sectionTitle">
        <h2>Mes Projets</h2>
      </div>
      <div className="projectList">
        {currentPageData.map((projectData) => (
          <Project key={projectData.id} proj={projectData} />
        ))}
        <ReactPaginate
          previousLabel={'Précédent'}
          nextLabel={'Suivant'}
          breakLabel={'...'}
          pageCount={Math.ceil((data && data.length) / dataPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active-pagination'}
        />
      </div>
    </section>
  );
};

export default Techno;
