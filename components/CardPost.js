import React from 'react'
import {Link} from '../routes'

import  {CardPostStyle} from '../styles/components'
import DatePost from './DatesPost'
 const CardPost = (props) => {
  return (
    <CardPostStyle className={props.parnopar % 2 === 0 ? 'par' :'no'}
      cardColor={props.post.cardColor}
      imgBackground={props.post.fotoPortada}
      >
      <DatePost fecha={props.post.fecha}  />
      <div className='image-post' />
      <div className='action-zone'>
        <div className='content-post'>
          <h2>{props.post.title}</h2>
          <div className='abstract'>
            {props.post.abstract}
          </div>
        </div>
        <Link href={props.post.link} >
          <div className='button-content'>
            <div className='button-link'>
              <a className='close'> Leer más </a>
            </div>
          </div>
        </Link>
      </div>
      
      
    </CardPostStyle>
  )
}

export default CardPost
