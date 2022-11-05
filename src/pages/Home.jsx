import React from 'react'
import Card from '../components/Card'

const home = ({data}) => {
  
  return (
  <div className='grid-lg' style={{margin: '20px auto'}}>
    {data.map((item, index)=> (
      <Card key={index.toString()} {...item}/>
    ))}
  </div>
  )
}

export default home