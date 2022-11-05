import React from 'react'
import {useNavigate} from 'react-router-dom';

const Card = ({name, title, subtitle, url, src}) => {
  const navigate = useNavigate();
  return (
    <article className='card' onClick={() => navigate('tutorial/'+name)}>
        <div className='card__logo'>
            <img src={src.svg} alt="robot" className='card__img'/>
        </div>
        <div>
            <h5 className='card__title'>{title}</h5>
        </div>
    </article>
  )
}

export default Card