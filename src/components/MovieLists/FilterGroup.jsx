import React from 'react'

const FilterGroup = ({ onRatingClick, minRating , ratings}) => {
  return (
    <ul className='movie_filter'>

    {
        ratings.map( rate =>  <li 
        key={rate}
        className={`movie_filter_item ${minRating === rate ? 'active' : ''}`} 
        onClick={() => onRatingClick(rate)}
      >
        {rate}+ Stars
      </li> )
    }
    
    </ul>
  )
}

export default FilterGroup
