import 'isomorphic-fetch'
// import ReactGA from 'react-ga'
import { initGA, logPageView } from '../helpers/analytics'
import isLogin from '../helpers/validateLogingin'
import firebase from 'firebase/app'
import 'firebase/auth'

import Layout from '../components/Layout'
import {ContainerHome, IntroCard} from '../styles/components'
import PostsGrid from '../components/PostsGrid'
import PostsGridPremium from '../components/PostGridPremium'
import {Link} from '../routes'

export default class extends React.Component {
  static async getInitialProps({res, query, req}) {
      try {
        // let responseData = await fetch(`https://coronapage.s3-us-west-2.amazonaws.com/home/data.json`)
        // let payloadJson = await responseData.json()
        return { idQuizz: null, title: 'home', logo: 'error', description: 'good', statusCode: 200}
      } catch (error) {
      }
  }

  constructor(props) {
    super(props);
    this.state = {
      token:'',
      typeContent: 'free',
      Posts: []
    }
    this.logOut =  this.logOut.bind(this)
    this.changeTypeContent =  this.changeTypeContent.bind(this)
  }
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
    this.setState({token: isLogin()})
    fetch(`https://coronapage.s3-us-west-2.amazonaws.com/home/data.json`)
    .then(response => response.json())
      .then((data) =>
      {
        this.setState({Posts: data.Posts })
      }
      )
    // if(window.localStorage.typeContentCache !== undefined){
    //   this.setState({typeContent: window.localStorage.typeContentCache})
    // }
  }

  logOut () {
    firebase.auth().signOut().then(() => {
      window.localStorage.removeItem('idToken')
      // this.setState({token: isLogin()})
      window.location.href = '/'
    }).catch(()=> {
        console.log('error de logout ')
    })
    
  }
  changeTypeContent(type) {
    if(firebase.auth().currentUser){
       this.setState({typeContent: type })
       window.localStorage.typeContentCache = type
      //  const token = window.localStorage.idToken
       
    } else {
      window.localStorage.removeItem('idToken')
      window.location.href = '/'
    }
   
  }

    render() {
      const {statusCode, ListPost } = this.props
      const {token, typeContent, Posts} = this.state
      if( statusCode !== 200 ) {
        return <Error statusCode={statusCode} />
      }
      return (
        <Layout title={'Zona de Reconexion'} image={'https://coronapage.s3-us-west-2.amazonaws.com/Zona2.png'} description={'Plataforma de monitoreo diario de los mexicanos frente al COVID-19. Entendimiento vivencial y numérico de su experiencia hacia la reconfiguración de hábitos.'}>
         <ContainerHome>
            <div className='left-static'>
              <header>
                
              {!token?
                  <Link href='/login'>
                  < a className='button-header'>
                    <img alt='imagen'  height='40' width='40' src='https://coronapage.s3-us-west-2.amazonaws.com/assets/login.svg' />
                    <label>Log-in</label>
                  </a>
                  </Link> :
               <div className='button-header' onClick={() =>{this.logOut()}} >
                 <img alt='imagen'  height='40' width='40' src='https://coronapage.s3-us-west-2.amazonaws.com/assets/logout.svg' />
               <label>Log-out</label>
             </div>
               }
                <a href='https://advancedxprnc.typeform.com/to/An5Fh1' target='_blank'>
                    <div className='contact'>
                      Contáctanos
                    </div>
                  </a>
              </header>
              <div>
             
            </div>
              <IntroCard >
                <img alt='imagen' height='170' width='250' src='https://coronapage.s3-us-west-2.amazonaws.com/Zona2.png' />
                {token ? 
                  <div className='premium-container'>
                    <div className={"premiun-button" + (typeContent === 'premium' ? ' active' : '')} onClick={()=> this.changeTypeContent('premium') }>PREMIUM </div>
                    <div className={"free-button" + (typeContent === 'free' ? ' active' : '') } onClick={() => this.changeTypeContent('free') }>FREE </div>
                  </div> 
                  :
                  <div className='introContent'>
                    <p>Sabemos que a nadie le enseñaron cómo pensar, reaccionar ni enfrentar una cuarentena, por eso creamos este espacio para descubrir inquietudes y soluciones que se viven en los hogares mexicanos durante esta etapa.</p>
                    <p>Todo lo que aquí recopilamos está basado en distintos mexicanos quienes nos comparten día a día su experiencia, la cual revalidamos con entrevistas a nivel nacional sobre el sentir de la población para mostrar un panorama más amplio.</p>
                    <p>
                    Así podemos inspirarnos a resolver conflictos, alivianar la incertidumbre, o tal vez solo pasar un buen rato (re)conectando con quienes están en la misma situación.</p>
                    <p>Así que ponte cómodo, ¡ya estas en la zona de (Re)Conexión!</p>
                  </div>
               }
                <div className='imgHome' />   
              </IntroCard>
            </div>
             <div className='right-dinamic'>
                { typeContent === 'premium' ? <PostsGridPremium />:
                  <PostsGrid Posts={Posts}/>
                }
            </div>
         </ContainerHome>
        </Layout>)

    }
  } 