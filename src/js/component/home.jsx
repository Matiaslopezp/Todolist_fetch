import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const bodyCss = {
  backgroundColor: "#ea899a",
  textAlign: "center",
  marginTop: "100px",
  paddingTop:"0px",
  width:"500px",
};

const listaCss={
  display: "flex",
  flexDirection: "column",
  justifyContent:"start",
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



 //crear fetch metodo PUT
 function putApi() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  //cambia el arreglo en duro por la variable de estado
  var raw = JSON.stringify(tarea);

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://assets.breatheco.de/apis/fake/todos/user/mlp",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

//-----------------------------------------------------------

  useEffect(()=>{
    fetch("https://assets.breatheco.de/apis/fake/todos/user/mlp")
    .then((response)=>response.json())
    .then((data)=>Settarea(data));
  },[]);

 //-----------------------------------------------------------
 useEffect(()=>{ 
  putApi();
 },[tarea]);
// es l oque qeuda de la tarea
 //-----------------------------------------------------------


  return (
    <div className="text-center container">
      <div className="text-center container" style={bodyCss}>
      <h1>TODO List</h1>
      </div>
      <div className="container"style={Css}>
     
      <form 
        onSubmit={(e) => {
          e.preventDefault(); //que no se actualize el componente//
          Settarea([...tarea, { label: e.target[0].value, done: false }]);
          putApi();
          e.target[0].value=" ";
        }}
        >
        <input type="text" placeholder="Ingese la tarea"></input>
        <button> Agregar </button>
      </form>


      {tarea.map((value, index, arr) => {
        console.log(value, index, arr);
        return (
          <div style={listaCss}>
          <li key={index} >
            {value.label}
            <button onClick={() => borrar(index)}><i className="far fa-trash-alt"></i></button>
          </li>
        </div>
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
