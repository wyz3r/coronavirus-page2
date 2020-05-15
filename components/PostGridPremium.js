import React, {useEffect, useState } from 'react'
import CardPost from './CardPost'
import firebase from 'firebase/app'
import 'firebase/firestore'
import {MoreButton} from '../styles/components'


const PostsGridPremium = () => {
  const [posts, setPosts] = useState([]);
  const [morePost, setMorePost] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(9)
  
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    const postes = []
    const postes2 = []
    firebase.auth().currentUser.getIdToken(true).then((idToken) => {
      console.log(idToken)
      firebase.firestore().collection('premium2').get()
      .then((docRef) => {
        
        docRef.forEach((doc) =>{
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data())
          
          postes2.push({[doc.id]: doc.data()})
          postes.push(doc.data())
          setMorePost(true)
        })
        console.log("posteo:", JSON.stringify( postes2))

        setPosts(postes)
      })
    }).catch(function (error) {
      console.log({error})
    })
   
  },[]);
  // console.log("posteo:", JSON.stringify( posts))
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const more = ( ) => {
    setPostPerPage(parseInt(postPerPage + 9))
  } 

  return (
    <>
    {currentPosts.map((post, index )=> {
      return <CardPost key={post.title+'3'}
            post={post} parnopar={index}/>
    })}

    {morePost? <MoreButton onClick={() => {more()}}>
      Ver más 
    </MoreButton>: ''}
    </>
  )
}

export default PostsGridPremium
