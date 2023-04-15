import React from 'react'
import Textarea from "./txtarea"

export default function Home(props) {
  console.log(props.mode)
  return (
        <div id="home-page" style={{color:props.mode?"white":"black"}}>
        <h2>This is Home</h2>
        <Textarea textArea = "Text - Utils"  mode={props.mode}/>
        </div>
  )
}
