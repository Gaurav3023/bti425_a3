/*********************************************************************************
*  BTI425 – Assignment 3
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Gaurav Saini     Student ID: 113460190     Date: Friday, February 16, 2024
*
*
********************************************************************************/ 

import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { Pagination, Accordion } from 'react-bootstrap';
import MovieDetails from '@/components/MovieDetails';
import PageHeader from '@/components/PageHeader';

const Home = () => {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  const { data, error } = useSWR(`https://faithful-calf-pants.cyclic.app/api/movies?page=${page}&perPage=10`);

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  const previous = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const next = () => {
    setPage(page + 1);
  };

  return (
    <>
      <PageHeader text="Film Collection : Sorted by Date" />
      <Accordion>
        {pageData.map(movie => (
          <Accordion.Item eventKey={movie._id} key={movie._id}>
            <Accordion.Header>
              <b>{movie.title}</b> ({movie.year}) - {movie.directors.join(', ')}
            </Accordion.Header>
            <Accordion.Body>
              <MovieDetails movie={movie} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </>
  );
};

export default Home;
