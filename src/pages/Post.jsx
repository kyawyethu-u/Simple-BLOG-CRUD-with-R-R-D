import React from 'react'
import { useLoaderData } from 'react-router-dom'
import PostItems from '../components/PostItems';

const Post = () => {
    const postsData = useLoaderData();
   
    
  return (
    <>
    { postsData.length > 0 && postsData.map((postData) => ( <PostItems postData={postData} key={postData.id}/>))}
    </>
  )
}

export default Post

export const loader =async () =>{
 const response = await fetch('http://localhost:8080/posts');

 if(!response.ok){


 }else{ const data = await response.json();
        
    return data.posts;
 }
}