import React from 'react'
import styled from "styled-components";


const HeaderStyle =  styled.div`
 font-family: 'Arvo', serif;
  background: ${props => props.colorbg};
  width: 100%;
  height: 400px;
  padding-top: 20px;
  font-size: 1.1rem;
  .header-content{
    width: 80%;
    margin: auto;
    margin-top: 0;
    max-width: 1020px;
    .header-text{
      color: white;
      margin-top: 50px;
      width: 80%;
      h1 {
        font-size: 3rem;
        margin-bottom: 0px;
      }
      
    }
    .imagen-portada {
        height: 330px;
        width: 600px;
        margin-right: 0;
        margin-left: auto;
        background-image: url(${props => props.imgbg});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;

      }
  }

  @media (max-width: 755px) {
      width: 100%;
      .header-content {
        width: 90%;
        .header-text{
          width: 100%;
          h1{
          font-size: 2rem;
          }
          
        }
        .imagen-portada {
        height: 130px;
        width: 200px;
        margin-right: 0;
        margin-left: auto;
        background-image: url(${props => props.imgbg});
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        }
      }
      
  }
  
`

const HeaderPost = ({title, intro, imgbg, colorbg}) => {
  return (
    <HeaderStyle colorbg={colorbg} imgbg={imgbg}  >
      <div className='header-content'>
        <div className='header-text'>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        <div className='imagen-portada' />
      </div>
     

    </HeaderStyle>
      
   
  )
}

export default HeaderPost
