import React from 'react'
import { useParams} from 'react-router-dom';
import CardSm from '../../components/cards/CardSm';

const HomePage = ({data}) => {

  const {name} = useParams();

  const tema = data.find(i => i.name === name);

  console.log(tema);
  return (
    <div className='grid-lg'>
    {tema.guides.map((item, index) => (
      <a href={item.url} key={index.toString()}>
        <CardSm {...item}/>
      </a>
    ))}
  </div>
  )
}

export default HomePage;