import React, { Component } from 'react'
import Layout from '../components/Layout'
import firebase from 'firebase/app'
import styled from 'styled-components'
import {Link} from '../routes'


const ContentLogin = styled.div`
  font-family: 'Arvo', serif;
  color: black;
  margin: auto;
  margin-top: 100px;
  max-width: 350px;
  height: 360px;
  background: white;
  border: 1px rgb(0,0,0, 0.1) solid;
  -webkit-box-shadow: -7px 13px 20px -7px rgba(0,0,0,0.35);
  -moz-box-shadow: -7px 13px 20px -7px rgba(0,0,0,0.35);
  box-shadow: -7px 13px 20px -7px rgba(0,0,0,0.35);
  text-align: center;
  padding: 45px;
  position: relative;
.lapiz{
  position: absolute;
  right:-102px;
  top:-40px;
  height: 200px;
}
.corona{
  position: absolute;
  left: -50px;
  bottom: 0px;
  height: 100px;
}
.corona2{
  position: absolute;
  right: 20px;
  bottom: -40px;
  height: 100px;
}
h1{
  font-size: 1.3em;
  font-weight: 400;
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
  border: 0;
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
.forget-pass{
  margin-top: 25px;
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
    background: white;
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
      pass: "",
      error: ""
    };
    this.handleChange = this.handleChange.bind(this)
    this.summit = this.summit.bind(this)

  }

  handleChange ( e) {
    this.setState({[e.target.name]: e.target.value});
  }
  summit () {
    const {username, pass} = this.state
    firebase.auth().signInWithEmailAndPassword(username, pass)
      .then((param) => {
       
        firebase.auth().currentUser.getIdToken(true).then((idToken) => {
          window.localStorage.idToken = idToken
          window.location.href = '/'
         
        }).catch(function (error) {
          console.log({error})
        })
      })
      .catch((error) => {
        console.log(error)
        if (error.code === 'auth/user-not-found' || 'auth/wrong-password') {
          this.setState({error: true})
        }
      })
  }

  render() {
    const {error} =this.state
    return (
      
      <Layout title={'login'} image={''} description={'description'}>
        <HeaderStyle>
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
              
                <a href='https://www.delarivagroup.com/' target='_bank'>
                  <img alt='imagen'  height='60' width='60' src='https://delariva.s3-us-west-2.amazonaws.com/corona-pagina/LogodlR.png' />
                </a>
            
              </div>
            </div>
        </HeaderStyle>
        <ContentLogin>
          <img className='lapiz'  src='https://coronapage.s3-us-west-2.amazonaws.com/assets/lapiz.png'/>
          <img className='corona'  src='https://coronapage.s3-us-west-2.amazonaws.com/assets/coronavirus4+1.png'/>
          <img className='corona2'  src='https://coronapage.s3-us-west-2.amazonaws.com/assets/coronavirus5.png'/>
          <img width='50px' src='https://coronapage.s3-us-west-2.amazonaws.com/assets/iniciosesion.svg'/>
          <h1>Iniciar sesión</h1>
          <div className='form'>
            <input value={this.state.username} name="username" onChange={e => this.handleChange(e)}  type="email" placeholder="username"/>
            <input value={this.state.pass} name="pass" onChange={this.handleChange} type="password" placeholder="password"/>
            {error ? <label>Ups!, email o contraseña incorrectos.</label>:''}
            <button onClick={(e) => this.summit(e) }>Entrar</button>
          </div>
          <div className='forget-pass'>
          <Link href='/recopass' >
                  <a>
                    ¿Olvidaste tu contraseña?
                  </a>
                </Link>
          </div>

        </ContentLogin>
      </Layout>
    )
  }
}

export default login
