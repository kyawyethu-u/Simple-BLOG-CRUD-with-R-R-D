import React from 'react'
import CreateForm from '../components/CreateForm'
import { useRouteLoaderData } from 'react-router-dom'

const Edit = () => {
  const post = useRouteLoaderData("post-detail");
  return (
    <><CreateForm header={"Edit your posts now"} btnText={"Update Post"} oldCreateData={post}/></>
  )
}

export default Edit