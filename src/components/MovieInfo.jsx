import React from 'react';
 
const MovieInfo = ({mvInfo}) => {
    console.log( 'MovieInfo', mvInfo)



   return (
       <div className="movie-rating">
            <h2>
                {mvInfo.name}
            </h2>
            <p>
                <img src={mvInfo.img} alt={mvInfo.name} />
            </p>
            <p>
                {mvInfo.rating}
            </p>
       </div>
   );
};
 
export default MovieInfo;