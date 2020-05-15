import React, {useEffect, useState} from 'react'
import CardPost from '../components/CardPost'
import {MoreButton} from '../styles/components'

const PostsGrid = ({Posts}) => {
 
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(9)

  const more = ( ) => {
    setPostPerPage(parseInt(postPerPage + 9))
  } 
 
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = Posts.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <>
    {currentPosts.map((post, index )=> {
      return <CardPost key={'card' + index} post={post} parnopar={index}/>
    })}

    {<MoreButton onClick={() => {more()}}>
      Ver más 
    </MoreButton>}

    </>
  )
}

export default PostsGrid
