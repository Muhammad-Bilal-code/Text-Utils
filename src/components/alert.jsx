import React from 'react'

const Alert = (props) => {
    console.log(props.alert)
    const handleCap = (word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1) 
    }
  return (
props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{handleCap(props.alert.type)}</strong>:<strong>{props.alert.message}</strong> 
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

export default Alert