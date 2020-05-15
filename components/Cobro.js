import React from 'react'
import styled from "styled-components";
import {Link} from '../routes'

const CobroStyled = styled.div`
    font-family: 'Arvo', serif;
    margin: auto;
    margin-top: 270px;
    width: 80%;
    max-width: 900px; 
    border: 1px rgb(0,0,0, 0.1) solid;
    -webkit-box-shadow: -7px 13px 20px -7px rgba(0,0,0,0.35);
    -moz-box-shadow: -7px 13px 20px -7px rgba(0,0,0,0.35);
    box-shadow: -7px 13px 20px -7px rgba(0,0,0,0.35);
    text-align: center;
    @media (max-width: 755px) {
      margin-top: 130px;
  }
`
 const Cobro = (props) => {
  return (
    <CobroStyled>
      <h2> Este contenido es de cobro para continuar haz &nbsp;
        <Link href='/login'><a>login</a></Link> o ponte en <a href='https://advancedxprnc.typeform.com/to/An5Fh1' target='_blank'>contacto</a> con nuestro analistas </h2>
      <p> </p>
    </CobroStyled>
  )
}

export default Cobro
