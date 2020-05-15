import React from 'react'
import styled from "styled-components"
import { Carousel } from 'react-responsive-carousel';

const CarrusllStyled = styled.div`
    max-width: 300px;
    margin: auto;
  div {
    img {
     
    }
  }
`
const Carusell = ({imgCollecttion}) => { 
  const car =  {
    "type": "Carusell",
    "imgCollecttion":[
      "https://coronapage.s3-us-west-2.amazonaws.com/cuando-la-higiene-nos-alcance/FOTO+5.jpg",
      "https://coronapage.s3-us-west-2.amazonaws.com/cuando-la-higiene-nos-alcance/FOTO-6B.jpg"
    ]
  }
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


export default Carusell
