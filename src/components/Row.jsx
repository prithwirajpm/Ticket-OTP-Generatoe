import React, { useEffect, useState } from 'react';
import tmdAxiosIns from '../tmdbAxiosIns';
import './Row.css';

function Row({fetchUrl, isPoster }) {
  const [allMovies, setAllMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchData = async () => {
    try {
      const { data } = await tmdAxiosIns.get(fetchUrl);
      setAllMovies(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <div className="movies-row row row-cols-1 row-cols-md-4">
        {allMovies?.map((item) => (
          <div key={item.id} className="col mb-4">
            <div className="card shadow" style={{width:'250px'}}>
              <img
                src={`${base_url}/${isPoster ? item.poster_path : item.backdrop_path}`}
                alt="no Image"
                className={`card-img-top movie ${isPoster && "movie-poster"}`}
              />
              <button className='bg-primary text-light border-0 pt-2 pb-2'>BOOK NOW</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
