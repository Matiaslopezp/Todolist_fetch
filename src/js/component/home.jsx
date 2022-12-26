import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const bodyCss = {
  backgroundColor: "#ea899a",
  textAlign: "center",
  marginTop: "100px",
  paddingTop:"0px",
  width:"500px",
 
};



const Css = {
  backgroundColor: "#FF6666",
  textAlign: "center",
  marginTop: "2px",
  paddingTop:"20px",
  width:"500px",
  textAlign:"center"
};

const Css2={
  fontStyle: "italic",
  marginTop:"15px"
}


//create your first component
const Home = () => {
  const [tarea, Settarea] = useState([]);
  const borrar = (b) => {
    Settarea(tarea.filter((value, index, arr) => {
        return index != b;
      })
    );
  };

  return (
    <div className="text-center container">
      <div className="text-center container" style={bodyCss}>
      <h1>TODO List</h1>
      </div>
      <div className="container"style={Css}>
      <input
        placeholder="Ingresa una nueva Tarea"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            Settarea([...tarea, e.target.value]);
            e.target.value = "";
          }
        }}
      />

      {tarea.map((value, index, arr) => {
        console.log(value, index, arr);
        return (
          <li key={index}>
            {value}
            <button onClick={() => borrar(index)}><i class="far fa-trash-alt"></i></button>
          </li>
        );
      })}
      <div style={Css2}>
        Número de tareas {tarea.length}
        </div>
      </div>
    </div>
  );
};

export default Home;
