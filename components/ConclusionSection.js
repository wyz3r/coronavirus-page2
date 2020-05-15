import React from 'react'
import styled from "styled-components";

const TextStyled = styled.div`
  width: 100%;
  margin-top: 100px;
  h2{
    font-size: 40px;
  }
  p{
    
    color: #494949;
    font-size: 1.3rem;
  }
  
`
const ConclusionText = ({titulo, bodyText}) => {
  return (
    <TextStyled>
      <h2>{titulo}</h2>
      {bodyText.map(text=> <p>{text}</p>)}
      
    </TextStyled>
  )
}
ConclusionText.propTypes = {
  bodyText:"",
  text:''

}

export default ConclusionText


