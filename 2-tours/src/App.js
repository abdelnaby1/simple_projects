import { useEffect, useState } from "react";
import Loader from "./Loader";
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading,setLoading] = useState(false);
  const [tours,setTours] = useState([]);

  const fetchTours = async () =>{
    setLoading(true);
    const res = await fetch(url);
    const tours = await res.json();
    console.log(tours); 
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
  return (
    <main>

    </main>

  );
}

export default App;
