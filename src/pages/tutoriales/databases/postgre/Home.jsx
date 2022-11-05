import React from 'react'
import Card from '../../../../components/cards/CardSm'

const home = ({data}) => {
  
  return (
  <div className='grid-lg'>
    {data.guides.map((item, index)=> (
      <a href={item.url} key={index.toString()}>
          <Card {...item}/>
      </a>
    ))}
  </div>
  )
}

export default home