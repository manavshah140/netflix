import React from "react";
import Sdata from "./Sdata";
import Cards from './Cards';

const App = () => {
  return(
    <>
        <h1 className='heading_style'>List of Top 5 Netflix Series in 2020</h1>

        { Sdata.map((val, index) => {
            return(
              <Cards 
                key={index}
                imgsrc = {val.imgscr}
                sname = {val.sname}
                title = {val.title}
              />
            )
          })
        }
    </>
  )
}

export default App;