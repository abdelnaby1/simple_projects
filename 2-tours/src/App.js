import { useEffect, useState } from "react";
import Loader from "./Loader";
import Tours from "./Tours";
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading,setLoading] = useState(false);
  const [tours,setTours] = useState([]);

  const removeTour = (id) => {
    setTours((tours)=> {
      return tours.filter((tour)=> tour.id !== id)
    })
  }
  const fetchTours = async () =>{
    setLoading(true);
    try{
      const res = await fetch(url);
      const tours = await res.json();
      setLoading(false)
      setTours(tours);
    }catch(error){
      setLoading(false);
    }

  }
  useEffect(()=>{
    setLoading(false);
    fetchTours();
  },[]);

  if(loading){
    return (
      <main>
          <Loader loading={loading} />
      </main>
    )
    
  }
  if(tours.length === 0){
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={fetchTours}>Refresh</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours removeTour={removeTour} tours={tours} />
    </main>

  );
}

export default App;
