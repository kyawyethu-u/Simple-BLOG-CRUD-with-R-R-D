import React from 'react'
import { redirect, useRouteLoaderData } from 'react-router-dom'
import Detailitems from '../components/Detailitems';

const Detail = () => {
  // const detailsData = useLoaderData();
  const detailsData=useRouteLoaderData("post-detail");

  return (
    <section>
        <Detailitems detailsData={detailsData}/>
    </section>
  )
}

export default Detail

export const loader = async({request,params}) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);
  if(!response.ok){

  }else{
    const details = await response.json();
    
        return details.post;
   };

}
export const action =async({request,params})=>{
 
  const response =await fetch(`http://localhost:8080/posts/${params.id}`,{
    method: request.method,
  }
  )
    if(!response.ok){
        throw new Error("")
    }
      return redirect("/");
    
}

