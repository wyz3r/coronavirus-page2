import React, { Component } from 'react'
import Layout from '../components/Layout'
import firebase from 'firebase/app'

import styled from 'styled-components'
import {Link} from '../routes'


const ContentLogin = styled.div`
 /* animation-duration: 1s;
  animation-delay: 0.5s; */
  font-family: 'Arvo', serif;
  color: black;
  margin: auto;
  margin-top: 100px;
  max-width: 350px;
  height: 300px;
  background: white;
  background: #FF5855;
  border: 1px rgb(0,0,0, 0.1) solid;
  -webkit-box-shadow: -7px 14px 20px -7px rgba(0,0,0,0.35);
-moz-box-shadow: -7px 14px 20px -7px rgba(0,0,0,0.35);
box-shadow: -7px 14px 20px -7px rgba(0,0,0,0.35);
  text-align: center;
  padding: 45px;
  position: relative;
.lapiz{
  position: absolute;
  right:-102px;
  top:-40px;
  height: 200px;
}
h1{
  font-size: 1.3em;
  font-weight: 400;
  color: white;
}
h4{
  color: white;
  font-size: 1em;
}
.form{
  width: 100%;
  max-width: 650px;
  input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #ED515D;
  width: 100%;
  border: 1px white solid;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
 button:hover, button:active, button:focus {
  background: #FF777B;
}
}
@media (max-width: 755px) {
  overflow: hidden;
  .lapiz{
  position: absolute;
  right:-102px;
  top:-40px;
  height: 200px;
}
}
`
const ContentSucces = styled.div`
  animation-duration: 2s;
  animation-delay: 0.01s;
  font-family: 'Arvo', serif;
  color: black;
  margin: auto;
  margin-top: 100px;
  max-width: 550px;
  height: 200px;
  background: white;
  background: #40DC82;
  border: 1px rgb(0,0,0, 0.1) solid;
  -webkit-box-shadow: -7px 14px 20px -7px rgba(0,0,0,0.35);
-moz-box-shadow: -7px 14px 20px -7px rgba(0,0,0,0.35);
box-shadow: -7px 14px 20px -7px rgba(0,0,0,0.35);
  text-align: center;
  padding: 45px;
  position: relative;
.lapiz{
  position: absolute;
  right:-102px;
  top:-40px;
  height: 200px;
}
h1{
  font-size: 1.3em;
  font-weight: 400;
  color: white;
}
h4{
  color: white;
  font-size: 1em;
}
.form{
  width: 100%;
  max-width: 650px;
  input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #40DC82;
  width: 100%;
  border: 1px white solid;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
 button:hover, button:active, button:focus {
  background: #70DC82;
}
}
@media (max-width: 755px) {
  overflow: hidden;
  .lapiz{
  position: absolute;
  right:-102px;
  top:-40px;
  height: 200px;
}
}
`
const HeaderStyle = styled.div `
 height: 60px;
    transition: all 2s;
    background: ${prop=> prop.colorbg};
    width: 100%;
    
    margin: auto;
    
  div{
    height: 100%;
    width: 100%;
    margin: auto;
   
    max-width: 98%;
    display:flex;
    margin-top: 10px;
    margin-top:0;
    justify-content: space-between;
    .img-content {
      width: 60px;
      margin: 0;
        a {
          text-decoration: none;
          color: white;
          .contacto {
            height: auto;
            width: auto;
            border-radius: 25px;
            padding: 5px 15px;
            font-size: 25px;
            margin-left: 10px;
            margin-top: 10px;
            background: black;
            text-align: center;
            align-items: center;
          }
            
        }
      
    
    }
  }
`
export class login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: "",
      pass: ""
    };
    this.handleChange = this.handleChange.bind(this)
    this.summit = this.summit.bind(this)

  }

  handleChange ( e) {
    this.setState({[e.target.name]: e.target.value});
  }
  summit () {
    const {username} = this.state
    firebase.auth().sendPasswordResetEmail(username)
      .then((resp) => {
        this.setState({sucess: true})
      })
      .catch((error) => {
        console.log(error)
        if (error.code === 'auth/invalid-email') {
          this.setState({
            errorText: 'Por favor, ingresa un email válido.',
            error: true})
        } if (error.code === 'auth/user-not-found') {
          this.setState({
            errorText: 'Ups, usuario no encontrado.',
            error: true})
        }
      })
  }

  render() {
    const {error, errorText, sucess} = this.state
    return (
    <div>
      <Layout title={'recovery password'} image={''} description={'description'}>
        <HeaderStyle colorbg={(sucess ? '#40DC82': '#FF5855')}>
        <div> 
              <div className='img-content'>
                <Link href='/' >
                  <a>
                    <img alt='imagen'  height='60'  src='https://coronapage.s3-us-west-2.amazonaws.com/Zona2.png' />
                  </a>
                </Link>
               
                <a href='https://advancedxprnc.typeform.com/to/An5Fh1' target='_blank'>
                  <div className='contacto'>
                  Contáctanos
                  </div>
                </a>
                
              </div>
              <div className='img-content'>
              
                <a href='https://www.delarivagroup.com/' target='_blank'>
                  <img alt='imagen'  height='60' width='60' src='https://delariva.s3-us-west-2.amazonaws.com/corona-pagina/LogodlR.png' />
                </a>
              
              </div>
            </div>
        </HeaderStyle>
        {
          sucess
          ?
            <ContentSucces className='animate fadeInUp'>
              <img className='lapiz'  src='https://coronapage.s3-us-west-2.amazonaws.com/assets/lapiz.png'/>
              <img width='50px' src='https://coronapage.s3-us-west-2.amazonaws.com/assets/recuperar.svg'/>
              <h1>CORREO DE RECUPERACIÓN DE CONTRASEÑA ENVIADO</h1>
              <div className='form'>
                <Link href='/login' >
                  <a className='back'>
                  <button >Regresar</button>
                  </a>
                </Link>
                
                {error ? <label style={{color:'white', marginTop:'10px'}}>{errorText}</label>:''}
              </div>
            </ContentSucces>
          :
          <ContentLogin >
          <img className='lapiz'  src='https://coronapage.s3-us-west-2.amazonaws.com/assets/lapiz.png'/>
          <img width='50px' src='https://coronapage.s3-us-west-2.amazonaws.com/assets/iniciosesion.svg'/>
          <h1>¿Olvidaste tu contraseña ?</h1>
          <h4>Introduce tu correo electronico para recuperarla </h4>
          <div className='form'>
            <input value={this.state.username} name="username" onChange={e => this.handleChange(e)}  type="email" placeholder="Email"/>
            
            <button onClick={(e) => this.summit(e) }>Recuperar contraseña</button>
            {error ? <label style={{color:'white', marginTop:'10px'}}>{errorText}</label>:''}

          </div>
        </ContentLogin>
        }
        
      </Layout>
      </div>
    )
  }
}

export default login
