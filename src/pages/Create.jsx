import React from 'react'
import CreateForm from '../components/CreateForm'


const Create = () => {
  return (
    <>
    <CreateForm header={"Create your posts now"} 
    btnText={"Create Post"}
    method={"post"}/>
    </>
  )
}

export default Create

