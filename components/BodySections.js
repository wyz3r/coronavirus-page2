import React from 'react'
import styled from "styled-components";
import TextSection from './TextSection'
import TextSection2 from './TextSection2'

import VideoSection from './VideoSection'
import VideoHorizontal from './videoHorizontal'

import AdvandceSection from './AdvandceSection'
import InfografiaSection from './InfografiaSection'
import TextImgSection  from './TextImgSection'
import Carusell from './Carusell'
import Carrusell2 from './Carrusel2'
import GraphSections from './GraphSections'

import ConclusionSection from './ConclusionSection'

const BodyContent =  styled.div`
    font-family: 'Arvo', serif;
    margin: auto;
    
    margin-top:0;
    margin-top: 270px;
    width: 80%;
    max-width: 900px;
    @media (max-width: 755px) {
      margin-top: 130px;
  }
`
const BodySections = (props) => {
  return (
    <BodyContent>
      {props.sections.map(((section, index) => {
        switch(section.type){
          case 'textSection':
            return (<TextSection key={section.type + index} bodyText={section.body} titulo={section.titulo} />)
          break
          case 'textSection2':
            return (<TextSection2 key={section.type + index} bodyText={section.body} titulo={section.titulo} />)
          break
          case 'AdvandceSection':
            return (<AdvandceSection key={section.type + index} body={section.body} titulo={section.titulo} img={section.img} />)
          break
          case 'AdvandceSection2':
            return (<InfografiaSection key={section.type + index} body={section.body} titulo={section.titulo} img={section.img} />)
          break
          case 'ConclusionSection':
            return (<ConclusionSection key={section.type + index} bodyText={section.body} titulo={section.titulo} />)
          break
          case 'VideoSection':
            return (<VideoSection key={section.type + index} body={section.body} titulo={section.titulo} videoUrl={section.videoUrl} />)
          break
          case 'Carusell':
            return (<Carusell key={section.type + index} imgCollecttion={section.imgCollecttion}  />)
          break
          case 'TextImgSection':
            return (<TextImgSection key={section.type + index} bodyText={section.body} titulo={section.titulo} />)
          break
          case 'VideoHorizontal':
            return (<VideoHorizontal key={section.type + index} body={section.body} titulo={section.titulo} videoUrl={section.videoUrl} />)
          break
          case 'Carrusell2':
            return (<Carrusell2 key={section.type + index} imgCollecttion={section.imgCollecttion}  />)
          break
          case 'graph':
            return (<GraphSections  />)
          break
        //   case 'multimagen':
        //     cacheManager({req, res, pagePath: '/multimagen', queryParams: {id: arregl}})
        //     break
      } 
      }))}
      
       {/* <VideoSection />
       <AdvandceSection />
       <Carusell />
       <TextImgSection /> */}
    </BodyContent>
     
  )
}

export default BodySections

// {
//   "type": "textSection",
//   "titulo":"",
//   "body":[]
// }
