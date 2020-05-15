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
const Carrusell2 = ({imgCollecttion}) => {
  return (
    <CarrusllStyled>
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        {imgCollecttion.map((img)=>{
          return <div>
          <img src={img} />
        </div>
        })}
      </Carousel>
    </CarrusllStyled>
  )
}


export default Carrusell2