import {useState} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Tour = ({removeTour,id,image,info,name,price}) => {
  const [readMore,setReadMore] = useState(false);

  return (
    <article className='single-tour'>
      <LazyLoadImage
        alt={name}
        src={image} 
      />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0,200)}...`}
          <button onClick={()=> setReadMore((prev)=> !prev)}>{!readMore ? 'read more':'show less'}</button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>not interested</button>
      </footer>
    </article>
  )
}

export default Tour;
