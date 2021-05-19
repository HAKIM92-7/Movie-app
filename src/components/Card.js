import React from 'react'

const Card = ({movie}) => {
    return (
        <div>
            <div class="card" style={{width: "18rem" , height:"650px"}}>
  <img src={movie.image} class="card-img-top" alt="..." style={{height:"350px"}}/>
  <div class="card-body">
    <h5 class="card-title">{movie.name} ({movie.year})</h5>
    <p class="card-text">{movie.story}</p>
    <div>
{
    [1,2,3,4,5].map( el => (
    
    el<=movie.rating ?

    <i key={el} class="fas fa-star" style={{color:"yellow"}}></i> : <i  key={el} class="fas fa-star"></i>  ) )

    }
    </div> <br/>  <br/>

    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
    )
}

export default Card
