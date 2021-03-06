import React from 'react'
import styled from "styled-components";

const AdvancedStyle2 = styled.div`
font-family: 'Arvo', serif;
  width: 100%;
  margin-top: 50px;
  p{
    color: #494949;
    font-size: 1.3rem;

    font-size: 1.3rem;
  }
  .infografia{
    width:100%;
    
    margin-left: auto;
    margin-right: auto;
    
    img{
      width: 100%;
    }
  }
  @media (max-width: 755px) {
    margin-top: 50px;
  }
  
`

const Infografia = ({titulo, img, body, body2}) => {
  return (
    <AdvancedStyle2>
      <h3>{titulo}</h3>
      <p>{body}</p>
      <div className='infografia'>
        <img src={img}/>
      </div>
    </AdvancedStyle2>
  )
}

Infografia.propTypes = {
  
}

export default Infografia
