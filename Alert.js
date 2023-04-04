import React from 'react';
//import styled from 'styled-components';



function alert (props)  {
    const capitalise =(word)=>{
        const lower= word.toLowerCase();
        return lower.charAt(0).toUpperCase() +lower.slice(1)
    }
    return (
        <div style={{height:'50px'}}>
     { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalise(props.alert.type)}</strong>: {capitalise(props.alert.msg)}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>}
</div>
    )
}


export default alert;