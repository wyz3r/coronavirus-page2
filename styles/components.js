import styled from "styled-components";

export const ContainerHome = styled.div`
  
  font-family: 'Arvo', serif;
  font-weight: 400;
  display: grid;
  grid-template-columns:  30vw 70vw;
  background: white;
  height: 100vh;
  width: 100vw;
  .left-static{
    height: 100vh;
    overflow: scroll;
    header {
      margin-top: 10px;
      position: relative;
      height: 60px;
      display: flex;
      flex-direction: row;
      justify-content:space-between;
      .contact {
        color: white;
        background: black;
        border-radius: 35px;
        margin-right: 30px;
        font-weight: bold;
        padding: 14px;
        font-size: 24px;

        a {
          text-decoration: none;
          color: white;
        }
        
      }
      img{
       margin: auto;
      }
      .button-header{
        cursor: pointer;
        color: black;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        margin-left: 50px;
      }
    }
    
    /* max-width: 498px;
    width: 30vw; */
  }
  .right-dinamic {
    height: 100vh;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-template-rows:  auto;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    
  }

  @media (max-width: 755px) {
    height:auto;
     display: block;
     .left-static {
      height: auto;
      margin-bottom: 15px;
      header {
     
      div {
        margin-right:30px;
        
        font-weight: bold;
        a {
          text-decoration: none;
          color: black;
        }
      }
    
    }
     }
     .right-dinamic {
      height: auto;
      display: block;
      width: 100%;
      
     }
  }
`

export const IntroCard = styled.div`
  padding-left: 40px;
  padding-right: 50px;
  h1 {
    color: black;
    font-size: 2rem;
  }
  .introContent {
   
    color: #494949;

  }
  .premium-container{
    margin-top: 50px;
    margin-bottom: 50px;
    .premiun-button{
      margin-left:auto;
      margin-right: auto;
      cursor: pointer;
      width: 300px;
      background: white;
      color: #FFB92C;
      border: 1px solid #FFB92C ;
      font-size: 25px;
      text-align: center;
      padding: 10px;
      border-radius: 25px;
      transition: all 0.3s;
      &:hover{
        background: #FFB92C;
        color: white;
        border: 1px solid #FFB92C ;
        box-shadow:  #2E353F -5px 5px 20px -5px;
      }
      &:active{
        background: #ffe5b1;
        color: white;
        border: 1px solid #ffe5b1 ;
        box-shadow:  #2E353F -5px 5px 20px -5px;
      }
      &.active{
        background: #FFB92C;
        color: white;
        border: 1px solid #FFB92C ;
        box-shadow: none;
      }
    }
    .free-button{
      cursor: pointer;
      margin-left:auto;
      margin-right: auto;
      margin-top: 30px;
      width: 300px;
      background: white;
      color: #8490FB;
      border: 1px solid #8490FB ;
      font-size: 25px;
      text-align: center;
      padding: 10px;
      border-radius: 25px;
      transition: all 0.3s;
      &:hover{
        background: #8490FB;
        color: white;
        border: 1px solid #8490FB ;
        box-shadow:  #2E353F -5px 5px 20px -5px;
      }
      &:active{
        background: #ccd1ff;
        color: white;
        border: 1px solid #ccd1ff ;
        box-shadow:  #2E353F -5px 5px 20px -5px;
      }
      &.active{
        background: #8490FB;
        color: white;
        border: 1px solid #8490FB ;
        box-shadow: none;
      }
    }
    
  }
  .imgHome {
    background-image: url('https://delariva.s3-us-west-2.amazonaws.com/corona-pagina/portada.png');
    margin: auto;
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;
    width: 295px;
    margin-top: 30px;
  }
  @media (max-width: 755px) {
      .imgHome {
      margin: auto;
      background-repeat: no-repeat;
      background-size: cover;
      height: 150px;
      width: 245px;
      margin-top: 30px;
      }
  }
`

