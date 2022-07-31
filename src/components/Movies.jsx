import React from 'react';
import MovieInfo from './MovieInfo';
 
 
const Movies = ({movies}) => {
    console.log( 'Movies', movies );

   return (
       <div className="movie-rating">
           {movies.map(info => {
               //console.log(movies);
               return (
                   <MovieInfo key={info.id} mvInfo={info} />
               )
            })}
       </div>
   );
};
 
export default Movies;