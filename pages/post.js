import 'isomorphic-fetch'
import {Link} from '../routes'
import { initGA, logPageView } from '../helpers/analytics'
import isLogin from '../helpers/validateLogingin'
import firebase from 'firebase/app'
import 'firebase/auth'
import Layout from '../components/Layout'
import HeaderPost from '../components/HeaderPost'
import BodySections from '../components/BodySections'
import Cobro from '../components/Cobro'

import styled from 'styled-components'
const HeaderStyled = styled.header`
    height: 60px;
    background: ${props => props.colorbg};
    width: 100%;
    margin: auto;
    position: fixed;
    z-index: 1;
    padding-top: 5px;
    padding-bottom: 5px;
    
  div{
    height: 100%;
    width: 98%;
    margin: auto;
    max-width: 1020px;
    display:flex;
    
    justify-content: space-between;
    .img-content {
      width: 200px;
      margin: 0;
     
        a {
          text-decoration: none;
          color: black;
          .contacto {
            height: auto;
            width: auto;
            border-radius: 25px;
            padding: 5px 15px;
            font-size: 25px;
            margin-left: 10px;
            margin-top: 10px;
            background: white;
            text-align: center;
            align-items: center;
          }
            
        }
    }
    .img-content2 {
      width: 120px;
      margin: 0;
    
        a {
          text-decoration: none;
          color: black;
            
        }
    }
    .button-header{
        cursor: pointer;
        color: black;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        width: 200px;
      }
  
  }
  @media (max-width: 755px) {
    div{
    .img-content {
      .contacto{
        display:none;
      }
    }
  }
  
  }

`

const FooterStyled = styled.footer`
  height:150px;
  background:white;
  color: white;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 50px;
  
`
const FloatContact = styled.div `
       display:none;
      a {
          text-decoration: none;
          color: white;
         
          .contacto {
            height: auto;
            width: auto;
            padding: 5px 15px;
            font-size: 25px;
            
            margin-top: 10px;
            background: black;
            text-align: center;
            align-items: center;
          }
            
        }
        @media (max-width: 755px) {
          display: block;
        }

`
export default class extends React.Component {
  
