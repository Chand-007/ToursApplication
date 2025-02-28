import Loading from './Loading'
import Tours from './Tours'
import { TourData } from './Data'
import {useState,useEffect} from 'react'

const url = 'https://course-api.com/react-tours-project'

function App(){
  const [loading,setLoading]=useState(true)
  const [tours,setTours]=useState(TourData)

  const removeTour=(id)=>{
    const newTours=tours.filter((tour)=>tour.id!==id);
    setTours(newTours)
  }

  if(tours.length === 0){
    return(
      <main>
        <div className="title">
          <h2>no tours left</h2>

        </div>
      </main>
    )
  }


  return( <main>
    <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}

export default App;