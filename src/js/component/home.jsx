import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Css={
  backgrabackgroundColor: "black",
  width: "1000px",
  height: "1000px",
}

//create your first component
const Home = () => {
  const [tarea, Settarea] = useState([ ]);
  return (
    <div className="text-center" style={Css}>
      <h1>TODO List</h1>

        <input placeholder="Ingresa su nueva Tarea" onKeyPress={(e)=>{
          if(e.key==="Enter"){
            Settarea([...tarea,e.target.value]);
            e.target.value="";
          }
        }} />
		

        {tarea.map((value, index, arr) => {
          console.log(value, index, arr);
          return (
            <li key={index}>
              {value}
              <button>x</button>
            </li>
          );
        })}
      
    </div>
  );
};

export default Home;
