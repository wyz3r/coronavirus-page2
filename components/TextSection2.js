import React from 'react'
import styled from "styled-components";

const TextStyled = styled.div`
  width: 100%;
  h2{
    font-size: 40px;
  }
  p{
    
    color: #494949;
    font-size: 1.3rem;
    font-style: oblique;
    font-weight: 700;
  }
  
`
const TextSection = ({titulo, bodyText}) => {
  return (
    <TextStyled>
      <h2>{titulo}</h2>
        {bodyText.map((text,index)=> <p key={index +titulo }>{text}</p>)}
    </TextStyled>
  )
}


export default TextSection