  static async getInitialProps({res, query, req}) {
    console.log('construye cache index')
    const postid = query.id
    
    try {
      let responseData = await fetch(`https://coronapage.s3-us-west-2.amazonaws.com/${postid}/data.json`)
      let payloadJson = await responseData.json() 
      const {title, intro, colorbg, sections, imgbg, privado} = payloadJson
     
      return { 
          title:  title,
          logo: 'error',
          description:  intro,
          colorbg: colorbg,
          sections:  sections,
          imgbg:  imgbg,
          statusCode: 200,
          privado: privado ? true : false
        }
    } catch (error) {
      
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      showContent: false,
      token:''
    };
    
    this.validateShowContent =  this.validateShowContent.bind(this)
    this.logOut =  this.logOut.bind(this)
    this.publicar =  this.publicar.bind(this)

    
  }
  componentDidMount () {
    this.setState({ token:isLogin()})
    
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
    
    const {privado} = this.props
    if(!privado){
     this.setState({showContent: true})
    }
    else if(privado) {
      if(isLogin()) {
        this.setState({showContent: true, token:true})
      }
    }
    
  }
  
  
  validateShowContent (privado) {
    
  }
  publicar(){
    const datos =[{
      "9999999999924": {
        "abstract": "Vivir la pandemia desde los niveles bajos es reaccionar diferente a lo que muchos creemos que “debería de ser”. Los niveles bajos también tienen mecanismos y razones de cómo enfrentar esta crisis de salud que no ve edad, cultura ni nivel socioeconómico.",
        "cardColor": "#94C5FB",
        "fecha": {
          "day": "08",
          "month": "04",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/la-reivindicacion-de-los-niveles-bajos/Portada.jpg",
        "link": "post/la-reivindicacion-de-los-niveles-bajos",
        "title": "La reivindicación de los niveles bajos"
      }
    }, {
      "9999999999925": {
        "abstract": "El consumo local ha sido una prioridad, tanto para nosotros los consumidores como para las autoridades locales. Por ello, se han impulsado una serie de acciones que dan dinamismo a la economía del barrio.",
        "cardColor": "#947EAC",
        "fecha": {
          "day": "07",
          "month": "05",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/reactivando-la-economia-con-moneda-local/Portada280x200.jpg",
        "link": "post/reactivando-la-economia-con-moneda-local",
        "title": "Reactivando la economía con moneda local"
      }
    }, {
      "9999999999926": {
        "abstract": "Las plataformas son los medios que nos han permitido resolver la sana distancia sin perder los vínculos emocionales, incluso a conocer a más gente de todo el mundo.",
        "cardColor": "#94C5FB",
        "fecha": {
          "day": "06",
          "month": "05",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/el-mundo-digital-no-conoce-fronteras/Portada280x200.jpg",
        "link": "post/el-mundo-digital-no-conoce-fronteras",
        "title": "El mundo digital no conoce fronteras"
      }
    }, {
      "9999999999927": {
        "abstract": "¡Porque ya estamos alzando la voz! Los mexicanos estamos actuando y  haremos lo necesario para ayudarnos unos a otros, desde las plataformas virtuales hasta los apoyos concretos.",
        "cardColor": "#E7A628",
        "fecha": {
          "day": "05",
          "month": "05",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/mexicanos-al-grito-de-guerra/Portada.jpg",
        "link": "post/mexicanos-al-grito-de-guerra",
        "title": "¡Mexicanos al grito de guerra!"
      }
    }, {
      "9999999999928": {
        "abstract": "Muchos nos hemos puesto a fantasear sobre el momento en el que termine el encierro ¿quieres saber qué es lo primero que vamos a hacer los mexicanos?",
        "cardColor": "#159BBA",
        "fecha": {
          "day": "04",
          "month": "05",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/que-es-lo-primero-que-vamos-a-hacer-los-mexicanos-terminando-la-cuare/PORTADA.jpg",
        "link": "post/que-es-lo-primero-que-vamos-a-hacer-los-mexicanos-terminando-la-cuare",
        "title": "¿Que es lo primero que vamos a hacer los mexicanos terminando la cuarentena?"
      }
    }, {
      "9999999999929": {
        "abstract": "El Covid-19 vino a crear conciencia a todos niveles ¿será que el cambio de mentalidad llegó para quedarse?",
        "cardColor": "#F2985A",
        "fecha": {
          "day": "03",
          "month": "05",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/habra-un-antes-y-un-despues-del-covid-19/Portada280x200.jpg",
        "link": "post/habra-un-antes-y-un-despues-del-covid-19",
        "title": "¿Habrá un antes y un después del Covid-19?"
      }
    }, {
      "9999999999930": {
        "abstract": "El final de la cuarentena será sinónimo de ir de vacaciones; sin embargo, la situación económica no permitirá que todos puedan hacerlo",
        "cardColor": "#40C19C",
        "fecha": {
          "day": "02",
          "month": "05",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/patitas-pa-que-las-quiero/PORTADA.jpg",
        "link": "post/patitas-pa-que-las-quiero",
        "title": "Patitas pa’ que las quiero"
      }
    }, {
      "9999999999931": {
        "abstract": "No cabe duda que esta cuarentena nos ha enseñado mucho ¿Cómo se han resignificado estos aprendizajes a un mes del encierro?",
        "cardColor": "#8163A8",
        "fecha": {
          "day": "01",
          "month": "05",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/aprendizajes-reloaded/Portada280x200.jpg",
        "link": "post/aprendizajes-reloaded",
        "title": "Aprendizajes reloaded"
      }
    }, {
      "9999999999932": {
        "abstract": "Hoy, día del niño, quisimos echar un ojo a cómo los más pequeños de la casa también están siendo afectados por el confinamiento.",
        "cardColor": "#ED515D",
        "fecha": {
          "day": "30",
          "month": "04",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/la-cuarentena-de-los-ninos/Portada280x200.jpg",
        "link": "post/la-cuarentena-de-los-ninos",
        "title": "La cuarentena de los niños"
      }
    }, {
      "9999999999933": {
        "abstract": ": A pesar de la petición del gobierno de #QuédateEnCasa, en las calles sigue habiendo gente ¿será que estamos justificando de más nuestras salidas?",
        "cardColor": "#EA8383",
        "fecha": {
          "day": "29",
          "month": "04",
          "year": "30"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/salir-o-no-salir-esa-es-la-cuestion/Portada280x200.jpg",
        "link": "post/salir-o-no-salir-esa-es-la-cuestion",
        "title": "Salir o no salir esa es la cuestion"
      }
    }, {
      "9999999999935": {
        "abstract": "En México estamos usando las manos para agredir y no para aplaudir.",
        "cardColor": "#65DBBC",
        "fecha": {
          "day": "28",
          "month": "04",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/me-dueles-mexico/Portada280x200.jpg",
        "link": "post/me-dueles-mexico",
        "title": "Me dueles México"
      }
    }, {
      "9999999999936": {
        "abstract": "Dicen que los mexicanos no conquistamos el mundo porque no queremos. El ingenio mexicano se viste solo y sale a relucir hasta en los peores momentos.",
        "cardColor": "#159BBA",
        "fecha": {
          "day": "28",
          "month": "04",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/solo-en-mexico/Portada280x200.jpg",
        "link": "post/solo-en-mexico",
        "title": "Sólo en México"
      }
    }, {
      "9999999999937": {
        "abstract": "Hemos encontrado siete perfiles de mexicanos con respecto al Covid ¿cuál eres tu? y ¿qué tan tolerante eres con los que piensan diferente?",
        "cardColor": "#F2985A",
        "fecha": {
          "day": "28",
          "month": "04",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/y-tu-eres-tolerante-con-los-que-te-rodean/Portada280x200.jpg",
        "link": "post/y-tu-eres-tolerante-con-los-que-te-rodean",
        "title": "Y tu ¿Eres tolerante con los que te rodean?"
      }
    }, {
      "9999999999938": {
        "abstract": "La emergencia sanitaria es de todos, pero no todos tenemos la misma capacidad de respuesta.",
        "cardColor": "#6298C4",
        "fecha": {
          "day": "27",
          "month": "04",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/y-los-menos-privilegiados-que/Portada280x200.jpg",
        "link": "post/y-los-menos-privilegiados-que",
        "title": "¿Y los menos privilegiados qué?"
      }
    }, {
      "9999999999939": {
        "abstract": "Mientras muchos usan este momento en casa para bajar la velocidad, otros la han acelerado más que nunca.",
        "cardColor": "#EA8383",
        "fecha": {
          "day": "27",
          "month": "04",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/workaholics-de-cuarentena/Portada280x200.jpg",
        "link": "post/workaholics-de-cuarentena",
        "title": "Workaholics de cuarentena"
      }
    }, {
      "9999999999940": {
        "abstract": "Muchos mexicanos han ignorado la petición gubernamental de #QuédateEnCasa, no por desobediencia, sino por necesidad (la de ellos y la de todos).",
        "cardColor": "#8163A8",
        "fecha": {
          "day": "27",
          "month": "04",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/no-podemos-parar/Portada280x200.jpg",
        "link": "post/no-podemos-parar",
        "title": "No podemos parar"
      }
    }, {
      "9999999999941": {
        "abstract": "Al inicio de la cuarentena nuestros hábitos de compra se vieron afectados por el pánico colectivo; un mes después, estas compras se están modificando.",
        "cardColor": "#41CFE5",
        "fecha": {
          "day": "26",
          "month": "04",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/de-compras-de-panico-a-compras-planeadas/Portada280x200.jpg",
        "link": "post/de-compras-de-panico-a-compras-planeadas",
        "title": "De compras de panico a compras planeadas"
      }
    }, {
      "9999999999942": {
        "abstract": "Los mexicanos están comprando artículos que les permitan hacer frente al encierro ¿será que estos artículos llegaron para quedarse?",
        "cardColor": "#EA8383",
        "fecha": {
          "day": "26",
          "month": "04",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/mas-alla-de-la-despensa/Portada280x200.jpg",
        "link": "post/mas-alla-de-la-despensa",
        "title": "Mas alla de la despensa"
      }
    }, {
      "9999999999943": {
        "abstract": "Hoy más que nunca, tenemos la conciencia sobre el poder de nuestras decisiones de compra y cómo éstas afectan, o mejoran, el entorno.",
        "cardColor": "#8163A8",
        "fecha": {
          "day": "26",
          "month": "04",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/del-super-a-la-tiendita-on-y-offline/PORTADA.JPG",
        "link": "post/del-super-a-la-tiendita-on-y-offline",
        "title": "Del super a la tiendita on y offline"
      }
    }, {
      "9999999999944": {
        "abstract": "Hay algunos mexicanos que se están alejando voluntariamente del mundo online para no sentirse abrumados por la situación del exterior.",
        "cardColor": "#7FA9D3",
        "fecha": {
          "day": "25",
          "month": "04",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/viviendo-offline/Portada280x200.jpg",
        "link": "post/viviendo-offline",
        "title": "Viviendo OFFLINE"
      }
    }, {
      "9999999999945": {
        "abstract": "Esta cuarentena nos ha permitido experimentar con distintas actividades dentro del hogar que, generalmente, no solíamos llevar a cabo tan intensamente.",
        "cardColor": "#159BBA",
        "fecha": {
          "day": "25",
          "month": "04",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/los-nuevos-roles-del-hogar/Portada280x200.jpg",
        "link": "post/los-nuevos-roles-del-hogar",
        "title": "Los nuevos roles del hogar"
      }
    }, {
      "9999999999946": {
        "abstract": "El regreso a clases se vivió con un sin fin de desafíos tanto para padres, alumnos y maestros. Seguimos ensayando…",
        "cardColor": "#EA8383",
        "fecha": {
          "day": "25",
          "month": "04",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/back-to-school-un-reto-mas/Portada280x200.jpg",
        "link": "post/back-to-school-un-reto-mas",
        "title": "Back to school un reto mas"
      }
    }, {
      "9999999999947": {
        "abstract": "En esta cuarentena, la cantidad de productos de belleza e higiene se está reduciendo.",
        "cardColor": "#8163A8",
        "fecha": {
          "day": "24",
          "month": "04",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/mexicanos-al-grito-de-detox/Portada280x200.jpg",
        "link": "post/mexicanos-al-grito-de-detox",
        "title": "Mexicanos al grito de detox"
      }
    }, {
      "9999999999948": {
        "abstract": "Las actividades que al inicio de la cuarentena realizábamos para mantener la normalidad dentro de nuestras vidas hoy están tomando un sentido más profundo.",
        "cardColor": "#40C19C",
        "fecha": {
          "day": "24",
          "month": "04",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/de-la-inercia-a-la-conciencia/Portada280x200.jpg",
        "link": "post/de-la-inercia-a-la-conciencia",
        "title": "De la inercia a la conciencia"
      }
    }, {
      "9999999999949": {
        "abstract": "Pasar tiempo a solas puede ser un arma de dos filos.",
        "cardColor": "#ED515D",
        "fecha": {
          "day": "24",
          "month": "04",
          "year": "2020"
        },
        "fotoPartada": "https://coronapage.s3-us-west-2.amazonaws.com/conmigo-o-sin-mi/Portada600x330.jpg",
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/conmigo-o-sin-mi/Portda280x200.jpg",
        "link": "post/conmigo-o-sin-mi",
        "title": "¿Conmigo o sin mí?"
      }
    }, {
      "9999999999950": {
        "abstract": "A un mes exacto del inicio de la cuarentena, hemos recapitulado nuestras reacciones como ciudadanos y consumidores",
        "cardColor": "#EFB810",
        "fecha": {
          "day": "23",
          "month": "04",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/y-la-mexi-cuarentena-se-cuenta-asi/Portada280x200.jpg",
        "link": "post/y-la-mexi-cuarentena-se-cuenta-asi",
        "title": "Y la mexi-cuarentena se cuenta así…"
      }
    }, {
      "9999999999951": {
        "abstract": "Con el fin de entender mejor las capacidades de las familias mexicanas para enfrentar el COVID-19, la UNAM ha solicitado la ayuda de todas y todos.",
        "cardColor": "#ED515D",
        "fecha": {
          "day": "22",
          "month": "04",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/unam-al-ataque/portada.jpg",
        "link": "post/unam-al-ataque",
        "title": "UNAM al ataque"
      }
    }, {
      "9999999999952": {
        "abstract": "El día de ayer se dio por iniciada oficialmente la FASE TRES, que si bien tiene implicaciones a nivel país, también tiene algunas repercusiones actitudinales en los ciudadanos. ",
        "cardColor": "#6298C4",
        "fecha": {
          "day": "22",
          "month": "04",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/ya-llego-ya-esta-aqui/Portada280x200.jpg",
        "link": "post/ya-llego-ya-esta-aqui",
        "title": "Ya llegó, ya está aquí"
      }
    }, {
      "9999999999953": {
        "abstract": "Los mexicanos nos apoyamos durante las crisis en las que se requiere actividad colectiva, pero cuando nos dicen #QuédateEnCasa se nos complica.",
        "cardColor": "#59B3D5",
        "fecha": {
          "day": "22",
          "month": "04",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/el-reto-de-ser-solidarios-sin-salir-de-casa/Portada280x200.jpg",
        "link": "post/el-reto-de-ser-solidarios-sin-salir-de-casa",
        "title": "El reto de ser solidarios sin salir de casa"
      }
    }, {
      "9999999999954": {
        "abstract": "En estos tiempos de encierro, todos bailamos en la misma pista y no precisamente al compás de la cumbia del coronavirus. Si la vida es una pista de baile, aquí una mirada a cómo danzamos en estos tiempos de encierro.",
        "cardColor": "#F7A7A6",
        "fecha": {
          "day": "21",
          "month": "04",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/a-ritmo-de-pandemia/Portada280x200.jpg",
        "link": "post/a-ritmo-de-pandemia",
        "title": "A ritmo de pandemia"
      }
    }, {
      "9999999999955": {
        "abstract": "\"Originalmente la petición gubernamental de resguardo duraría 1 mes (del 20 de marzo al 20 de abril), parecía un periodo largo, la realidad es que no hemos ganado esta batalla.",
        "cardColor": "#F9AC78",
        "fecha": {
          "day": "21",
          "month": "04",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/esto-apenas-comienza/Portada280x200.jpg",
        "link": "post/esto-apenas-comienza",
        "title": "Esto apenas comienza…"
      }
    }, {
      "9999999999956": {
        "abstract": "Nadie nos preparó para esta crisis pero podemos aprender de nuestra historia para superarla.",
        "cardColor": "#59B3D5",
        "fecha": {
          "day": "21",
          "month": "04",
          "year": "2020"
        },
        "fotoPortada": "https://coronapage.s3-us-west-2.amazonaws.com/el-pasado-nos-ensena/Portada280x200.jpg",
        "link": "post/el-pasado-nos-ensena",
        "title": "El pasado nos enseña",
        "title ": "El pasado nos enseña"
      }
    }
    ]
    datos.forEach((element,numeber) => {
      const numero = parseInt(9999999999999 - datos.length, 10)
     
      firebase.firestore().collection('premium2').doc(parseInt(numero + numeber, 10).toString()).set({
        title:element[Object.keys(element)].title,
        cardColor: element[Object.keys(element)].cardColor,
        fotoPortada: element[Object.keys(element)].fotoPortada,
        link: element[Object.keys(element)].link,
        abstract: element[Object.keys(element)].abstract,
        fecha: element[Object.keys(element)].fecha
      }).then((docRef) => {
        // this.props.history.push("/")
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      })
    });
  }
  logOut () {
    firebase.auth().signOut().then(() => {
      window.localStorage.removeItem('idToken')
      // this.setState({token: isLogin()})
      window.location.href = window.location.pathname
    }).catch(()=> {
        console.log('error de logout ')
    })
    
  }
    render() {
      const { title, logo, description, statusCode, sections, colorbg, imgbg, privado} = this.props
      const{showContent, token} = this.state
     
      if( statusCode !== 200 ) {
        return <Error statusCode={statusCode} />
      }
      return (
        <Layout title={title} image={imgbg} description={description}>
          <HeaderStyled colorbg={colorbg}>
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
              
              <div className='img-content2'>
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
              
                <a href='https://www.delarivagroup.com/' target='_blank'>
                  <img alt='imagen'  height='60' width='60' src='https://delariva.s3-us-west-2.amazonaws.com/corona-pagina/LogodlR.png' />
                </a>
              
              </div>
            </div>
            <div className='contacto-responsive'>

            </div>
          </HeaderStyled >
         
          <HeaderPost title={title} intro={description} colorbg={colorbg} imgbg={imgbg}/>
          
          {showContent ? <BodySections sections={sections} /> : 
            <Cobro />
          }
          <FooterStyled />
           

        <FloatContact>
          <a href='https://advancedxprnc.typeform.com/to/An5Fh1' target='_blank'>
            <div className='contacto'>
            Contáctanos
            </div>
          </a>
        </FloatContact>

           
          
        </Layout>)
    }
  } 