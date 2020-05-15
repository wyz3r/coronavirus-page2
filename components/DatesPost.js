import React from 'react'

const DatesPost = ({fecha}) => {
  return (
    <div className='date'>
        <div className='numbers'>{fecha.day}</div>
        <div className='linea' />
        <div className='numbers'>{fecha.month}</div>
        <div className='linea' /> 
        <div className='numbers'>{fecha.year}</div>
    </div>
  )
}

export default DatesPost
