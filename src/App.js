import React from 'react'
import './App.css'
import Login from './Login'

function App() {

  var name="abhishek";
  var list=["Home","about","contact","career","services"]

  return (
    <>

    <div className="container">
      <h1>Hello user </h1>
      <p></p>
      <img src="" alt="" />
      <input type="text" />
      <ul>
          {
            list.map(function(value){
              return <li>{value}</li>
            })
          }
      </ul>
      {/* {name} */}
    </div>
      <Login/>

      <div>
        
      </div>
    </>
  )
}

export default App