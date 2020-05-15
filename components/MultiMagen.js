import React from 'react'
import styled from "styled-components"
import { Carousel } from 'react-responsive-carousel';

const CarrusllStyled = styled.div`
    max-width: 600px;
    margin: auto;
  div {
    img {
     
    }
  }
`
const MultiMagen = ({imgCollecttion}) => {
  return (
    <CarrusllStyled>
      <div showThumbs={false} infiniteLoop autoPlay>
        {imgCollecttion.map((img)=>{
          return <div>
          <img src={img} />
        </div>
        })}
      </div>
    </CarrusllStyled>
  )
}


export default MultiMagen
