import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [tarea, Settarea] = useState([
    "lavar",
    "comer",
    "dormir",
    "caminar",
    "trabajar",
    "ordenar",
  ]);
  return (
    <div className="text-center">
      <h1>TODO List</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          Settarea([...tarea,event.target[0].value]);
        }}
      >
        <input placeholder="Ingresa su nueva Tarea" />
		</form>

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
