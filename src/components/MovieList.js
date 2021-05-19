import React, { useState } from 'react';
import Card from './Card' ;
import data from '../moviesData' ;
import AddModal from './AddModal'

const MovieList = () => {

const [movies , setMovies] = useState(data)

    return (

      <div>
      <AddModal/>
        <div style={{display:"flex" , justifyContent:"space-around" , flexWrap : "wrap" , marginTop:"150px"}}  >
            
    {  movies.map ((el,i) => (


    <Card key={i} movie={el} />



    ))





    }



</div>

        </div>
    )
}

export default MovieList