export const CardPostStyle = styled.div`
  background: red;
  height: 600px;
  padding: 10px;
  color: white ;
  max-width: 380px;
  background: ${props => props.cardColor}; 
  display: grid; 
  grid-template-rows: 30px auto;
  grid-template-columns: 1fr;
  grid-template-areas: 
    "header "
    "imagen"
    "action";
  

  .date {
    display:flex;
    margin-top: 8px;
    justify-content: flex-end;
    padding-right: 20px;
    font-weight: bold;
    grid-area: header;
    
    .numbers {
      border-bottom: 2px solid white;
      margin-right: -7px;
      width: 23px;
      width: 40px;
      text-align: center;
    }
    .linea {
      margin-top: 10px;
      margin-right: -5px;
      width: 24px;
      height: 2px;
      background: white;
      transform: rotate(120deg);
    }
  }
  .image-post {
    background-image: url(${props => props.imgBackground});
    background-repeat:no-repeat;
    background-size: cover;
    grid-area: imagen;
    width: 280px;
    height: 200px;
    margin: auto;
    margin-top: 20px;
    
    border-radius: 10px;
  }
  .action-zone{
    grid-area: action;
    .content-post {
    width: 270px;
    margin: auto;
    margin-top: 5px;
    h2{
      font-size:1.39em;
      margin-top: 10px;
    }
    .abstract {
      height: 140px;
    }
    
    }
  .button-content {
      width: 100%;
      height: 50px;
     margin-top: 40px;
     .button-link{
        color: white;
        background: rgba(255,255,255,0.6);
        width: 130px;
        text-align: center;
        height: 20px;
        padding: 12px;
        margin: auto;
        border-radius: 25px;
        a{
          text-decoration-line: none;
          color: white;
        }
      /* position: absolute;
      bottom: 0px;
      left: 120px; */
    &:hover{
        cursor:pointer;
      }
     }
  }
  }
  
  @media (max-width: 755px) {
    max-width: 100%;
    height: auto;
    grid-template-rows: 30px auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 
    "header  header "
    "action imagen ";

    &.par{
      grid-template-areas: 
    "header  header"
    "imagen action";

    }
    .date {
      display: flex;
      margin-top: 8px;
      justify-content: flex-end;
      padding-right: 20px;
      font-weight: bold;
      
      grid-area: header;

    .numbers {
      border-bottom: 1px solid white;
      margin-right: -7px;
      font-size: 12px;
      width: 30px;
      text-align: center;
    }
    .linea {
      margin-top: 10px;
      margin-right: -5px;
      width: 24px;
      height: 1px;
      background: white;
      transform: rotate(120deg);
      }
    }
    .image-post {
      width: 125px;
      height: 125px;
      margin: auto;
      margin-top: 20px;
      border-radius: 10px;
      overflow: hidden;
      background-size:cover;
      background-position: center;
    }
    .action-zone{
      grid-area: action;
      .content-post {
          width: 100%;;
         
          margin-top: 5px;
          h2{
            margin-top: 10px;
          }
          .abstract {
            height: auto;
          }
      
      }
    .button-content{
        width:100%;
        height: 50px;
        margin-top: 40px;
      .button-link{
          color: white;
          background: rgba(255,255,255,0.6);
          width: 130px;
          text-align: center;
          height: 20px;
          padding: 12px;
          margin: auto;
          border-radius: 25px;
        /* position: absolute;
        bottom: 0px;
        left: 120px; */
      &:hover{
          cursor:pointer;
        }
      }
    }
  }
  }
  
`

export const MoreButton = styled.div`

      margin-left:auto;
      margin-right: auto;
      margin-top: 15px;
      margin-bottom: 25px;
      cursor: pointer;
      width: 300px;
      background: #FF777B;
      color: white;
      border: 1px solid #FF777B ;
      font-size: 25px;
      text-align: center;
      padding: 10px;
      border-radius: 25px;
      transition: all 0.3s;
      height:34px;
      &:hover{
        background: #ED515D;
        color: white;
        border: 1px solid #ED515D ;
        box-shadow:  #2E353F -5px 5px 20px -5px;
      }
      &:active{
        background: #ED515D;
        color: white;
        border: 1px solid #ED515D ;
        box-shadow:  #2E353F -5px 5px 20px -5px;
      }
      &.active{
        background: #ED515D;
        color: white;
        border: 1px solid #ED515D ;
        box-shadow: none;
      }
`