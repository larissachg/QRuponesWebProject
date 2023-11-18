import { plusIcon } from '../assets/images'
import { useState } from 'react'

export const Collapse = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className='questions__list'>
      <div className='questions__box' onClick={() => setExpanded(!expanded)}>
        <div className='questions__box-header'>
          <h3>{title}</h3>
          <img src={plusIcon} alt='more' className={expanded ? 'rotate' : ''} />
        </div>
        <div className={`questions__box-content ${expanded ? 'expanded' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  )
}
