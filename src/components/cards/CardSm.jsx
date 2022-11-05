import React from 'react'
import {useNavigate} from 'react-router-dom';

const CardSM = ({title, subtitle, icon}) => {
  const navigate = useNavigate();
  return (
    <article className='cardsm'>
        <div className='cardsm__logo'>
            <img src={icon} alt="robot" className='card__img'/>
        </div>
        <div className='cardsm__text'>
            <h5 className='cardsm__title'>{title}</h5>
            <p className='cardsm__sub-title'>{subtitle}</p>
        </div>
    </article>
  )
}

export default CardSM