import React, { useState } from "react";
import tours from "./data/Tours";
import "../styles/App.css"
const App = () => {
  const [TempTours, setTempTours] = useState(tours);
  const [showmore, setshowmore] = useState([])
  const [loading, setloading] = useState(false)
    let showDetailsInfor = (index)=>{
       if(showmore.includes(index)){
        setshowmore(showmore.filter(index=>showmore.includes(index)!==index));
       }else{
        setshowmore([...showmore, index]);
       }

     
    }
    let deletetour = (index) =>{
      setloading(true);
      let deletedtour = TempTours.splice(index,1)
      setTempTours([...TempTours]);
      //
      console.log(TempTours)

      setTimeout(()=>{
        setloading(false)
      },0)
    }
    return(
      <main id="main">

        {TempTours.length>0 ? (loading===true ? <p>Loading...</p> :(
          TempTours.map((tour,index)=>(
            <div className="card" key={index}>
              <h1>{tour.name}</h1>
              <img src="https://e0.pxfuel.com/wallpapers/662/760/desktop-wallpaper-best-ideas-about-travel-dreams-world-8-travel-agency-travel-and-tourism.jpg"></img>
              <p className="info" onClick={()=>showDetailsInfor(index)}>{showmore.includes(index) ? (tour.info+"         show Less"):"Show More"}</p>
              <b>Rs {tour.price}</b>
              <button onClick={()=>deletetour(index)}>Delete Tour</button>
            </div>
          )))):(<div>
            <p>No more tours</p>
            <button onClick={()=>setTempTours(tours)}>refresh</button>
          </div>
          )
          
        }
      </main>
    )
}
export default App;
