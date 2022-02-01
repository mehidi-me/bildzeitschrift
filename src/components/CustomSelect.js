import React, { useState } from 'react'

export default function CustomSelect(props) { 
  const [options, setOptions] = useState(props.options);
  return (
    <div className='custom_select'>
      <div className='btn'>
        <div className='name'>{props.name}</div>
        <span className='arrow fas fa-arrow-bottom'></span>
      </div>
      <div className='options'>
        {
          options.map((option, index) => {
            return(
              <div className='option' key={index}>{option.name}</div>
            )
          })
        }
      </div>
    </div>
  )
}
