import React from 'react';
import Tour from './Tour' 
const Tours = ({tours,removeTour}) => {
  return (
    <section>
      <div className='title'>
        <h2>Ours Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {
          tours.map((tour)=>(
            <Tour removeTour={removeTour} key={tour.id} {...tour}/>
          ))}
      </div>
    </section>
  )
};
export default Tours;
