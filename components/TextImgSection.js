import React from 'react'
import styled from "styled-components";

const TextImgStyle = styled.div`
    width: 100%;
    h2{
      font-size: 40px;
      margin-bottom: 0;
    }
  .content-img-text{
    display: flex;
    
    .img-content{
      width: 50%;
      padding: 10px;
    }
    .text-content {
      width: 50%;
    }
   
    p{
      
      color: #494949;
      font-size: 1.1rem;
    }
  }
  @media (max-width: 755px) {
    .content-img-text{
    display: block;
    
    .img-content{
      width: 100%;
      padding: 10px;
      img{
        width: 90%;
      }
    }
    .text-content {
      width: 100%;
    }
   
    p{
      
      color: #494949;
      font-size: 1.1rem;
    }
  }
  }
`
const TextImgSection = ({text, bodyText}) => {
  return (
    <TextImgStyle>
      <h2>Lorem ipsum</h2>
      <div className='content-img-text'>
        <div className='text-content'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore commodi voluptatem, reiciendis illum vitae possimus, ipsam ipsum numquam nihil tempora incidunt quae delectus a adipisci amet expedita, aspernatur animi Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore commodi voluptatem, reiciendis illum vitae possimus, ipsam ipsum numquam nihil tempora incidunt quae delectus a adipisci amet expedita, aspernatur animi Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore commodi voluptatem, reiciendis illum vitae possimus, ipsam ipsum numquam nihil tempora incidunt quae delectus a adipisci amet expedita, aspernatur animi Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore commodi voluptatem, reiciendis illum vitae possimus, ipsam ipsum numquam nihil tempora incidunt quae delectus a adipisci amet expedita, aspernatur animi Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore commodi voluptatem, reiciendis illum vitae possimus, ipsam ipsum numquam nihil tempora incidunt quae delectus a adipisci amet expedita, aspernatur animi</p>
        </div>
        <div className='img-content' >
          <img src='https://video-images.vice.com/test-uploads/articles/5e74c201cd0878009c4432ed/lede/1584710826566-ghetto-Kumbe.png?crop=1xw:0.5806xh;0xw,0.2007xh&resize=600:*'/>
        </div>
      </div>
      
      
    </TextImgStyle>
  )
}

export default TextImgSection
