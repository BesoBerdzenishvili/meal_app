import React from 'react'
import './meal.css'

export default function Meal(props) {
  return (
    <div className='mealSection'>
        <h4 className='mealName'>{props.name}</h4>
        <div>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </div>
  )
}
