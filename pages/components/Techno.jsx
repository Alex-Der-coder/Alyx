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
    <section className="projectsSection max-[640px]:h-[338vh] " id="projects">
      <div className="sectionTitle mt-[2%] text-center bg-gradient-to-r from-yellow-300 to-red-700 bg-clip-text text-transparent">
        <h1>Mes Projets</h1>
      </div>
      <div className="projectList  flex justify-around flex-wrap p-[5%] ml-[-1%] mt-[5%] h-[85rem]">
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
          containerClassName={'pagination max-[640px]:hidden'}
          activeClassName={'active-pagination'}
        />
      </div>

    </section>
  );
};

export default Techno;
