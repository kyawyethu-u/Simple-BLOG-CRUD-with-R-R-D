import {CalendarDaysIcon,ArrowLeftIcon} from "@heroicons/react/24/solid"
import { Link,useSubmit } from "react-router-dom";

const Detailitems = ({detailsData}) => {
  const {description,image,title,date} = detailsData;
  const submit =useSubmit();
  
  const postDeleteHandler = () =>{
    const confirmStatus = window.confirm("Are you sure you want to delete?");
    if(confirmStatus){
      submit(null,{method: "DELETE"});
    }
  }

   
  return (
 <section className='details'>
   <div className="detail-header"> 
    <div>
    <h3 className='detail-title'>{title}</h3>
    <p className='date'><CalendarDaysIcon className="clock-icon"/><span>{date}</span></p>
    </div>
   
   <Link to={"/"}><ArrowLeftIcon className="arrow-icon"/></Link>
   </div>

    <img src={image} alt={title} />
    <p className='description'>{description}</p>
    <div className="detail-footer">
       <Link to={`edit-post`}>
       <p className="btn sm">Edit</p>
       </Link>
        <p className="btn sm" onClick={postDeleteHandler}>Delete</p>
    </div>
    
    <hr />



 </section>
  )
}

export default Detailitems