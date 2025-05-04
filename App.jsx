import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { process_params } from 'express/lib/router'

function App1() {
  const [title,setTitle]=useState("My name is Ritesh")

  function updateTitle(){
    setTitle("My name is "+Math.random())
  }

  return (
      <React.Fragment>
        <button onClick={updateTitle}>update the title</button>
        <Header title={title}></Header>
        <Header title="Ritesh"></Header> 
      </React.Fragment>
  )
}


function App() {
  return (
      <React.Fragment>
        <HeaderWithButton/>
        <Header title="Ritesh"></Header> 
      </React.Fragment>
  )
}

function HeaderWithButton(){
  const [title,setTitle]=useState("My name is Ritesh")

  function updateTitle(){
    setTitle("My name is "+Math.random())
  }
  return <div>
       <button onClick={updateTitle}>update the title</button>
       <Header title={title}></Header>
  </div>
}

    const Header=React.memo(
      function Header({title}){
        <div>
            {title}
        </div>
      })


// function Header(props){
//   {props.title}
// }


export default Appn
